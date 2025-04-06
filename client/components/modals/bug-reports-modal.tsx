import { useBugReportModal } from "@/hooks/modal-trigger";
import { Modal } from "../ui/modal";
import { InfoIcon } from "lucide-react";
import { Form, FormField } from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { BugReportSchema } from "@/schema/bug-report-schema";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { Button } from "../ui/button";

export function BugReport() {
	const bugReportsModal = useBugReportModal();

	const form = useForm<z.infer<typeof BugReportSchema>>({
		defaultValues: {
			toggle: "", // Set default as empty string for no selection initially
		},
	});

	function onSubmit(data: z.infer<typeof BugReportSchema>) {
		console.log(data); // Logs the selected toggle value when submitted
		// Handle form submission logic here
	}

	return (
		<div>
			<Modal
				title="Bug Report"
				description="Report any bugs you encounter while using the app. Your feedback is valuable to us."
				isOpen={bugReportsModal.isOpen}
				onClose={bugReportsModal.onClose}
				modalWidth="sm:max-w-[45em]"
			>
				<p className="flex items-center gap-1 text-base">
					Reason for reporting this bug?{" "}
					<InfoIcon strokeWidth={1} size={18} color="gray" />
				</p>

				<div>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)}>
							<FormField
								control={form.control}
								name="toggle"
								render={({ field }) => (
									<div>
										{/* ToggleGroup with three items */}
										<ToggleGroup
											type="single" // Ensures only one can be selected at a time
											value={field.value} // Bind form state value
											onValueChange={field.onChange} // Update form state on change
										>
											<ToggleGroupItem value="bold" aria-label="Toggle bold">
												1
											</ToggleGroupItem>
											<ToggleGroupItem
												value="italic"
												aria-label="Toggle italic"
											>
												2
											</ToggleGroupItem>
											<ToggleGroupItem
												value="strikethrough"
												aria-label="Toggle strikethrough"
											>
												3
											</ToggleGroupItem>
										</ToggleGroup>
									</div>
								)}
							/>

							<Button type="submit">Submit</Button>
						</form>
					</Form>
				</div>
			</Modal>
		</div>
	);
}
