# Interfaces
Interfaces are the individual blocks that allow editing and viewing individual pieces of data. They
can be seen as the individual fields in a form, where the field is a single column in a table.

## Defining interfaces
Interfaces need to be defined through the `defineInterface` function. This allows the interface to
register things like it's name, options, and the way it displays data across the platform.

```js
export default defineInterface({
	id: 'text-input',
	register: ({ i18n }) => ({
		name: i18n.t('interfaces.text-input.text-input'),
		icon: 'box',
		component: InterfaceTextInput,
		display: value => {
			return formatTitle(value);
		}
	})
});
```

### `id`
Unique ID for the interface within the platform. This is not shown to the end user, but is used
internally to build up forms and layouts.

### `register`
Callback function that allows the interface to register it's options and other user-facing parameters.

The one parameter that the register function gets is `context`. Context holds the following properties:

| Property | Description                                                                                             |
|----------|---------------------------------------------------------------------------------------------------------|
| `i18n`   | The internal vue-i18n instance. Can be used to return a translated name or translated interface options |

#### `name`
The user-facing name of the interface. By using the `i18n` handler from context, you can make this
localized.

#### `icon`
The icon that's shown when refering to this interface. It's most prominent usage is in the field-setup
wizard.

#### `component`
The Vue component that makes up the input of the interface. This is the component that will be rendered
in the edit form.

#### `display`
Next to the actual input, interfaces have the ability to define the way it's value it's shown elsewhere
in the platform. This can be useful if the data needs to be manipulated before it can shown to the
end user in a way that makes sense. For example, one might want to convert a hex value into a color
swatch when the value is being shown in the platform.

This value can either be:

* `null`
  render the raw value as stored in the database
* `(val) => string | number`
  a callback function that converts the value before being shown
* Vue Component
  a custom Vue component that will be rendered inline. Ideally this is a functional component, to
  ensure performance when looking at large datasets.