import { fileInfo, UploadcareSimpleAuthSchema } from "@uploadcare/rest-client";

const uploadcareSimpleAuthSchema = new UploadcareSimpleAuthSchema({
	publicKey: "d64bdc6f78d22cc47060",
	secretKey: "4f327c17588146b773f8",
});

export const dataResult = async () => {
	const result = await fileInfo(
		{
			uuid: "bf7189f9-fd1e-4537-8bfe-a03546b74993",
		},
		{ authSchema: uploadcareSimpleAuthSchema }
	);

	console.log(result);
	return result.originalFileUrl;
};
