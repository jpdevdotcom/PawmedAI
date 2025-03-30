"use client";

import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import "@uploadcare/react-uploader/core.css";
import { OutputCollectionState } from "@uploadcare/react-uploader";
import Image from "next/image";
import { dataResult } from "@/app/api/uploadcare-api/list-of-files";
import { useState } from "react";

function Uploader() {
	const [data, setData] = useState<string | null>("");

	const isDone = async (e: OutputCollectionState) => {
		// console.log(e.allEntries[0].cdnUrl);
		const dt = await dataResult({ uuid: e.allEntries[0].uuid });
		setData(dt);
	};

	return (
		<div>
			<FileUploaderRegular
				onDoneClick={isDone}
				sourceList="local, camera, facebook"
				cameraModes="photo"
				classNameUploader="uc-light"
				pubkey="d64bdc6f78d22cc47060"
			/>

			{data && <Image src={data} alt={data} width={500} height={500} />}
		</div>
	);
}

export default Uploader;
