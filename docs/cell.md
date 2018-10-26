# `<Cell />` Component API

## Props

| Prop | Type | Default | Note |
|---|---|---|---|
|`disabled`|`bool`|`false`|Determines whether the `Cell` is clickable. In some cells it greys out the text color in that cell.|
|`style`|`Style`|   |The style for the container `View` of the `Cell`.|
|`onPress`|`() => void`|   |A function to call when the cell is clicked.|
|`onLongPress`|`() => void`|   |A function to call when the cell is long clicked.|
|`customAction`|`string`|   |The value for a custom action (Can be a url, phone number or email address).|
|`customActionType`|`CustomAction`|`openUrl`|The type of action to perform. Can be one of: `openUrl`, `call`, `compose`.|
|`customActionTrigger`|`CustomActionTrigger`|`onPress`|Can be one of: `onPress`, `onLongPress`.|

## Types

```
type CustomAction = 'call' | 'compose' | 'openUrl';
type CustomActionTrigger = 'onPress' | 'onLongPress';
```

