import VueI18n from 'vue-i18n';
import { Component } from 'vue';
import { Field, Type } from '@/stores/fields/types';

export type InterfaceConfig = {
	id: string;
	icon: string;
	name: string | VueI18n.TranslateResult;
	component: Component;
	options: Partial<Field>[] | Component;
	types: Type[];
	hideLabel?: boolean;
	hideLoader?: boolean;
};

export type InterfaceContext = { i18n: VueI18n };

export type InterfaceDefineParam = InterfaceDefineParamGeneric<InterfaceConfig>;

export type InterfaceDefineParamGeneric<T> = T | ((context: InterfaceContext) => T);
