import {
	fileInfo,
	listOfFiles,
	UploadcareSimpleAuthSchema,
} from "@uploadcare/rest-client";

const uploadcareSimpleAuthSchema = new UploadcareSimpleAuthSchema({
	publicKey: process.env.NEXT_PUBLIC_UC_PUB_KEY as string,
	secretKey: process.env.NEXT_PUBLIC_UC_AUTH_SECRET_KEY as string,
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

export const loadAllData = async () => {
	const result = await listOfFiles(
		{},
		{ authSchema: uploadcareSimpleAuthSchema }
	);

	return result;
};
