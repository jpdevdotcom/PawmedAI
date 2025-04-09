"use client";

import {
	BugIcon,
	CircleHelpIcon,
	HomeIcon,
	MonitorCogIcon,
	PawPrintIcon,
	SearchIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { useBugReportDrawer } from "@/hooks/drawer-trigger";

export function CustomDock() {
	const openBugReportDrawer = useBugReportDrawer((state) => state.onOpen);

	const DATA = {
		navbar: [
			{ href: "/", icon: HomeIcon, label: "Home" },
			{ href: "/about", icon: PawPrintIcon, label: "About Us" },
			{
				href: "/classify-disease",
				icon: SearchIcon,
				label: "Classify Disease",
			},
		],
		queues: {
			queue_options: [
				{ href: openBugReportDrawer, icon: BugIcon, label: "Bug Reports" },
				{ href: "#", icon: MonitorCogIcon, label: "Changes or Suggestions" },
				{ href: "#", icon: CircleHelpIcon, label: "Queries" },
			],
		},
	};

	return (
		<div className="fixed md:hidden block bottom-0 left-0 right-0 pb-10 z-20">
			<TooltipProvider>
				<Dock direction="middle">
					{DATA.navbar.map((item) => (
						<DockIcon key={item.label}>
							<Tooltip>
								<TooltipTrigger asChild>
									<Link
										href={item.href}
										aria-label={item.label}
										className={cn(
											buttonVariants({ variant: "ghost", size: "icon" }),
											"size-12 rounded-full"
										)}
									>
										<item.icon className="size-4" />
									</Link>
								</TooltipTrigger>
								<TooltipContent>
									<p>{item.label}</p>
								</TooltipContent>
							</Tooltip>
						</DockIcon>
					))}
					<Separator orientation="vertical" className="h-full" />
					{Object.entries(DATA.queues.queue_options).map(([name, queue]) => (
						<DockIcon key={name}>
							<Tooltip>
								<TooltipTrigger asChild>
									<Button
										onClick={() =>
											typeof queue.href === "function" && queue.href()
										}
									>
										<queue.icon className="size-4" />
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>{queue.label}</p>
								</TooltipContent>
							</Tooltip>
						</DockIcon>
					))}
				</Dock>
			</TooltipProvider>
		</div>
	);
}
