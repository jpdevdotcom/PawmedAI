"use client";
// app/(pages)/pdf/page.tsx
import PDFLayout from "@/components/pdf/pdf-layout";
import { useSearchParams } from "next/navigation";

export default function PDFPage() {
	const searchParam = useSearchParams();
	const img = searchParam.get("imgUrl");

	return (
		<div>
			<PDFLayout imgUrl={String(img)} />
		</div>
	);
}
