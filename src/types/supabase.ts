export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[];

export type DBTypes = {
	[P in keyof Database["public"]["Tables"]]:
		| Database["public"]["Tables"][P]["Row"]
		| null;
};

export interface Database {
	public: {
		Tables: {
			profiles: {
				Row: {
					created_at: string;
					id: string;
					name: string;
					user_avatar: string;
					user_name: string;
					user_role: string;
				};
				Insert: {
					created_at?: string;
					id: string;
					name: string;
					user_avatar: string;
					user_name: string;
					user_role: string;
				};
				Update: {
					created_at?: string;
					id?: string;
					name?: string;
					user_avatar?: string;
					user_name?: string;
					user_role?: string;
				};
				Relationships: [
					{
						foreignKeyName: "profiles_id_fkey";
						columns: ["id"];
						isOneToOne: true;
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
				];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_1 in never]: never;
		};
		Enums: {
			[_2 in never]: never;
		};
		CompositeTypes: {
			[_3 in never]: never;
		};
	};
}
