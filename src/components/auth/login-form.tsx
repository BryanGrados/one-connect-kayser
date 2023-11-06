"use client";

import { useSignIn } from "@/src/hooks/auth/use-sign";
import useSignInResolver from "@/src/hooks/form/use-form-login";
import type { SignInSchemaType } from "@/src/schemas/sign-in.schema";
import { iconClasses, inputClasses } from "@/src/utils/const";
import { Button, Input } from "@nextui-org/react";
import { Eye, EyeSlash } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const LoginForm = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const { register, handleSubmit, formErrors } = useSignInResolver();
	const { push } = useRouter();

	const toggleVisibility = () => setIsVisible(!isVisible);

	const onSubmit: SubmitHandler<SignInSchemaType> = async (formData) => {
		setLoading(true);

		toast.promise(useSignIn(formData), {
			loading: "Iniciando sesión...",
			success: () => {
				setLoading(false);
				push("/dashboard");
				return "Sesión iniciada";
			},
			error: () => {
				setLoading(false);
				return "No se pudo iniciar sesión";
			},
		});
	};

	return (
		<form
			className="flex flex-col items-center justify-center w-full gap-8 mt-8"
			onSubmit={handleSubmit(onSubmit)}
		>
			<Input
				type="text"
				label="Correo electrónico"
				classNames={inputClasses}
				errorMessage={formErrors.email?.message}
				color={formErrors.email ? "warning" : "default"}
				{...register("email")}
			/>
			<Input
				type={isVisible ? "text" : "password"}
				label="Contraseña"
				classNames={inputClasses}
				errorMessage={formErrors.password?.message}
				color={formErrors.password ? "warning" : "default"}
				{...register("password")}
				endContent={
					<Button
						disableRipple
						isIconOnly
						className="bg-transparent"
						type="button"
						onClick={toggleVisibility}
					>
						{isVisible ? (
							<Eye className={iconClasses} />
						) : (
							<EyeSlash className={iconClasses} />
						)}
					</Button>
				}
			/>
			<Button type="submit" color="primary" fullWidth isLoading={loading}>
				Ingresar
			</Button>
		</form>
	);
};

export default LoginForm;
