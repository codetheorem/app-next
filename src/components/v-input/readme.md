# Input

```html
<v-input v-model="value" />
```

## Attributes & Events

The HTML `<input>` element supports a huge amount of attributes and events. In order to support all of these, all props that aren't specially handled (see list below) will be passed on to the `<input>` element directly. This allows you to change anything you want on the input.

## Prefixes / Suffixes

You can add any custom (text) prefix/suffix to the value in the input using the `prefix` and `suffix` slots.

## Props
| Prop         | Description                                    | Default | Type               |
|--------------|------------------------------------------------|---------|--------------------|
| `autofocus`  | Autofocusses the input on render               | `false` | `Boolean`          |
| `disabled`   | Set the disabled state for the input           | `false` | `Boolean`          |
| `monospace`  | Render the entered value in the monospace font | `false` | `Boolean`          |
| `full-width` | Render the input with 100% width               | `false` | `Boolean`          |
| `prefix`     | Prefix the users value with a value            | `null`  | `String`           |
| `suffix`     | Show a value at the end of the input           | `null`  | `String`           |
| `value`      |                                                | `null`  | `[String, Number]` |

Note: all other attached attributes are bound to the input HTMLELement in the component. This allows you to attach any of the standard HTML attributes like `min`, `length`, or `pattern`.

## Slots
| Slot            | Description                                       | Data                                |
|-----------------|---------------------------------------------------|-------------------------------------|
| `prepend-outer` | Before the input                                  | `{ disabled: boolean, value: string | number; }`|
| `prepend`       | In the input, before the value, before the prefix | `{ disabled: boolean, value: string | number; }`|
| `append`        | In the input, after the value, after the suffix   | `{ disabled: boolean, value: string | number; }`|
| `append-outer`  | After the input                                   | `{ disabled: boolean, value: string | number; }`|

## Events
| Event                 | Description                                  | Value |
|-----------------------|----------------------------------------------|-------|
| `input`               | Updates `v-model`                            | `any` |
| `click:append`        | User clicks on content of inner append slot  | --    |
| `click:prepend`       | User clicks on content of inner prepend slot | --    |
| `click:append-outer`  | User clicks on content of outer append slot  | --    |
| `click:prepend-outer` | User clicks on content of outer prepend slot | --    |
<!-- readme-gen-igonre: click:append, click:prepend, click:append-outer, click:prepend-outer -->

Note: all other listeners are bound to the input HTMLElement, allowing you to handle everything from `keydown` to `emptied`.

## CSS Variables
n/a
