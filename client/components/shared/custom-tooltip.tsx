import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";

export const CustomTooltip = ({
	hoverContent,
	children,
}: {
	hoverContent: string;
	children: React.ReactNode;
}) => {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>{children}</TooltipTrigger>
				<TooltipContent>{hoverContent}</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};
