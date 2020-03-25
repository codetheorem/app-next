# Avatar

```html
<v-avatar>RVZ</v-avatar>

<v-avatar>
	<img src="..." />
</v-avatar>

<v-avatar>
	<v-icon name="person">
</v-avatar>
```

## Props
| Prop      | Description               | Default | Type      |
|-----------|---------------------------|---------|-----------|
| `size`    | Size in px                | `null`  | `Number`  |
| `tile`    | Render as a tile (square) | `false` | `Boolean` |
| `x-small` | Render extra small        | `false` |           |
| `small`   | Render small              | `false` |           |
| `large`   | Render large              | `false` |           |
| `x-large` | Render extra large        | `false` |           |
<!-- readme-gen-igonre: x-small, small, large, x-large -->

## Slots
| Slot      | Description | Data |
|-----------|-------------|------|
| _default_ |             | --   |

## Events

n/a

## CSS Variables
| Variable           | Default         |
|--------------------|-----------------|
| `--v-avatar-color` | `var(--action)` |
| `--v-avatar-size`  | `48px`          |
