# `<StaticCell />` Component API

## Props

`StaticCell` supports all the props of [`IconCell`](iconcell.md), [`AccessoryCell`](accessorycell.md), [`Cell`](cell.md), and the following additional props:

| Prop                    | Type                                   | Default    | Note                                                                                                     |
|-------------------------|----------------------------------------|------------|----------------------------------------------------------------------------------------------------------|
| `title`                 | `string`                               | `Required` | The title of the cell.                                                                                   |
| `titleStyle`            | `Style`                                |            | The style for the title text.                                                                            |
| `titleNumberOfLines`    | `number`                               | 0          | The number of lines for the title text. 0 means unlimited lines.                                         |
| `titleEllipsizeMode`    | `head` \| `middle` \| `tail` \| `clip` | `tail`     | The ellipsize mode for the title text. Used when the number of lines is limited.                         |
| `subtitle`              | `string`                               |            | The subtitle of the cell.                                                                                |
| `subtitleStyle`         | `Style`                                |            | The style for the subtitle text.                                                                         |
| `subtitleNumberOfLines` | `number`                               | 0          | The number of lines for the subtitle text. 0 means unlimited lines.                                      |
| `subtitleEllipsizeMode` | `head` \| `middle` \| `tail` \| `clip` | `tail`     | The ellipsize mode for the subtitle text. Used when the number of lines is limited.                      |
