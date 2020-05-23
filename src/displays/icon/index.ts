import { defineDisplay } from '@/displays/define';
import DisplayIcon from './icon.vue';

export default defineDisplay(({ i18n }) => ({
	id: 'icon',
	name: i18n.t('displays.icon.icon'),
	icon: 'thumb_up',
	handler: DisplayIcon,
	options: [
		{
			field: 'icon',
			name: 'Icon',
			interface: 'icon',
			width: 'half',
		},
	],
	types: ['string'],
}));
