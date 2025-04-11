// components/pdf/pdf-loader.tsx
"use client";

import { useSearchParams } from "next/navigation";
import PDFLayout from "./pdf-layout";

export default function PDFLoader() {
	const searchParam = useSearchParams();
	const img = searchParam.get("imgUrl");

	return <PDFLayout imgUrl={String(img)} />;
}
