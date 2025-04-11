"use client";

import dynamic from "next/dynamic";

// Dynamically import PDFViewer with SSR disabled
const PDFViewerClient = dynamic(() => import("./pdf-viewer-client"), {
	ssr: false,
});

export default function PDFLayout({ imgUrl }: { imgUrl: string }) {
	return (
		<div>
			<PDFViewerClient imgUrl={imgUrl} />
		</div>
	);
}
