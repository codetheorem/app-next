export type Filter = {
	locked?: boolean;
	field: string;
	operator: string;
	value: string | number;
};

export type CollectionPreset = {
	id: number;
	collection: string;
	filters: null | Filter[];
	role: number | null;
	search_query: string | null;
	title: string | null;
	user: number | null;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	view_options: Record<string, any>;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	view_query: Record<string, any>;
	view_type: string | null;
};