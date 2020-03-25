# Notice

```html
<v-notice>I'm a notice!</v-notice>
```

## Props
| Prop      | Description                                                        | Default | Type      |
|-----------|--------------------------------------------------------------------|---------|-----------|
| `success` | Shows the success notice                                           | `false` | `Boolean` |
| `warning` | Shows the warning notice                                           | `false` | `Boolean` |
| `danger`  | Shows the danger notice                                            | `false` | `Boolean` |
| `icon`    | Custom icon name, or false if you want to hide the icon completely | `null`  | `[String` |

## Slots
| Slot      | Description | Data |
|-----------|-------------|------|
| _default_ |             | --   |

## Events
n/a

## CSS Variables
| Variable                      | Default                   |
|-------------------------------|---------------------------|
| `--v-notice-color`            | `var(--foreground-color)` |
| `--v-notice-background-color` | `var(--action-light)`     |
| `--v-notice-icon-color`       | `var(--action)`           |
