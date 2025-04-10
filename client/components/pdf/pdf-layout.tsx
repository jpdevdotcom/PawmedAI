"use client";

import dynamic from "next/dynamic";

// Dynamically import PDFViewer with SSR disabled
const PDFViewerClient = dynamic(() => import("./pdf-viewer-client"), {
	ssr: false,
});

export default function PDFLayout() {
	return (
		<div>
			<PDFViewerClient />
		</div>
	);
}
