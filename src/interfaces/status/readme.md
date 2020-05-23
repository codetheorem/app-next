# Status Interface

Renders a dropdown with the available status options.

## Props
| Prop             | Description                 | Default | Type      |
|------------------|-----------------------------|---------|-----------|
| `status_mapping` | What statuses are available | `null`  | `Object`  |
| `value`          |                             | `null`  | `String`  |
| `disabled`       |                             | `false` | `Boolean` |

### Status Mapping format

```ts
type Status = {
  [key: string]: {
    name: string;
    text_color: string;
    background_color: string;
    soft_delete: boolean;
    published: boolean;
  }
}
```

`status_mapping` is the only option for an interface that isn't camelCased. This is due to the fact
that the API relies on the same setting for it's permissions management.
