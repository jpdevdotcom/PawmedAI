import { useBugReportModal } from "@/hooks/modal-trigger";
import { Modal } from "../ui/modal";
import { InfoIcon } from "lucide-react";
import { Form, FormField } from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { BugReportSchema } from "@/schema/bug-report-schema";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { Button } from "../ui/button";

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
									className="grid grid-cols-1 sm:grid-cols-5 gap-2 w-full" // Responsive grid
								>
									{BugReportToggleGroupItem.map((item, idx) => (
										<ToggleGroupItem
											key={idx}
											value={item}
											aria-label={item}
											className="text-xs border first:rounded-sm last:rounded-sm rounded-sm cursor-pointer" // Handle long text
										>
											{item}
										</ToggleGroupItem>
									))}
								</ToggleGroup>
							)}
						/>
						<div className="w-full flex justify-end">
							<Button type="submit">Submit</Button>
						</div>
					</form>
				</Form>
			</div>
		</Modal>
	);
}
