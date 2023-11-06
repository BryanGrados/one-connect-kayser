import UserAvatar from "@/src/components/users/user-avatar";
import getUserProfile from "@/src/utils/lib/get-user-profile";
import supabaseServer from "@/src/utils/supabase/server";

export default async function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const {
		data: { user },
	} = await supabaseServer.auth.getUser();

	if (!user) return null;

	const profile = await getUserProfile(user.id);

	return (
		<div>
			<div>DashboardLayout</div>
			{children}
			<UserAvatar profile={profile} />
		</div>
	);
}
