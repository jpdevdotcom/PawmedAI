import { useFeedbackDrawer } from "@/hooks/drawer-trigger";
import { CustomDrawer } from "../ui/custom-drawer";

export const FeedbackDrawer = () => {
	const feedbackDrawer = useFeedbackDrawer();

	return (
		<CustomDrawer
			title="Feedback"
			description="We welcome your comments and idea"
			isOpen={feedbackDrawer.isOpen}
			onClose={feedbackDrawer.onClose}
		>
			Test
		</CustomDrawer>
	);
};
