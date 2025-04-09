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
			<DrawerContent className="px-7">
				<DrawerHeader>
					<DrawerTitle>{title}</DrawerTitle>
					<DrawerDescription>{description}</DrawerDescription>
				</DrawerHeader>

				<div className="px-4 pb-5 h-full overflow-y-scroll mb-12">
					{children}
				</div>
			</DrawerContent>
		</Drawer>
	);
};
