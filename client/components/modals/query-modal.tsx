import { useQueryModal } from "@/hooks/modal-trigger";
import { Modal } from "../ui/modal";

export const QueryModal = () => {
	const queryModal = useQueryModal();

	return (
		<Modal
			title="Query"
			description="Request for information or clarification"
			isOpen={queryModal.isOpen}
			onClose={queryModal.onClose}
			modalWidth="sm:max-w-[50em]"
		>
			Query Modal
		</Modal>
	);
};
