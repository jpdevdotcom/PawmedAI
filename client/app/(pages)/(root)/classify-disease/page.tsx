import { Suspense } from "react";
import { ClassifyDiseaseComponent } from "./component";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "Clssify Possible Disease",
		description: "Classify the possible disease of your pet!",
	};
}

export default function ClassifyDisease() {
	return (
		<Suspense fallback={"<p>Loadingggg...</p>"}>
			<ClassifyDiseaseComponent />
		</Suspense>
	);
}
