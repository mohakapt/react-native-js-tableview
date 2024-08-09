# `<Section />` Component API

## Props

| Prop                  | Type          | Default                           | Note                                                                                                                           |
|-----------------------|---------------|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| `disabled`            | `bool`        | `false`                           | Boolean to indicate whether the `Section` and its content are interactive.                                                     |
| `mode`                | `SectionMode` | `inset-grouped`                   | `grouped` keeps the original look of the section, `inset-grouped` makes the section inset with rounded corners.                |
| `style`               | `Style`       |                                   | The style for the container `View` of the `Section`.                                                                           |
| `header`              | `string`      |                                   | A text that shows above the `Section`.                                                                                         |
| `headerCapitalized`   | `bool`        | iOS: `true` <br/>Android: `false` | Whether the `header` text should be in capital letters.                                                                        |
| `headerStyle`         | `Style`       |                                   | The style for the `Text` component in the header.                                                                              |
| `headerComponent`     | `React.Node`  |                                   | A custom component to put in the header of the `Section`, `header` and `headerStyle` will be ignored if this prop is provided. |
| `footer`              | `string`      |                                   | A text that shows bellow the `Section`.                                                                                        |
| `footerCapitalized`   | `bool`        | `false`                           | Whether the `footer` text should be in capital letters.                                                                        |
| `footerStyle`         | `Style`       |                                   | The style for the `Text` component in the footer.                                                                              |
| `footerComponent`     | `React.Node`  |                                   | A custom component to put in the footer of the `Section`, `footer` and `footerStyle` will be ignored if this prop is provided. |
| `hideSeparators`      | `bool`        | `false`                           | Hides/Shows the a separator each `Cell` in the `Section.                                                                       |
| `separatorInsetLeft`  | `number`      | 20                                | The left margin of the separators in the `Section`.                                                                            |
| `separatorInsetRight` | `number`      | 0                                 | The right margin of the separators in the `Section`.                                                                           |

## Types

```
type SectionMode = 'grouped' | 'inset-grouped';
