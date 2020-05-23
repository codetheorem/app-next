import { defineDisplay } from '@/displays/define';
import DisplayTemplate from './template.vue';
import getFieldsFromTemplate from '@/utils/get-fields-from-template';
import adjustFieldsForDisplays from '@/utils/adjust-fields-for-displays';
import getRelatedCollection from '@/utils/get-related-collection';
import useCollection from '@/composables/use-collection';
import { ref } from '@vue/composition-api';

type Options = {
	template: string;
};

export default defineDisplay(({ i18n }) => ({
	id: 'template',
	name: i18n.t('template'),
	icon: 'text_fields',
	handler: DisplayTemplate,
	options: [
		{
			field: 'template',
			name: i18n.t('display_template'),
			interface: 'text-input',
			width: 'full',
		},
	],
	types: ['string'],
	fields: (options: Options, { field, collection }) => {
		const relatedCollection = getRelatedCollection(collection, field);
		const { primaryKeyField } = useCollection(ref(relatedCollection));

		if (!relatedCollection) return [];

		const fields = adjustFieldsForDisplays(
			getFieldsFromTemplate(options.template),
			relatedCollection
		);

		if (fields.includes(primaryKeyField.value.field) === false) {
			fields.push(primaryKeyField.value.field);
		}

		return fields;
	},
}));
