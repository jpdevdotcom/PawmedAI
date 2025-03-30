import { Injectable } from "@nestjs/common";
import OpenAI from "openai";
import { dsstype } from "./types/dss-type";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AppService {
	constructor(private readonly configService: ConfigService) {}

	async ClassifyDisease() {
		const openai = new OpenAI({
			baseURL: this.configService.getOrThrow<string>("BASE_URL"),
			apiKey: this.configService.getOrThrow<string>("API_KEY"),
		});

		const completion = await openai.chat.completions.create({
			model: this.configService.getOrThrow<string>("LLM"),
			messages: [
				{
					role: "user",
					content: [
						{
							type: "text",
							text:
								"Suppose you are an expert Veterinarian with a wide scope of knowledge about veterinary medicine. Analyze the image provided and determine the possible disease. On the likelihood, state if 'Low (percentage here)', 'Moderate (percentage here)', or 'High (percentage here)'. Your response should include the following keys in this specific format:" +
								"{ 'disease': 'string', 'diagnosis': 'string', 'likelihood': 'string', 'justification': 'string', 'findings': [ { 'feature': 'string', 'description': 'string', 'severity': 'string' }, ... ], 'differential_diagnoses': [ 'string', ... ], 'further_investigation': [ 'string', ... ], 'recommendations': 'string', 'veterinarian_notes': 'string' }" +
								"Provide a clear, structured response in valid JSON format without any additional markdown formatting.",
						},
						{
							type: "image_url",
							image_url: {
								url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkcr3qtcicJqj8ekVDzD642zBkZNP1VHcnCw&s",
							},
						},
					],
				},
			],
		});

		try {
			const content = completion.choices[0].message.content;

			const finalResponse = content
				.trim()
				.replace(/^```json/, "")
				.replace(/^```/, "")
				.replace(/```$/, "")
				.replace(/^"|"$/g, "");

			const res: dsstype = JSON.parse(finalResponse);

			res.findings.map((findings) => {
				console.log(findings.feature);
			});

			return res;
		} catch (error) {
			console.log(error.message);
		}
	}
}
