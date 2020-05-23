import { defineDisplay } from '@/displays/define';
import DisplayStatusDot from './status-dot.vue';

export default defineDisplay(({ i18n }) => ({
	id: 'status-dot',
	name: i18n.t('status_dot'),
	types: ['status'],
	icon: 'flag',
	handler: DisplayStatusDot,
	options: null,
}));
