"use client";

import { OutputCollectionState } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";
import { useState } from "react";
import { dataResult } from "./api/uploadcare-api/list-of-files";
import { getData } from "./api/classify-image";
import Image from "next/image";
import { FileUploaderRegular } from "@uploadcare/react-uploader/next";

export default function Home() {
	const [data, setData] = useState<string | null>("");
	const [onLoad, setOnLoad] = useState<boolean>(false);

	const isDone = async (e: OutputCollectionState) => {
		// console.log(e.allEntries[0].cdnUrl);
		try {
			setOnLoad(true);
			const dt = await dataResult({ uuid: e.allEntries[0].uuid });
			setData(dt);

			const posts = await getData({ image_url: dt || "" });
			console.log(posts.diagnosis);
		} catch (error) {
			console.log(error);
		} finally {
			setOnLoad(false);
		}
	};

	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-[32px] row-start-2 items-center">
				<h1 className="text-2xl font-bold">PawMed AI V2.0</h1>

				<div>
					<FileUploaderRegular
						onDoneClick={isDone}
						sourceList="local, camera, facebook"
						cameraModes="photo"
						classNameUploader="uc-light"
						pubkey="d64bdc6f78d22cc47060"
					/>

					{!onLoad ? (
						data && <Image src={data} alt={data} width={500} height={500} />
					) : (
						<div>Loading...</div>
					)}

					{/* {images.map(
                  (i, idx) =>
                    i.originalFileUrl && (
                      <Image
                        key={idx}
                        src={i.originalFileUrl}
                        alt={i.originalFilename}
                        width={500}
                        height={500}
                      />
                    )
                )} */}
				</div>
			</main>
		</div>
	);
}
