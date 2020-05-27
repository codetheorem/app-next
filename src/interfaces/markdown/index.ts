import InterfaceMarkdown from './markdown.vue';
import { defineInterface } from '@/interfaces/define';

export default defineInterface(({ i18n }) => ({
	id: 'markdown',
	name: i18n.t('markdown'),
	icon: 'text_fields',
	component: InterfaceMarkdown,
	options: [
		{
			field: 'toolbar',
			name: i18n.t('toolbar'),
			width: 'full',
			interface: 'checkboxes',
			default_value: [
				'bold',
				'italic',
				'strikethrough',
				'heading',
				'heading-1',
				'heading-2',
				'heading-3',
				'code',
				'quote',
				'unordered-list',
				'ordered-list',
				'clean-block',
				'link',
				'image',
				'table',
				'horizontal-rule',
				'preview',
				'guide',
			],
			options: {
				choices: {
					bold: i18n.t('markdown_options.bold'),
					italic: i18n.t('markdown_options.italic'),
					strikethrough: i18n.t('markdown_options.strikethrough'),
					heading: i18n.t('markdown_options.heading'),
					'heading-smaller': i18n.t('markdown_options.heading-smaller'),
					'heading-bigger': i18n.t('markdown_options.heading-bigger'),
					'heading-1': i18n.t('markdown_options.heading-1'),
					'heading-2': i18n.t('markdown_options.heading-2'),
					'heading-3': i18n.t('markdown_options.heading-3'),
					code: i18n.t('markdown_options.code'),
					quote: i18n.t('markdown_options.quote'),
					'unordered-list': i18n.t('markdown_options.unordered-list'),
					'ordered-list': i18n.t('markdown_options.ordered-list'),
					'clean-block': i18n.t('markdown_options.clean-block'),
					link: i18n.t('markdown_options.link'),
					image: i18n.t('markdown_options.image'),
					table: i18n.t('markdown_options.table'),
					'horizontal-rule': i18n.t('markdown_options.horizontal-rule'),
					preview: i18n.t('markdown_options.preview'),
					guide: i18n.t('markdown_options.guide'),
				},
			},
		},
		{
			field: 'font',
			name: i18n.t('font'),
			width: 'half',
			interface: 'dropdown',
			default_value: 'serif',
			options: {
				items: [
					{ itemText: i18n.t('sans_serif'), itemValue: 'sans-serif' },
					{ itemText: i18n.t('monospace'), itemValue: 'monospace' },
					{ itemText: i18n.t('serif'), itemValue: 'serif' },
				],
			},
		},

		{
			field: 'simpleMDEOverrides',
			name: i18n.t('simplemde_options_override'),
			interface: 'code',
			options: {
				type: 'application/json',
			},
		},
	],
}));
