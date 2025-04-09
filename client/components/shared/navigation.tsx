"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useBugReportModal } from "@/hooks/modal-trigger";

export function CustomNavigationMenu() {
	const openBugReportModal = useBugReportModal((state) => state.onOpen);

	const components: {
		title: string;
		trigger: () => void;
		description: string;
	}[] = [
		{
			title: "Bug Reports",
			trigger: openBugReportModal,
			description: "Report of an error or malfunction in a software system.",
		},
		{
			title: "Queries",
			trigger: openBugReportModal,
			description:
				"Requests for information or clarification about the system.",
		},
		{
			title: "Changes or Suggestions",
			trigger: openBugReportModal,
			description:
				"Proposals to improve or modify the system's features or design.",
		},
	];

	return (
		<NavigationMenu>
			<NavigationMenuList className="flex">
				<NavigationMenuItem>
					<Link href="/" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Home
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/about" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							About Us
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/classify-disease" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Classify Disease
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
						Queues
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
							{components.map((component) => (
								<ListItem
									key={component.title}
									title={component.title}
									onClick={component.trigger}
								>
									{component.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";
