declare module '*.vue' {
	import Vue from 'vue';
	export default Vue;
}

declare module '*.svg' {
	import Vue from 'vue';
	export default Vue;
}

declare module '*.md' {
	const value: string;
	export default value;
}

declare module 'vuedraggable' {
	import Vue from 'vue';
	export default Vue;
}

declare module 'vue-virtual-collection' {
	import Vue, { ComponentOptions, PluginObject, Component } from 'vue';
	interface PluginOptions {
		installComponents?: boolean;
		componentsPrefix?: string;
	}

	const plugin: PluginObject<PluginOptions> & { version: string };

	export const VirtualCollection: Component<any, any, any, any>;

	export default plugin;
}
