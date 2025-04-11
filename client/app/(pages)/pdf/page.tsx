// app/(pages)/pdf/page.tsx
import { Suspense } from "react";
import PDFLoader from "@/components/pdf/pdf-loader";

export default function PDFPage() {
	return (
		<Suspense fallback={<div>Loading PDF...</div>}>
			<PDFLoader />
		</Suspense>
	);
}
