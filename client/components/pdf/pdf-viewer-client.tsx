/* eslint-disable jsx-a11y/alt-text */
// components/pdf/pdf-viewer-client.tsx
"use client";

import {
	PDFViewer,
	Document,
	Page,
	Text,
	View,
	Image,
	pdf,
} from "@react-pdf/renderer";
import { styles } from "./style";
import { usePdfData } from "@/hooks/use-pdf-data";
import { DssDataProps } from "@/app/data/dss-data";
import { useEffect, useState } from "react";
import { saveAs } from "file-saver";

const PawmedPDF = ({
	animalData,
	imgUrl,
}: {
	animalData: DssDataProps[];
	imgUrl: string;
}) => (
	<Document>
		<Page size="A4" style={styles.page}>
			<View style={styles.header}>
				<View style={[styles.title, styles.textBold]}>
					<Image
						src={"/pawlogo.png"}
						source={"test"}
						style={styles.titleImage}
					/>
					<Text>PawMed AI</Text>
				</View>
				<View>
					<Text>{new Date().toLocaleDateString()}</Text>
				</View>
			</View>

			<View style={styles.information}>
				<View style={styles.informationImage}>
					<Image src={imgUrl} />
				</View>

				<View style={styles.informationData}>
					{animalData.map((data, i) => {
						// Render section title
						return (
							<View key={i} style={{ marginBottom: 10 }}>
								<Text style={styles.textBold}>
									{data.title !== "Disease" && data.title}
								</Text>

								{/* If it's an array of strings */}
								{Array.isArray(data.data) && (
									<View>
										{data.data.map((item, j) => (
											<Text key={`${i}-${j}`}>{item}</Text>
										))}
									</View>
								)}

								{/* If it's a plain string */}
								{typeof data.data === "string" && (
									<View>
										<Text
											style={
												data.title === "Disease"
													? { fontSize: "35px", fontFamily: "Helvetica-Bold" }
													: { fontSize: "12px" }
											}
										>
											{data.data}
										</Text>
									</View>
								)}

								{/* If it's the complex "findings" type */}
								{typeof data.data === "object" && "findings" in data.data && (
									<View>
										{data.data.findings.map((finding, j) => (
											<View key={j} style={{ marginBottom: 5 }}>
												<Text>Feature: {finding.feature}</Text>
												<Text>Description: {finding.description}</Text>
												<Text>Severity: {finding.severity}</Text>
											</View>
										))}
									</View>
								)}
							</View>
						);
					})}
				</View>
			</View>
		</Page>
	</Document>
);

export default function PDFViewerClient({ imgUrl }: { imgUrl: string }) {
	const { animalData } = usePdfData();
	const [isMobile, setIsMobile] = useState(false);
	const [pdfUrl, setPdfUrl] = useState("");

	useEffect(() => {
		// Check if mobile device
		const checkIfMobile = () => {
			return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent
			);
		};
		setIsMobile(checkIfMobile());
	}, []);

	useEffect(() => {
		if (animalData && animalData.length > 0) {
			// Generate PDF blob and create URL
			const generatePdf = async () => {
				const blob = await pdf(
					<PawmedPDF animalData={animalData} imgUrl={imgUrl} />
				).toBlob();
				const url = URL.createObjectURL(blob);
				setPdfUrl(url);
				return () => URL.revokeObjectURL(url);
			};
			generatePdf();
		}
	}, [animalData, imgUrl]);

	const handleDownload = () => {
		if (pdfUrl) {
			saveAs(pdfUrl, "pawmed-report.pdf");
		}
	};

	if (!animalData || animalData.length === 0) {
		return (
			<div className="w-full h-screen flex items-center justify-center">
				<p>No data available for PDF generation</p>
			</div>
		);
	}

	if (isMobile) {
		return (
			<div className="w-full h-screen flex flex-col items-center justify-center p-4">
				<div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md text-center">
					<h2 className="text-xl font-bold mb-4">PDF Report Ready</h2>
					<p className="mb-6">
						For the best experience on mobile, please download the PDF report.
					</p>
					<button
						onClick={handleDownload}
						className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
						disabled={!pdfUrl}
					>
						Download PDF Report
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className="w-full h-screen">
			<PDFViewer style={{ width: "100%", height: "100%" }}>
				<PawmedPDF animalData={animalData} imgUrl={imgUrl} />
			</PDFViewer>
		</div>
	);
}
