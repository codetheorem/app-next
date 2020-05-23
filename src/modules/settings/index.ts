import { defineModule } from '@/modules/define';
import SettingsGlobal from './routes/global';
import { SettingsCollections, SettingsFields } from './routes/data-model/';
import { SettingsRolesBrowse, SettingsRolesDetail } from './routes/roles';
import { SettingsWebhooksBrowse, SettingsWebhooksDetail } from './routes/webhooks';
import { SettingsPresetsBrowse, SettingsPresetsDetail } from './routes/presets';
import SettingsNotFound from './routes/not-found';

export default defineModule(({ i18n }) => ({
	id: 'settings',
	name: i18n.t('settings'),
	icon: 'settings',
	color: 'var(--warning)',
	routes: [
		{
			path: '/',
			redirect: '/global',
		},
		{
			name: 'settings-global',
			path: '/global',
			component: SettingsGlobal,
		},
		{
			name: 'settings-collections',
			path: '/data-model',
			component: SettingsCollections,
		},
		{
			name: 'settings-fields',
			path: '/data-model/:collection',
			component: SettingsFields,
			props: true,
		},
		{
			name: 'settings-roles-browse',
			path: '/roles',
			component: SettingsRolesBrowse,
		},
		{
			name: 'settings-roles-detail',
			path: '/roles/:primaryKey',
			component: SettingsRolesDetail,
			props: true,
		},
		{
			name: 'settings-presets-browse',
			path: '/presets',
			component: SettingsPresetsBrowse,
		},
		{
			name: 'settings-presets-detail',
			path: '/presets/:id',
			component: SettingsPresetsDetail,
			props: true,
		},
		{
			name: 'settings-webhooks-browse',
			path: '/webhooks',
			component: SettingsWebhooksBrowse,
		},
		{
			name: 'settings-webhooks-detail',
			path: '/webhooks/:primaryKey',
			component: SettingsWebhooksDetail,
			props: true,
		},
		{
			name: 'settings-not-found',
			path: '*',
			component: SettingsNotFound,
		},
	],
}));
