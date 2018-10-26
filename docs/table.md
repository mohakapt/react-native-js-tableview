# `<Table />` Component API

## Props

| Prop | Type | Default | Note |
|---|---|---|---|
|`accentColor`|`string`|iOS: `#007AFF` <br/> Android: `#009688`|This color is used for icons and section titles.|
|`theme`|`Theme`|`light`| The main theme of the table. Available values: `dark`, `light`.|
|`blendAccent`|`bool`|`dark`: `true`<br/>`light`: `false`|Determines whether to mix `accentColor` with the background of the table.|
|`disabled`|`bool`|`false`|Boolean to indicate whether the `Table` and its content are interactive.|
|`style`|`Style`|   |The style for the container `View` of the `Table`.|
|`isScrollable`|`bool`|`false`|Wraps the `Table` with `ScrollView`, Useful to disable when you have your own `ScrollView`.|
|`scrollViewStyle`|`Style`|   |The style for the `ScrollView` when `isScrollable` is `true`.|

## Types

```
type Theme = 'light' | 'dark';
```

*Note:* Some of the props above will get passed to the children of the table unless you provide other values manually.
