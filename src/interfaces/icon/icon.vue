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

		<VirtualCollection
			:collection="filteredIcons"
			:cellSizeAndPositionGetter="cellSizeAndPositionGetter"
			:height="500"
			:width="280"
			class="icons"
		>
			<v-icon
				slot="cell"
				slot-scope="{ data }"
				:key="data.icon"
				:name="data.icon"
				:class="{ active: data.icon === value }"
				@click="setIcon(data.icon)"
			/>
		</VirtualCollection>
	</v-menu>
</template>

<script lang="ts">
import icons from './icons.json';
import { defineComponent, ref, computed } from '@vue/composition-api';
import formatTitle from '@directus/format-title';

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
		const flattenedIcons = icons.reduce(
			(acc, group) =>
				acc.concat(
					group.icons.map((icon) => {
						return { data: { icon: icon } };
					})
				),
			[] as { data: { icon: string } }[]
		);

		const filteredIcons = computed(() => {
			if (searchQuery.value.length === 0) {
				return flattenedIcons;
			}
			return flattenedIcons.filter((icon) =>
				icon.data.icon.includes(searchQuery.value.toLowerCase())
			);
		});

		return {
			icons,
			setIcon,
			searchQuery,
			filteredIcons,
			formatTitle,
			cellSizeAndPositionGetter,
		};

		function cellSizeAndPositionGetter(item: string, itemIndex: number) {
			return {
				width: 24,
				height: 24,
				x: (itemIndex % 10) * 30,
				y: 30 * Math.floor(itemIndex / 10),
			};
		}

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
