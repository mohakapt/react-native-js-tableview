# `<Table />` Component API

## Props

| Prop | Type | Default | Note |
|---|---|---|---|
|`accentColor`|`string`|iOS: `#007AFF` <br/> Android: `#009688`|This color is used for icons and section titles.|
|`theme`|`Theme`|`light`| The main theme of the table. Available values: `dark`, `light`.|
|`blendAccent`|`bool`|`dark`: `true`<br/>`light`: `false`|Determines whether to mix `accentColor` with the background of the table.|
|`colorPalette`|`func` or `object`|   |Accepts a custom `ColorPalette` to use in the components. Send a function to receive the current `ColorPalette` as the first parameter or send your `ColorPalette` directly.|
|`style`|`Style`|   |The style for the container `View` of the `Table`.|
|`scrollViewStyle`|`Style`|   |The style for the `ScrollView` when `scrollable` is `true`.|
|`children`|`React.ReactNode`|   |   |
|`scrollable`|`bool`|`false`|Wraps the `Table` with `ScrollView`, Useful to disable when you have your own `ScrollView`.|
|`disabled`|`bool`|`false`|Boolean to indicate whether the `Table` and its content are interactive.|

## Types

```
type Theme = 'light' | 'dark';

type ColorPalette = {
    background: string,
    section: string,
    separator: string,
    header: string,
    footer: string,
    accessory: string,
    title: string,
    subtitle: string,
    disabled: string,
    progress: string,

    underlay: string,
    ripple: string,
}
```

*Note:* Some of the props above will get passed to the children of the table unless you provide other values manually.
