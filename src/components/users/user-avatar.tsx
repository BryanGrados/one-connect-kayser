import { DBTypes } from "@/src/types/supabase";

const UserAvatar = ({ profile }: { profile: DBTypes["profiles"] }) => {
	return <div>{profile?.name}</div>;
};

export default UserAvatar;
