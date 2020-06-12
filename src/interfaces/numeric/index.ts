import InterfaceNumeric from './numeric.vue';
import { defineInterface } from '@/interfaces/define';

export default defineInterface(({ i18n }) => ({
	id: 'numeric',
	name: i18n.t('numeric'),
	icon: 'dialpad',
	component: InterfaceNumeric,
	types: ['integer', 'decimal'],
	options: [
		{
			field: 'placeholder',
			name: i18n.t('placeholder'),
			width: 'half',
			interface: 'text-input',
		},
		{
			field: 'min',
			name: i18n.t('minimum_value'),
			width: 'half',
			interface: 'numeric',
		},
		{
			field: 'max',
			name: i18n.t('maximum_value'),
			width: 'half',
			interface: 'numeric',
		},
		{
			field: 'step',
			name: i18n.t('step_interval'),
			width: 'half',
			interface: 'numeric',
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
			options: {
				items: [
					{ itemText: i18n.t('sans_serif'), itemValue: 'sans-serif' },
					{ itemText: i18n.t('monospace'), itemValue: 'monospace' },
					{ itemText: i18n.t('serif'), itemValue: 'serif' },
				],
			},
		},
	],
}));
