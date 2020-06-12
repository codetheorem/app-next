import InterfaceTextInput from './text-input.vue';
import { defineInterface } from '@/interfaces/define';

export default defineInterface(({ i18n }) => ({
	id: 'text-input',
	name: i18n.t('text_input'),
	icon: 'text_fields',
	component: InterfaceTextInput,
	types: ['string'],
	options: [
		{
			field: 'placeholder',
			name: i18n.t('placeholder'),
			width: 'half',
			interface: 'text-input',
		},
		{
			field: 'iconLeft',
			name: i18n.t('icon_left'),
			width: 'half',
			interface: 'icon',
		},
		{
			field: 'iconRight',
			name: i18n.t('icon_right'),
			width: 'half',
			interface: 'icon',
		},
		{
			field: 'font',
			name: i18n.t('font'),
			width: 'half',
			interface: 'dropdown',
			default: 'sans-serif',
			options: {
				choices: [
					{ text: i18n.t('sans_serif'), value: 'sans-serif' },
					{ text: i18n.t('monospace'), value: 'monospace' },
					{ text: i18n.t('serif'), value: 'serif' },
				],
			},
		},
	],
}));
