import { useBugReportModal } from "@/hooks/modal-trigger";
import { Modal } from "../ui/modal";
import { InfoIcon, Loader2 } from "lucide-react";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { BugReportSchema } from "@/schema/bug-report-schema";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const BugReportToggleGroupItem = [
	"Functionality Issue",
	"Visual/Aesthetic Issue",
	"Performance Issue",
	"Security Issue",
	"Data/Content Issue",
	"Usability/UX Issue",
];

const BugPriorityToggleGroupItem = [
	"High Priority",
	"Medium Priority",
	"Low Priority",
];

export function BugReport() {
	const bugReportsModal = useBugReportModal();
	const [onBugSubmit, setOnBugSubmit] = useState<boolean>(false);

	const form = useForm<z.infer<typeof BugReportSchema>>({
		resolver: zodResolver(BugReportSchema),
		defaultValues: {
			bugPrioritytoggle: "",
			bugReasontoggle: "",
			bugDescription: "",
		},
	});

	async function onSubmitBugReport(data: z.infer<typeof BugReportSchema>) {
		try {
			console.log(data);
			setOnBugSubmit(true);

			await fetch("/api/resend-api", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					bugPrioritytoggle: data.bugPrioritytoggle,
					bugReasontoggle: data.bugReasontoggle,
					bugDescription: data.bugDescription,
				}), // or your actual data
			});
		} catch (error) {
			console.log(error);
		} finally {
			setOnBugSubmit(false);
			resetForm();
		}
	}

	function resetForm() {
		form.reset({
			bugDescription: "",
			bugPrioritytoggle: "",
			bugReasontoggle: "",
		});
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
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmitBugReport)}
						className="w-full space-y-4"
					>
						<FormField
							control={form.control}
							name="bugReasontoggle"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="flex items-center gap-1 text-base">
										Reason for reporting this bug?{" "}
										<InfoIcon strokeWidth={1} size={18} color="gray" />
									</FormLabel>

									<FormControl>
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
													className="data-[state=on]:bg-orange-500 data-[state=on]:text-white text-xs bg-gray-100 border first:rounded-sm last:rounded-sm rounded-sm cursor-pointer hover:bg-orange-50" // Handle long text
												>
													{item}
												</ToggleGroupItem>
											))}
										</ToggleGroup>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="bugDescription"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="flex items-center gap-1 text-base">
										Can you provide clarity on the issue? Help us understand{" "}
										<InfoIcon strokeWidth={1} size={18} color="gray" />
									</FormLabel>
									<FormDescription className="text-sm text-gray-500">
										Provide a detailed description of the bug including steps to
										reproduce it, expected behavior, and actual behavior.
										Include any relevant information or observations.
									</FormDescription>
									<FormControl>
										<Textarea
											placeholder="Type your message here..."
											className="focus-visible:ring-[1px] h-32 resize-none"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="bugPrioritytoggle"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="flex items-center gap-1 text-base">
										Bug Priority{" "}
										<InfoIcon strokeWidth={1} size={18} color="gray" />
									</FormLabel>
									<FormDescription className="text-sm text-gray-500">
										Choose the priority level of the bug: High/Medium/Low.
										Priority indicates the urgency and impact of the bug on
										users or system functionality.
									</FormDescription>

									<FormControl>
										<ToggleGroup
											type="single"
											value={field.value}
											onValueChange={field.onChange}
											className="grid grid-cols-1 sm:grid-cols-4 gap-2 w-full" // Responsive grid
										>
											{BugPriorityToggleGroupItem.map((item, idx) => (
												<ToggleGroupItem
													key={idx}
													value={item}
													aria-label={item}
													className="data-[state=on]:bg-orange-500 data-[state=on]:text-white text-xs bg-gray-100 border first:rounded-sm last:rounded-sm rounded-sm cursor-pointer hover:bg-orange-50" // Handle long text
												>
													{item}
												</ToggleGroupItem>
											))}
										</ToggleGroup>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<div className="w-full flex justify-end gap-3">
							<Button
								type="button"
								className="cursor-pointer px-10"
								variant={"outline"}
							>
								Cancel
							</Button>
							<Button
								type="submit"
								className="cursor-pointer px-10 hover:bg-gray-700"
								disabled={onBugSubmit}
							>
								{onBugSubmit && <Loader2 className="animate-spin" />}
								Submit Report
							</Button>
						</div>
					</form>
				</Form>
			</div>
		</Modal>
	);
}
