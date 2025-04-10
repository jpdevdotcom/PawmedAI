"use client";

import { BugReport } from "./bug-reports-modal";
import { FeedbackModal } from "./feedback-modal";
import { QueryModal } from "./query-modal";

export function Modals() {
	return (
		<div>
			<BugReport />
			<FeedbackModal />
			<QueryModal />
		</div>
	);
}
