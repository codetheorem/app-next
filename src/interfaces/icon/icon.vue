<template>
	<v-menu attached :disabled="disabled" close-on-content-click>
		<template #activator="{ toggle, active, activate }">
			<v-input
				:disabled="disabled"
				:placeholder="value ? formatTitle(value) : $t('search_for_icon')"
				v-model="searchQuery"
				@focus="activate"
			>
				<template #prepend>
					<v-icon
						v-if="value"
						@click="activate"
						:name="value"
						:class="{ active: value }"
					/>
				</template>

				<template #append>
					<v-icon
						@click="activate"
						name="expand_more"
						class="open-indicator"
						:class="{ open: active }"
					/>
				</template>
			</v-input>
		</template>

		<div class="content" :class="width">
			<DynamicScroller
				:items="filteredIcons"
				:min-item-size="24"
				class="scroller"
				key-field="name"
			>
				<template v-slot="{ item, index, active }">
					<DynamicScrollerItem
						:item="item"
						:active="active"
						:size-dependencies="[item.icons]"
						:data-index="index"
					>
						<div :key="'icon-group-' + item.name" class="icons">
							<v-icon
								v-for="icon in item.icons"
								:key="icon"
								:name="icon"
								:class="{ active: icon === value }"
								@click="setIcon(icon)"
							/>
						</div>
						<v-divider
							:key="'divider-' + item.name"
							v-if="item.icons.length > 0 && index !== filteredIcons.length - 1"
						/>
					</DynamicScrollerItem>
				</template>
			</DynamicScroller>
		</div>
	</v-menu>
</template>

<script lang="ts">
import icons from './icons.json';
import { defineComponent, ref, computed } from '@vue/composition-api';
import formatTitle from '@directus/format-title';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';

export default defineComponent({
	props: {
		value: {
			type: String,
			default: 'search',
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		width: {
			type: String,
			default: 'half',
		},
	},
	setup(props, { emit }) {
		const searchQuery = ref('');

		const filteredIcons = computed(() => {
			return icons
				.map((group) => {
					if (searchQuery.value.length === 0) return group;

					const icons = group.icons.filter((icon) =>
						icon.includes(searchQuery.value.toLowerCase())
					);

					return {
						...group,
						icons: icons,
						length: icons.length,
					};
				})
				.filter((group) => group.icons.length !== 0);
		});

		return {
			icons,
			setIcon,
			searchQuery,
			filteredIcons,
			formatTitle,
		};

		function setIcon(icon: string) {
			emit('input', icon);
		}
	},
});
</script>

<style lang="scss" scoped>
.content {
	padding: 8px;

	.v-icon:hover {
		color: var(--foreground-normal);
	}

	.v-icon.active {
		color: var(--primary);
	}

	.v-divider {
		--v-divider-color: var(--background-normal);

		margin: 0 22px;
	}
}

.icons {
	display: grid;
	grid-gap: 8px;
	grid-template-columns: repeat(auto-fit, 24px);
	justify-content: center;
	padding: 20px 0;
	color: var(--foreground-subdued);
}

.open-indicator {
	transform: scaleY(1);
	transition: transform var(--fast) var(--transition);
}

.open-indicator.open {
	transform: scaleY(-1);
}
</style>
