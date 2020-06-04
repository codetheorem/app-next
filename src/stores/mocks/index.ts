import { useCollectionsStore } from '@/stores/collections';
import collections from './collections.json';
import { useCollectionPresetsStore } from '@/stores/collection-presets';
import collectionPresets from './collection-presets.json';
import { useFieldsStore } from '@/stores/fields';
import fields from './fields.json';
import { useNotificationsStore } from '@/stores/notifications';
import notifications from './notifications.json';
import { useProjectsStore } from '@/stores/projects';
import projects from './projects.json';
import { useRelationsStore } from '@/stores/relations';
import relations from './relations.json';
import { useSettingsStore } from '@/stores/settings';
import settings from './settings.json';
import { useUserStore } from '@/stores/user';
import users from './users.json';

const req = {};

const collectionsStore = useCollectionsStore(req);
collectionsStore.state = collections as any;

const collectionPresetsStore = useCollectionPresetsStore(req);
collectionPresetsStore.state = collectionPresets as any;

const fieldsStore = useFieldsStore(req);
fieldsStore.state = fields as any;

const notificationsStore = useNotificationsStore(req);
notificationsStore.state = notifications as any;

const projectsStore = useProjectsStore(req);
projectsStore.state = projects as any;

const relationsStore = useRelationsStore(req);
relationsStore.state = relations;

const settingsStore = useSettingsStore(req);
settingsStore.state = settings;

const userStore = useUserStore(req);
userStore.state = users as any;

export default {
	collectionsStore,
	collectionPresetsStore,
	fieldsStore,
	notificationsStore,
	projectsStore,
	relationsStore,
	settingsStore,
	userStore,
};
