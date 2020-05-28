<template>
	<div class="interface-markdown" :class="font">
		<textarea ref="markdownEl" :value="value" />
	</div>
</template>

<script lang="ts">
import SimpleMDE from 'simplemde';
import 'simplemde/dist/simplemde.min.css';

import {
	defineComponent,
	PropType,
	ref,
	computed,
	onMounted,
	onUnmounted,
} from '@vue/composition-api';

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
		const markdownEl = ref<HTMLTextAreaElement>(null);
		const simplemde = ref<SimpleMDE>(null);

		const editorOptions = computed(() => {
			return {
				initialValue: props.value,
				toolbar: props.toolbar,
				tabSize: 4,

				...(props.simpleMDEOverrides || {}),
			};
		});

		onMounted(() => {
			if (markdownEl.value) {
				const el = markdownEl.value;
				simplemde.value = new SimpleMDE({
					...editorOptions.value,
					element: el,
				});
				const instance = simplemde.value;
				instance.codemirror.on('change', () => {
					emit('input', instance.value());
				});
			}
		});

		onUnmounted(() => {
			if (simplemde.value) simplemde.value.toTextArea();
			simplemde.value = null;
		});

		return { markdownEl };
	},
});
</script>

<style lang="scss" scoped>
.interface-markdown {
	&.monospace {
		font-family: var(--family-monospace);
	}

	&.serif {
		font-family: var(--family-serif);
	}

	&.sans-serif {
		font-family: var(--family-sans-serif);
	}
}
</style>
