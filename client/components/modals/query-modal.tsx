import { useQueryModal } from "@/hooks/modal-trigger";
import { Modal } from "../ui/modal";
import { useForm } from "react-hook-form";
import { QuerySchema } from "@/schema/query-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

type queryModalProps = {
	name: string;
	label: string;
	placeholder: string;
};

const queryModalData: queryModalProps[] = [
	{
		name: "firstname",
		label: "Firstname",
		placeholder: "Enter your firstname...",
	},
	{
		name: "lastname",
		label: "Lastname",
		placeholder: "Enter your lastname...",
	},
	{
		name: "emailAddress",
		label: "Email Address",
		placeholder: "e.g. juandelacruz@gmail.com",
	},
	{
		name: "feedback",
		label:
			"Please give as much detail as you can and share examples if you have any:",
		placeholder: "Enter your thoughts...",
	},
];

export const QueryModal = () => {
	const queryModal = useQueryModal();

	const form = useForm<z.infer<typeof QuerySchema>>({
		resolver: zodResolver(QuerySchema),
		defaultValues: {
			firstname: "",
			lastname: "",
			feedback: "",
		},
	});

	async function onSubmitQuery(values: z.infer<typeof QuerySchema>) {
		console.log(values);
	}

	return (
		<Modal
			title="Query"
			description="Request for information or clarification"
			isOpen={queryModal.isOpen}
			onClose={queryModal.onClose}
			modalWidth="sm:max-w-[50em]"
		>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmitQuery)} className="space-y-5">
					{queryModalData.map((query, idx) => (
						<FormField
							key={idx}
							name={query.name}
							render={({ field }) => (
								<FormItem>
									<FormLabel>{query.label}</FormLabel>
									<FormControl>
										{query.name === "feedback" ? (
											<Textarea
												placeholder={query.placeholder}
												{...field}
												className="resize-none h-36"
											/>
										) : (
											<Input placeholder={query.placeholder} {...field} />
										)}
									</FormControl>
								</FormItem>
							)}
						/>
					))}
				</form>
			</Form>
		</Modal>
	);
};
