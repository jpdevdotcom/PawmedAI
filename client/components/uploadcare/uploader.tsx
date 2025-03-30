"use client";

import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import "@uploadcare/react-uploader/core.css";
import { OutputCollectionState } from "@uploadcare/react-uploader";
import Image from "next/image";
import { dataResult } from "@/app/api/uploadcare-api/list-of-files";
import { useState } from "react";
import { getData } from "@/app/api/classify-image";
// import { FileInfo } from "@uploadcare/rest-client";

function Uploader() {
	const [data, setData] = useState<string | null>("");
	const [onLoad, setOnLoad] = useState<boolean>(false);
	// const [images, setImages] = useState<FileInfo[]>([]);

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

	// const load = async () => {
	// 	const allData = await loadAllData();

	// 	console.log(allData);
	// 	setImages(allData.results);

	// 	allData.results.map((result) => {
	// 		console.log(result.originalFileUrl);
	// 	});
	// };

	return (
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
	);
}

export default Uploader;
