# Form
Renders a form using interfaces based on the passed collection name.

## Usage
```html
<v-form
	collection="articles"
	:edits.sync="{}"
	:initial-values="{
		title: 'Hello World'
	}"
/>
```

## Props
| Prop             | Description                                                                         | Default     | Type                              |
|------------------|-------------------------------------------------------------------------------------|-------------|-----------------------------------|
| `edits`          | The edits that were made after the form was rendered. Supports the `.sync` modifier | `null`      | `Object as PropType<FieldValues>` |
| `initial-values` | Object of the starting values of the fields                                         | `null`      | `Object as PropType<FieldValues>` |
| `collection`     | The collection of which you want to render the fields                               | `undefined` | `String`                          |
| `fields`         |                                                                                     | `undefined` | `TFormField[]`                    |
| `loading`        |                                                                                     | `false`     | `Boolean`                         |
| `batch-mode`     |                                                                                     | `false`     | `Boolean`                         |
| `primary-key`*   |                                                                                     |             | `[String, Number]`                |
| `disabled`       |                                                                                     | `false`     | `Boolean`                         |

## Slots
n/a

## Events
| Event   | Description              | Value |
|---------|--------------------------|-------|
| `input` | Edits have been updated. |       |
<!-- | `update:edits` | Update the edits state. Enables the `.sync` modifier on the `edits` prop |       | -->

## CSS Variables
| Variable                    | Default                                |
|-----------------------------|----------------------------------------|
| `--v-form-column-width`     | `var(--form-column-width)`             |
| `--v-form-row-max-height`   | `calc(var(--v-form-column-width) * 2)` |
| `--v-form-horizontal-gap`   | `var(--form-horizontal-gap)`           |
| `--v-form-vertical-gap`     | `var(--form-vertical-gap)`             |
| `--v-form-column-max-width` | `var(--form-column-max-width)`         |
