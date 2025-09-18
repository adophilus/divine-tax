import { forwardRef } from "react";
import { Button as SButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentProps<typeof SButton>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, ...props }, ref) => (
		<SButton
			className={cn(
				"bg-[#1061FF] text-white font-semibold font-[Sora] text-lg py-3.5",
				className,
			)}
			{...props}
			ref={ref}
		/>
	),
);
