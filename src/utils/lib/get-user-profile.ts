import supabaseServer from "../supabase/server";

const getUserProfile = async (id: string) => {
	if (!id) return null;

	const { data, error, status } = await supabaseServer
		.from("profiles")
		.select("*")
		.eq("id", id)
		.single();

	if (error && status !== 406) {
		throw error;
	}

	return data;
};

export default getUserProfile;
