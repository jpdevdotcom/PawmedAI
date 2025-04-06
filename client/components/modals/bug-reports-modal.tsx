import { useBugReportModal } from "@/hooks/modal-trigger";
import { Modal } from "../ui/modal";

export function BugReports() {
	const bugReportsModal = useBugReportModal();

	return (
		<div>
			<Modal
				title="Bug Reports"
				description="Report any bugs you encounter while using the app. Your feedback is valuable to us."
				isOpen={bugReportsModal.isOpen}
				onClose={bugReportsModal.onClose}
			>
				This is Bug Reports Modal
			</Modal>
		</div>
	);
}
