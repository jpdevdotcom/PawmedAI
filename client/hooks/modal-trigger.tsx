import { create } from "zustand";

interface IModalTrigger {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const useBugReportModal = create<IModalTrigger>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));

const useFeedbackModal = create<IModalTrigger>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));

export { useBugReportModal, useFeedbackModal };
