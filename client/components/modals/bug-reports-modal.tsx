import { useBugReportModal } from "@/hooks/modal-trigger";
import { Modal } from "../ui/modal";
import { InfoIcon } from "lucide-react";
import { Form, FormField } from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { BugReportSchema } from "@/schema/bug-report-schema";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const BugReportToggleGroupItem = [
	"Functionality Issue",
	"Visual/Aesthetic Issue",
	"Performance Issue",
	"Security Issue",
	"Data/Content Issue",
	"Usability/UX Issue",
];

export function BugReport() {
	const bugReportsModal = useBugReportModal();

	const form = useForm<z.infer<typeof BugReportSchema>>({
		defaultValues: {
			toggle: "",
		},
	});

	function onSubmit(data: z.infer<typeof BugReportSchema>) {
		console.log(data);
	}

	return (
		<Modal
			title="Bug Report"
			description="Report any bugs you encounter while using the app. Your feedback is valuable to us."
			isOpen={bugReportsModal.isOpen}
			onClose={bugReportsModal.onClose}
			modalWidth="sm:max-w-[50em]" // Wider modal for toggle items
			// modalheight="h-[42em]"
			isScrollY={false}
		>
			<div className="w-full space-y-4">
				<p className="flex items-center gap-1 text-base">
					Reason for reporting this bug?{" "}
					<InfoIcon strokeWidth={1} size={18} color="gray" />
				</p>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="w-full space-y-4"
					>
						<FormField
							control={form.control}
							name="toggle"
							render={({ field }) => (
								<ToggleGroup
									type="single"
									value={field.value}
									onValueChange={field.onChange}
									className="grid grid-cols-1 sm:grid-cols-4 gap-2 w-full" // Responsive grid
								>
									{BugReportToggleGroupItem.map((item, idx) => (
										<ToggleGroupItem
											key={idx}
											value={item}
											aria-label={item}
											className="text-xs bg-gray-100 border first:rounded-sm last:rounded-sm rounded-sm cursor-pointer hover:bg-orange-50" // Handle long text
										>
											{item}
										</ToggleGroupItem>
									))}
								</ToggleGroup>
							)}
						/>

						<div>
							<h3 className="flex items-center gap-1 text-base">
								Can you provide clarity on the issue? Help us understand{" "}
								<InfoIcon strokeWidth={1} size={18} color="gray" />
							</h3>
							<p className="text-sm text-gray-500">
								Provide a detailed description of the bug including steps to
								reproduce it, expected behavior, and actual behavior. Include
								any relevant information or observations.
							</p>
							<div>
								<Textarea
									placeholder="Type your message here..."
									className="focus-visible:ring-[1px] h-32"
								/>
							</div>
						</div>

						<div className="w-full flex justify-end">
							<Button type="submit">Submit</Button>
						</div>
					</form>
				</Form>
			</div>
		</Modal>
	);
}
