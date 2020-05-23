# WYSIWYG

Rich Text editor based on TineMCE.

## Props
| Prop                | Description                                                                                      | Default         | Type                                                         |
|---------------------|--------------------------------------------------------------------------------------------------|-----------------|--------------------------------------------------------------|
| `toolbar`           | What toolbar options to show                                                                     | `() => ['bold'` | `string[]`                                                   |
| `custom-formats`    | What custom html blocks to show in the editor                                                    | `() => []`      | `CustomFormat[]`                                             |
| `font`              | Font to render the value in (`sans-serif`, `serif`, or `monospace`)                              | `'serif'`       | `String as PropType<'sans-serif' or 'serif' or 'monospace'>` |
| `tinymce-overrides` | Override any of the [init options](https://www.tiny.cloud/docs/configure/integration-and-setup/) | `null`          | `Object`                                                     |
| `value`             |                                                                                                  | `''`            | `String`                                                     |
| `disabled`          |                                                                                                  | `false`         | `Boolean`                                                    |

### Toolbar defaults

```
bold,
italic,
underline,
removeformat,
link,
bullist,
numlist,
blockquote,
h1,
h2,
h3,
image,
media,
hr,
code,
fullscreen
```

## Events
| Event   | Description | Value |
|---------|-------------|-------|
| `input` |             |       |
