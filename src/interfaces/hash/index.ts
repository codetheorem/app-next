import InterfaceHash from './hash.vue';
import { defineInterface } from '@/interfaces/define';

export default defineInterface(({ i18n }) => ({
	id: 'hash',
	name: i18n.t('hash'),
	icon: 'text_fields',
	component: InterfaceHash,
	options: [
		{
			field: 'placeholder',
			name: i18n.t('placeholder'),
			width: 'half',
			interface: 'text-input',
		},
		{
			field: 'masked',
			name: i18n.t('masked'),
			width: 'half',
			interface: 'toggle',
		},
	],
}));
