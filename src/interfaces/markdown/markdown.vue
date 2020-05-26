<template>
	<textrea ref="markdownEl" />
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from '@vue/composition-api';

import SimpleMDE from 'SimpleMDE';

export default defineComponent({
	props: {
		value: {
			type: String,
			default: '',
		},
		toolbar: {
			type: Array as PropType<string[]>,
			default: () => [
				'bold',
				'italic',
				'underline',
				'removeformat',
				'link',
				'bullist',
				'numlist',
				'blockquote',
				'h1',
				'h2',
				'h3',
				'image',
				'media',
				'hr',
				'code',
				'fullscreen',
			],
		},
		font: {
			type: String as PropType<'sans-serif' | 'serif' | 'monospace'>,
			default: 'serif',
		},
		simpleMDEOverrides: {
			type: Object,
			default: null,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	setup(props, { emit }) {
		const markdownEl = ref<any>(null);

		const _value = computed({
			get() {
				return props.value;
			},
			set(newValue: string) {
				emit('input', newValue);
			},
		});

		const editorOptions = computed(() => {
			const styleFormats = null;

			let toolbarString = props.toolbar.join(' ');

			if (styleFormats) {
				toolbarString += ' styleselect';
			}

			return {
				element: markdownEl.value,
				initialValue: props.value,
				tabSize: 4,

				...(props.simpleMDEOverrides || {}),
			};
		});
		markdownEl;
		return { markdownEl, _value };
	},
});
</script>

<style lang="scss" scoped>
.body {
	padding: 20px;
}

@import '~tinymce/skins/ui/oxide/skin.css';
@import './tinymce-overrides.css';
</style>
