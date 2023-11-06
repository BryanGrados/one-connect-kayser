import { z } from "zod";

export const SignInSchema = z.object({
	email: z.string().email({
		message: "Por favor, ingrese un correo electrónico válido.",
	}),
	password: z.string().min(1, {
		message: "Por favor, ingrese una contraseña.",
	}),
});

export type SignInSchemaType = z.infer<typeof SignInSchema>;
