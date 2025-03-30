import { fileInfo, UploadcareSimpleAuthSchema } from "@uploadcare/rest-client";

const uploadcareSimpleAuthSchema = new UploadcareSimpleAuthSchema({
	publicKey: "d64bdc6f78d22cc47060",
	secretKey: "4f327c17588146b773f8",
});

export const dataResult = async ({ uuid }: { uuid: string | null }) => {
	const result = await fileInfo(
		{
			uuid: `${uuid}`,
		},
		{ authSchema: uploadcareSimpleAuthSchema }
	);

	console.log(result);
	return result.originalFileUrl;
};
