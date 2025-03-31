"use client";

import { OutputCollectionState } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";
import { useState } from "react";
import { dataResult } from "./api/uploadcare-api/list-of-files";
import { getData } from "./api/classify-image";
import Image from "next/image";
import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";

export default function Home() {
	const [data, setData] = useState<string | null>("");
	const [onLoad, setOnLoad] = useState<boolean>(false);
	const [uploaderKey, setUploaderKey] = useState(0);

	const isDone = async (e: OutputCollectionState) => {
		try {
			setUploaderKey((prev) => prev + 1);
			setOnLoad(true);
			const dt = await dataResult({ uuid: e.allEntries[0].uuid });
			setData(dt);

			const posts = await getData({ image_url: dt || "" });
			console.log(posts);
		} catch (error) {
			console.log(error);
		} finally {
			setOnLoad(false);
		}
	};

	return (
		<div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-[32px] row-start-2 items-center">
				<h1 className="text-2xl font-bold">PawMed AI V2.0</h1>

				<div className="flex flex-col items-center gap-5">
					<FileUploaderRegular
						key={uploaderKey}
						onDoneClick={isDone}
						sourceList="local, camera, facebook"
						cameraModes="photo"
						classNameUploader="uc-light"
						pubkey="d64bdc6f78d22cc47060"
					/>

					{!onLoad ? (
						data && (
							<Image
								className="rounded-md"
								src={data}
								alt={data}
								width={500}
								height={500}
								loader={uploadcareLoader}
							/>
						)
					) : (
						<div>Loading...</div>
					)}
				</div>
			</main>
		</div>
	);
}
