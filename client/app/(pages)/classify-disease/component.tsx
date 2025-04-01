"use client";

import { OutputCollectionState } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";
import { useState } from "react";
import Image from "next/image";
import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { DssData, DssDataProps } from "@/app/data/dss-data";
import { dataResult } from "@/app/api/uploadcare-api/list-of-files";

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
		<div className="items-center">
			<main className="flex flex-col gap-[32px] row-start-2">
				<h1 className="text-2xl font-bold">Classify Pet&apos;s Disease</h1>

				<div className="flex flex-col items-center gap-5">
					<FileUploaderRegular
						key={uploaderKey}
						onDoneClick={isDone}
						sourceList="local, camera, facebook"
						cameraModes="photo"
						classNameUploader="uc-light"
						pubkey="d64bdc6f78d22cc47060"
						removeCopyright={true}
						confirmUpload={true}
						multiple={false}
					/>

					{!onLoad ? (
						imageUrl && (
							<div className="flex flex-col items-center justify-center w-[50em] space-y-5">
								<Image
									className="rounded-md"
									src={imageUrl}
									alt={imageUrl}
									width={500}
									height={500}
									loader={uploadcareLoader}
								/>

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
																<span className="font-semibold">Feature:</span>{" "}
																{finding.feature}
															</p>
															<p>
																<span className="font-semibold">
																	Description:
																</span>{" "}
																{finding.description}
															</p>
															<p>
																<span className="font-semibold">Severity:</span>{" "}
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
						<div>Loading...</div>
					)}
				</div>
			</main>
		</div>
	);
}
