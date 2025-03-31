import { CustomNavigationMenu } from "@/components/shared/navigation";

export const HeaderLayout = () => {
	return (
		<div className="w-full fixed top-0 py-3 px-24 z-10 border border-b">
			<div className="flex justify-between items-center">
				<div>
					<h2 className="text-xl font-bold">Pawmed AI V2.0</h2>
				</div>

				<CustomNavigationMenu />
			</div>
		</div>
	);
};
