import { useBugReportModal } from "@/hooks/modal-trigger";
import { Modal } from "../ui/modal";
import { InfoIcon } from "lucide-react";

export function BugReport() {
	const bugReportsModal = useBugReportModal();

	return (
		<div>
			<Modal
				title="Bug Report"
				description="Report any bugs you encounter while using the app. Your feedback is valuable to us."
				isOpen={bugReportsModal.isOpen}
				onClose={bugReportsModal.onClose}
				modalWidth="sm:max-w-[45em]"
			>
				<p className="flex items-center gap-1 text-base">
					Reason for reporting this bug?{" "}
					<InfoIcon strokeWidth={1} size={18} color="gray" />
				</p>
			</Modal>
		</div>
	);
}
