import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export const SignInFormSocials = () => {
	const className =
		"flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-50 cursor-pointer siz";

	return (
		<div className="flex justify-center gap-4">
			<button className={className}>
				<FcGoogle className="size-8" />
				Google
			</button>
			<button className={className}>
				<FaFacebook className="size-8" />
				Facebook
			</button>
		</div>
	);
};
