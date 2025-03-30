"use client";

import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import "@uploadcare/react-uploader/core.css";
import { OutputCollectionState } from "@uploadcare/react-uploader";
import Image from "next/image";
import { dataResult } from "@/app/api/uploadcare-api/list-of-files";
import { useState } from "react";

function Uploader() {
	const [data, setData] = useState<string | null>("");

	const isDone = async () => {
		// console.log(e.allEntries[0].cdnUrl);
		const dt = await dataResult();
		setData(dt);
	};

	const uploadClick = async () => {
		console.log("Clicked");
	};

	return (
		<div>
			<FileUploaderRegular
				onModalOpen={isDone}
				onUploadClick={uploadClick}
				sourceList="local, camera, facebook"
				cameraModes="photo"
				classNameUploader="uc-light"
				pubkey="d64bdc6f78d22cc47060"
			/>

			{data && <Image src={data} alt={data} width={100} height={100} />}
		</div>
	);
}

export default Uploader;
