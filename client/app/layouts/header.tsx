import { CustomNavigationMenu } from "@/components/shared/navigation";

export const HeaderLayout = () => {
	return (
		<div className="w-full fixed top-0 py-3 px-24 z-10 border border-b">
			<CustomNavigationMenu />
		</div>
	);
};
