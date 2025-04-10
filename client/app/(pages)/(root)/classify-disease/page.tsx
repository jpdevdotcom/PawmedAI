import { Suspense } from "react";
import { ClassifyDiseaseComponent } from "./component";

export default function ClassifyDisease() {
	return (
		<Suspense fallback={"<p>Loadingggg...</p>"}>
			<ClassifyDiseaseComponent />
		</Suspense>
	);
}
