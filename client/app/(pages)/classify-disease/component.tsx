"use client";

import { OutputCollectionState } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";
import { useState } from "react";
import Image from "next/image";
import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { DssData, DssDataProps } from "@/app/data/dss-data";
import { dataResult } from "@/app/api/uploadcare-api/list-of-files";
import { Lens } from "@/components/magicui/lens";

export function ClassifyDiseaseComponent() {
	const [imageUrl, setImageUrl] = useState<string | null>("");
	const [dssData, setDssData] = useState<DssDataProps[]>([]);
	const [onLoad, setOnLoad] = useState<boolean>(false);
	const [uploaderKey, setUploaderKey] = useState(0);

	const isDone = async (e: OutputCollectionState) => {
		try {
			setUploaderKey((prev) => prev + 1);
			setOnLoad(true);
			const image_url = await dataResult({ uuid: e.allEntries[0].uuid });
			setImageUrl(image_url);

			const { dss } = await DssData({ image_data: image_url || "" });

			dss.map((dss) => {
				console.log(dss.data);
			});

			setDssData(dss);
		} catch (error) {
			console.log(error);
		} finally {
			setOnLoad(false);
		}
	};

	return (
		<div className="items-center py-5 h-full">
			<main className="flex gap-[32px] w-full h-full">
				<div className="w-1/2 flex flex-col justify-between items-center">
					<div className="space-y-5 h-full">
						<div className="space-y-1">
							<h1 className="text-4xl font-bold">Classify Possible Disease</h1>
							<p className="text-gray-500 text-base">
								Analyzing and categorizing potential health conditions based on
								symptoms, medical history, and diagnostic data to support
								accurate diagnosis and treatment planning.
							</p>
						</div>

						<div
							className={`space-y-2 ${
								onLoad && "pointer-events-none opacity-30"
							}`}
						>
							<p className="text-base text-gray-500">
								<b>Click</b> or <b>drag</b> to upload an image.
							</p>
							<FileUploaderRegular
								className="file-uploader rounded-md w-full hover:bg-gray-50"
								key={uploaderKey}
								onDoneClick={isDone}
								sourceList="local, camera, facebook"
								cameraModes="photo"
								classNameUploader="uc-light"
								pubkey={`${process.env.NEXT_PUBLIC_UC_PUB_KEY}`}
								imgOnly={true}
								modalScrollLock={true}
								modalBackdropStrokes={true}
								removeCopyright={true}
								confirmUpload={true}
								multiple={false}
							/>
						</div>
					</div>

					<div className="text-center w-1/2">
						<h2 className="text-sm text-gray-400 font-bold">
							PawMed AI Disclaimer:
						</h2>
						<p className="list-disc pl-5 text-xs text-gray-400">
							PawMed AI offers disease suggestions based on images. It&apos;s
							not a substitute for veterinary advice. Always consult a vet.
						</p>
					</div>
				</div>

				<div className="flex flex-col w-1/2 h-full items-center gap-5 p-5 bg-gray-50 rounded-lg">
					{!onLoad ? (
						dssData.length > 0 ? (
							imageUrl && (
								<div className="flex flex-col items-center space-y-5 h-[37em] overflow-y-scroll">
									<div className="relative w-full">
										<Lens
											zoomFactor={2}
											lensSize={250}
											isStatic={false}
											ariaLabel="Zoom Area"
										>
											<Image
												className="rounded-md"
												src={imageUrl}
												alt={imageUrl}
												width={100}
												height={100}
												loader={uploadcareLoader}
												layout="responsive"
											/>
										</Lens>
									</div>

									<div className="space-y-3">
										{dssData.map((dss, idx) => (
											<div key={idx} className="mb-4">
												<h1 className="font-bold">{dss.title}:</h1>
												{Array.isArray(dss.data) ? (
													<ul className="list-disc pl-10">
														{dss.data.map((item, i) => (
															<li key={i}>{item}</li>
														))}
													</ul>
												) : typeof dss.data === "string" ? (
													<p>{dss.data}</p>
												) : "findings" in dss.data ? (
													<div className="space-y-2">
														{dss.data.findings.map((finding, i) => (
															<div key={i} className="border-b pb-2 pl-5">
																<p>
																	<span className="font-semibold">
																		Feature:
																	</span>{" "}
																	{finding.feature}
																</p>
																<p>
																	<span className="font-semibold">
																		Description:
																	</span>{" "}
																	{finding.description}
																</p>
																<p>
																	<span className="font-semibold">
																		Severity:
																	</span>{" "}
																	{finding.severity}
																</p>
															</div>
														))}
													</div>
												) : (
													<p>{JSON.stringify(dss.data)}</p>
												)}
											</div>
										))}
									</div>
								</div>
							)
						) : (
							<div className="flex flex-col items-center justify-center h-full">
								<Image
									src="/no_data_animation.gif"
									alt="no data animation"
									width={100}
									height={100}
								/>
								<p className="text-base text-gray-500">No data yet...</p>
							</div>
						)
					) : (
						<div>Loading...</div>
					)}
				</div>
			</main>
		</div>
	);
}
