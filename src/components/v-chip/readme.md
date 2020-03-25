# Chip

```html
<v-chip>I'm a chip!</v-chip>
```

## Sizes

The chip component supports the following sizes through the use of props:

* x-small
* small
* (default)
* large
* x-large

```html
<v-chip x-small>I'm a chip!</v-chip>
```

## Colors

You can set the color, background color, hover color, and background hover color with the `--v-chip-color`, `--v-chip-background-color`, `--v-chip-color-hover`, and `--v-chip-background-color-hover` css variables respectively:

```html
<v-chip> I'm a chip! </v-chip>
<style>
.v-chip {
	--v-chip-color: var(--red);
	--v-chip-background-color: var(--red-50);
	--v-chip-color-hover: var(--white);
	--v-chip-background-color-hover: var(--red);
}
</style>
```

## Clicks / Closes

There are two events, one when clicking on the chip called `click` and one when clicking on the enabled close icon called `close`.

```html
<v-chip @click="sayHi">Hello!</v-chip>
<v-chip close @close="close">I'm closeable!</v-chip>
```

## Props
| Prop         | Description                                          | Default   | Type      |
|--------------|------------------------------------------------------|-----------|-----------|
| `active`     | Change visibility. Can be reacted to via `sync`      | `null`    | `Boolean` |
| `close`      | Displays a close icon which triggers the close event | `false`   | `Boolean` |
| `close-icon` | Which icon should be displayed instead of `close `   | `'close'` | `String`  |
| `outlined`   | No background                                        | `false`   | `Boolean` |
| `label`      | Label style                                          | `false`   | `Boolean` |
| `disabled`   | Disabled state                                       | `false`   | `Boolean` |
| `x-small`    | Render extra small                                   | `false`   |           |
| `small`      | Render small                                         | `false`   |           |
| `large`      | Render large                                         | `false`   |           |
| `x-large`    | Render extra large                                   | `false`   |           |
<!-- readme-gen-igonre: x-small, small, large, x-large -->

## Slots
| Slot      | Description | Data |
|-----------|-------------|------|
| _default_ |             | --   |

## Events
| Event           | Description                                                                                    | Value |
|-----------------|------------------------------------------------------------------------------------------------|-------|
| `click`         | Triggers when clicked somewhere on the chip                                                    |       |
| `close`         | Triggers when the `close` prop is enabled and gets clicked (Doesn't trigger the `click` event) |       |
| `update:active` |                                                                                                |       |

## CSS Variables
| Variable                          | Default                               |
|-----------------------------------|---------------------------------------|
| `--v-chip-color`                  | `var(--input-foreground-color)`       |
| `--v-chip-background-color`       | `var(--input-border-color)`           |
| `--v-chip-color-hover`            | `var(--input-foreground-color-hover)` |
| `--v-chip-background-color-hover` | `var(--input-border-color-hover)`     |
