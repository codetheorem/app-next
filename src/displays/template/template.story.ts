import withPadding from '../../../.storybook/decorators/with-padding';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import readme from './readme.md';
import { defineComponent } from '@vue/composition-api';
import stores from '@/stores/mocks';

export default {
	title: 'Displays / Template',
	decorators: [withPadding, withKnobs],
	parameters: {
		notes: readme,
	},
};

export const basic = () =>
	defineComponent({
		props: {
			collection: {
				default: text('Collection', 'news'),
			},
			field: {
				default: text('Field', 'author'),
			},
			template: {
				default: text('Template', '{{first_name}} {{last_name}}'),
			},
			type: {
				default: text('Type', 'm2o'),
			},
		},
		setup() {
			const value = { first_name: 'Rinaldo', id: 1, last_name: 'Zumbusch' };
			return { value };
		},
		template: `
      <display-template :value="value" v-bind="{ collection, field, template, type }"/>
    `,
	});
