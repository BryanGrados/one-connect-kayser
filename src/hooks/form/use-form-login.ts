import { SignInSchema, SignInSchemaType } from "@/src/schemas/sign-in.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const useSignInResolver = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInSchemaType>({ resolver: zodResolver(SignInSchema) });

	return { register, handleSubmit, formErrors: errors };
};

export default useSignInResolver;
