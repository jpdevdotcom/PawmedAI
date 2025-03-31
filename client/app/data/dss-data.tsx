import { getData } from "../api/classify-image";

export type DssDataProps = {
	title: string;
	data: string[] | FindingsProps | string;
};

type FindingsProps = {
	findings: { feature: string; description: string; severity: string }[];
};

export const DssData = async ({ image_data }: { image_data: string }) => {
	const dss_data = await getData({ image_url: image_data || "" });

	const dss: DssDataProps[] = [
		{
			title: "Disease",
			data: dss_data.disease,
		},
		{
			title: "Diagnosis",
			data: dss_data.diagnosis,
		},
		{
			title: "Likelihood",
			data: dss_data.likelihood,
		},
		{
			title: "justification",
			data: dss_data.justification,
		},
		{
			title: "Findings",
			data: {
				findings: dss_data.findings.map((finding) => ({
					feature: finding.feature,
					description: finding.description,
					severity: finding.severity,
				})),
			},
		},
		{
			title: "Differential Diagnosis",
			data: dss_data.differential_diagnoses,
		},
		{
			title: "Further Investigation",
			data: dss_data.further_investigation.map(
				(investigation) => investigation
			),
		},
		{
			title: "Recommendation",
			data: dss_data.recommendations,
		},
		{
			title: "Veterinarian Notes",
			data: dss_data.veterinarian_notes,
		},
	];

	return { dss };
};
