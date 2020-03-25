# Switch

## Basic usage

```html
<v-switch v-model="checked" label="Receive newsletter" />
```

## Colors

Color changes are done using the css variable `--v-switch-color`.

```html
<v-switch/>
<style>
.v-switch {
    --v-switch-color: var(--red);
}
</style>
```

## Boolean vs arrays

Just as with regular checkboxes, you can use `v-model` with both an array and a boolean:


```html
<template>
	<v-switch v-model="withBoolean" />

	<v-switch v-model="withArray" value="red" />
	<v-switch v-model="withArray" value="blue" />
	<v-switch v-model="withArray" value="green" />
</template>

<script>
	export default {
		data() {
			return {
				withBoolean: false,
				withArray: ['red', 'green']
			}
		}
	}
</script>
```

Keep in mind to pass the `value` prop with a unique value when using arrays in `v-model`.

## Props
| Prop          | Description                                                            | Default | Type               |
|---------------|------------------------------------------------------------------------|---------|--------------------|
| `value`       | Value for switch. Similar to value attr on checkbox type input in HTML | `null`  | `String`           |
| `input-value` | Value that's used with `v-model`. Either boolean or array of values    | `false` | `[Boolean, Array]` |
| `label`       | Label for the checkbox                                                 | `null`  | `String`           |
| `disabled`    |                                                                        | `false` | `Boolean`          |

## Events
| Event    | Description                | Data                       | Value |
|----------|----------------------------|----------------------------|-------|
| `change` | New state for the checkbox | Boolean or array of values |       |

## Slots
| Slot    | Description                                                                                    | Data |
|---------|------------------------------------------------------------------------------------------------|------|
| `label` | Allows custom markup and HTML to be rendered inside the label. Will override the `label` prop. |      |

## CSS Variables
| Variable           | Default                         |
|--------------------|---------------------------------|
| `--v-switch-color` | `var(--input-foreground-color)` |
