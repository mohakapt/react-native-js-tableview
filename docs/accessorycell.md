# `<AccessoryCell />` Component API

## Props

| Prop                     | Type         | Default | Note                                                                                                           |
|--------------------------|--------------|---------|----------------------------------------------------------------------------------------------------------------|
| `disabled`               | `bool`       | `false` | Boolean to indicate whether the `AccessoryCell` is interactive.                                                |
| `accessory`              | `Accessory`  |         | A custom action that appears on the left side of the cell. Can be one of `disclosure`, `details`, `checkmark`. |
| `accessoryComponent`     | `React.Node` |         | A custom component to put in place of the accessory, `accessory` will be ignored if this prop is provided.     |
| `hideAccessorySeparator` | `bool`       | `false` |                                                                                                                |
| `loading`                | `bool`       | `false` |                                                                                                                |
| `onAccessoryPress`       | `() => void` |         |                                                                                                                |

## Types

```
type Accessory = 'disclosure' | 'details' | 'checkmark';
```
