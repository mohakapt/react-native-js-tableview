# `<SwitchCell />` Component API

## Props

`SwitchCell` supports all the props of [`AccessoryCell`](accessorycell.md), [`Cell`](cell.md), and the following additional props:

| Prop            | Type                       | Default                           | Note                                                            |
|-----------------|----------------------------|-----------------------------------|-----------------------------------------------------------------|
| `title`         | `string`                   | `Required`                        | The title of the cell.                                          |
| `titleStyle`    | `Style`                    |                                   | The style for the title text.                                   |
| `switchOnCell`  | `boolean`                  | iOS: `false` <br/>Android: `true` | Whether the switch will toggle when the cell itself is pressed. |
| `value`         | `boolean`                  | `false`                           | The value of the switch.                                        |
| `onSwitch`      | `(value: boolean) => void` |                                   | A function to call when the switch is toggled.                  |
| `iconComponent` | `React.Node`               |                                   | A custom component to put in place of the icon.                 |
