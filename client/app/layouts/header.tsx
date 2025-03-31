import { CustomNavigationMenu } from "@/components/shared/navigation";
import { ModeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export const HeaderLayout = () => {
	return (
		<div className="w-full fixed top-0 py-3 px-24 z-10 border border-b">
			<div className="flex justify-between items-center">
				<div>
					{/* <h2 className="text-xl font-bold">Pawmed AI V2.0</h2> */}
					<Image src={"/jpd_logo.png"} alt="Logo" width={60} height={60} />
				</div>

				<CustomNavigationMenu />

				<div>
					<ModeToggle />
				</div>
			</div>
		</div>
	);
};
