# `<BioCell />` Component API

## Props

`BioCell` supports all the props of [`StaticCell`](staticcell.md), [`AccessoryCell`](accessorycell.md), [`Cell`](cell.md), and the following additional props:

| Prop             | Type          | Default | Note                                                                                                            |
|------------------|---------------|---------|-----------------------------------------------------------------------------------------------------------------|
| `avatarName`     | `string`      |         | A text to display its initials in the avatar icon. If not provided `title` will be used.                        |
| `avatarSize`     | `number`      | 68      | The side length of the avatar.                                                                                  |
| `photoComponent` | `React.Node`  |         | A custom component to put in place of the avatar. When provided `avatarName` and `photoSource` will be ignored. |
| `photoSource`    | `ImageSource` |         | The source for the avatar image. When provided a photo will be loaded instead of showing an avatar.             |
| `photoStyle`     | `ImageStyle`  |         | The style for the avatar image. Only applied if a photo is being displayed. Doesn't apply to avatars.           |
