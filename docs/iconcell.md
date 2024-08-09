# `<StaticCell />` Component API

## Props

`IconCell` supports all the props of [`AccessoryCell`](accessorycell.md), [`Cell`](cell.md), and the following additional props:

| Prop                    | Type                                   | Default    | Note                                                                                                     |
|-------------------------|----------------------------------------|------------|----------------------------------------------------------------------------------------------------------|
| `iconComponent`         | `React.Node`                           |            | A custom component to put in place of the icon.                                                          |
| `iconContainerStyle`    | `Style`                                |            | The style for the container of the icon.                                                                 |
| `contentComponent`      | `React.Node`                           |            | A custom component to put in place of the content. When provided `title` and `subtitle` will be ignored. |
| `contentContainerStyle` | `Style`                                |            | The style for the container of the content.                                                              |
| `children`              | `React.Node`                           |            | An alias for `contentComponent`. When both are provided `children` is prioritized.                       |
