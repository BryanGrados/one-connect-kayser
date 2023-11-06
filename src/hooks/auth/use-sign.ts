import { SignInSchemaType } from "@/src/schemas/sign-in.schema";
import supabaseClient from "../../utils/supabase/client";

const useSignIn = async (formData: SignInSchemaType) => {
	const { data, error } = await supabaseClient.auth.signInWithPassword({
		email: formData.email,
		password: formData.password,
	});

	if (error) throw error;

	return data;
};

const useSignUp = async () => {
	const { data, error } = await supabaseClient.auth.signUp({
		email: "bryangrados9@gmail.com",
		password: "Bryan123GRK",
	});

	if (error) throw error;

	return data;
};

const useSignOut = async () => {
	const { error } = await supabaseClient.auth.signOut();

	if (error) throw error;
};

export { useSignIn, useSignUp, useSignOut };
