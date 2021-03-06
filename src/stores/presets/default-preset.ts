import { Preset } from './types';

const defaultPreset: Omit<Preset, 'collection'> = {
	title: null,
	role: null,
	user: null,
	search_query: null,
	filters: null,
	view_type: null,
	view_query: null,
	view_options: null,
};

export default defaultPreset;
