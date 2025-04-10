"use client";

import { BugReportDrawer } from "./bug-reports-drawer";
import { FeedbackDrawer } from "./feedback-drawer";
import { QueryDrawer } from "./query-drawer";

export function Drawers() {
	return (
		<div className="h-full">
			<BugReportDrawer />
			<FeedbackDrawer />
			<QueryDrawer />
		</div>
	);
}
