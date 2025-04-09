import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import * as React from "react";

interface DrawerProps {
	title: string;
	description: string;
	isOpen: boolean;
	onClose: () => void;
	children?: React.ReactNode;
}

export const CustomDrawer: React.FC<DrawerProps> = ({
	title,
	description,
	isOpen,
	onClose,
	children,
}) => {
	const onChange = (open: boolean) => {
		if (!open) {
			onClose();
		}
	};

	return (
		<Drawer open={isOpen} onOpenChange={onChange}>
			<DrawerTrigger>Open</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>{title}</DrawerTitle>
					<DrawerDescription>{description}</DrawerDescription>
				</DrawerHeader>

				<div>{children}</div>
			</DrawerContent>
		</Drawer>
	);
};
