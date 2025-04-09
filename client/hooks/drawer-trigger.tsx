import { create } from "zustand";

interface IDrawerTrigger {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const useBugReportDrawer = create<IDrawerTrigger>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));

export { useBugReportDrawer };
