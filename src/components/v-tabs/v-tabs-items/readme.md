# Tabs Items

Tabs Items mirror a tab and display information for a selected tab.
If a tab item is not selected, it automaticly gets hidden.

## Usage

```html
<v-tabs-items v-model="selection">
	<v-tab-item>Home Section</v-tab-item>
	<v-tab-item>News Section</v-tab-item>
	<v-tab-item>Help Section</v-tab-item>
</v-tabs-items>
```

## Props
| Prop    | Description   | Default     | Type                   |
|---------|---------------|-------------|------------------------|
| `value` | v-model value | `undefined` | `(string or number)[]` |

## Events
| Event   | Description     | Value                          |
|---------|-----------------|--------------------------------|
| `input` | Updates v-model | `readonly (string or number)[]`|

## Slots
| Slot      | Description | Data |
|-----------|-------------|------|
| _default_ |             |      |

## CSS Variables
n/a
