"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { getData } from "./api/classify-image";

const formSchema = z.object({
	link: z.string(),
});

export default function Home() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			link: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		console.log("Sending...");
		try {
			const posts = await getData({ image_url: values.link });
			console.log(posts.diagnosis);
		} catch (error) {
			console.log(error);
		} finally {
			console.log("DONE SENDING!");
		}
	}

	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-[32px] row-start-2 items-center">
				<h1 className="text-2xl font-bold">PawMed AI V2.0</h1>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="flex items-center gap-3"
					>
						<FormField
							control={form.control}
							name="link"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input placeholder="shadcn" className="w-96" {...field} />
									</FormControl>
								</FormItem>
							)}
						/>
						<Button type="submit">Submit</Button>
					</form>
				</Form>
			</main>
		</div>
	);
}
