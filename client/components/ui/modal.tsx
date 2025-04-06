"use client";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import React from "react";

interface ModalProps {
	title: string;
	description: string;
	isOpen: boolean;
	onClose: () => void;
	children?: React.ReactNode;
	modalWidth?: string;
	modalheight?: string;
	isScrollY?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
	title,
	description,
	isOpen,
	onClose,
	children,
	modalWidth = "sm:max-w-[425px]", // Default width if not provided
	modalheight = "",
	isScrollY = false,
}) => {
	const onChange = (open: boolean) => {
		if (!open) {
			onClose();
		}
	};

	return (
		<Dialog open={isOpen} onOpenChange={onChange}>
			<DialogContent className={`${modalWidth} ${modalheight} p-7`}>
				<DialogHeader className="p-0">
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>{description}</DialogDescription>
				</DialogHeader>
				<div
					className={`grid gap-4 py-4 w-full ${
						isScrollY && "overflow-y-scroll"
					}`}
				>
					{children}
				</div>
			</DialogContent>
		</Dialog>
	);
};
