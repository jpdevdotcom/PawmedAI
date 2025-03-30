"use client";

import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import "@uploadcare/react-uploader/core.css";
import { OutputCollectionState } from "@uploadcare/react-uploader";

function Uploader() {
	const isDone = (e: OutputCollectionState) => {
		console.log(e);
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
		</div>
	);
}

export default Uploader;
