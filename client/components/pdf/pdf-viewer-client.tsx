// components/pdf/pdf-viewer-client.tsx
"use client";

import { PDFViewer, Document, Page, Text, View } from "@react-pdf/renderer";
import { styles } from "./style";

const PawmedPDF = () => (
	<Document>
		<Page size="A4" style={styles.page}>
			<View style={styles.section}>
				<Text>Section #1</Text>
			</View>
			<View style={styles.section}>
				<Text>Section #2 and #5</Text>
			</View>
		</Page>
	</Document>
);

export default function PDFViewerClient() {
	return (
		<div className="w-full h-[750px]">
			<PDFViewer style={{ width: "100%", height: "100%" }}>
				<PawmedPDF />
			</PDFViewer>
		</div>
	);
}
