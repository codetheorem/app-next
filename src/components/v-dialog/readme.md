# Dialog

Renders an overlay with a flex slot rendering whatever content you pass

## Usage

```html
<v-dialog>
    <v-sheet>
        <h2>Are you sure you want to delete this item?</h2>
        <v-button>No</v-button>
        <v-button>Yes</v-button>
    </v-sheet>
</v-dialog>
```

## Props
| Prop         | Description                     | Default | Type      |
|--------------|---------------------------------|---------|-----------|
| `persistent` | Disable clicking on the overlay | `false` | `Boolean` |
| `active`     |                                 | `false` | `Boolean` |

## Slots
| Slot        | Description | Data |
|-------------|-------------|------|
| _default_   |             | --   |
| `activator` |             |      |

## Events
| Event    | Description             | Value     |
|----------|-------------------------|-----------|
| `toggle` | Change the active state | `boolean` |

## CSS Variables
| Variable             | Default |
|----------------------|---------|
| `--v-dialog-z-index` | `100`   |
