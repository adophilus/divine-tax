"use client";

import { Button } from "@/components/app/button";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SignInFormHeader } from "./header";
import Link from "next/link";
import { SignInFormSocials } from "./socials";

const formSchema = z.object({
	tax_id: z.string().min(1, { message: "Tax ID is required" }),
	password: z.string().min(1, { message: "Password is required" }),
});

export const SignInForm = () => {
	const form = useForm({
		defaultValues: {
			tax_id: "",
			password: "",
		},
		resolver: zodResolver(formSchema),
	});

	const onSubmit = (data: z.infer<typeof formSchema>) => {
		console.log(data);
	};

	return (
		<div className="font-[Sora] bg-[#EAF0FF] h-screen flex justify-center items-center">
			<div className="border-2 border-[#FFFFFF80] max-w-md px-8 py-4 grow">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="flex flex-col gap-6"
					>
						<div className="flex flex-col gap-4">
							<SignInFormHeader />
							<div className="flex flex-col gap-4">
								<div className="flex flex-col gap-4">
									<FormField
										control={form.control}
										name="tax_id"
										render={() => (
											<FormItem>
												<FormLabel className="font-semibold">Tax ID</FormLabel>
												<FormControl>
													<Input
														type="text"
														placeholder="Tax ID"
														required
														className="bg-white"
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="password"
										render={() => (
											<FormItem>
												<FormLabel className="font-semibold">
													Password
												</FormLabel>
												<FormControl>
													<Input
														type="password"
														placeholder="Password"
														className="bg-white"
														required
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								<div className="flex justify-end">
									<Link href="/auth/forgot-password" className="text-[#1061FF]">
										Forgotten Password?
									</Link>
								</div>
								<div>
									<Button type="submit" className="w-full">
										Login
									</Button>
								</div>
								<div className="flex items-center gap-2 text-sm">
									<div className="h-[1px] bg-[#D7D5D5] grow" />
									<span>or sign in with</span>
									<div className="h-[1px] bg-[#D7D5D5] grow" />
								</div>
								<div>
									<SignInFormSocials />
								</div>
							</div>
						</div>
						<div className="flex justify-end gap-4">
							<span>No account yet?</span>
							<Link href="/auth/sign-up" className="underline text-[#1061FF]">
								Sign-Up
							</Link>
						</div>
					</form>
				</Form>
			</div>
		</div>
	);
};
