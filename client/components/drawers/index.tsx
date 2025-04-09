"use client";

import { BugReportDrawer } from "./bug-reports-drawer";
import { FeedbackDrawer } from "./feedback-drawer";

export function Drawers() {
	return (
		<div className="h-full">
			<BugReportDrawer />
			<FeedbackDrawer />
		</div>
	);
}
