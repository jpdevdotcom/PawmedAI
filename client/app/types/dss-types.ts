export type DssType = {
	disease: string;
	diagnosis: string;
	likelihood: string;
	justification: string;
	findings: [{ feature: string; description: string; severity: string }];
	differential_diagnoses: string;
	further_investigation: string[];
	recommendations: string;
	veterinarian_notes: string;
};
