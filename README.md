# react-native-js-tableview
> A JavaScript implementation for TableView that looks great on both iOS and Android.

[![Latest Stable Version](https://img.shields.io/npm/v/react-native-js-tableview.svg)](https://www.npmjs.com/package/react-native-js-tableview)
[![NPM Downloads](https://img.shields.io/npm/dm/react-native-js-tableview.svg)](https://www.npmjs.com/package/react-native-js-tableview)
[![GitHub issues](https://img.shields.io/github/issues-raw/mohakapt/react-native-js-tableview.svg)](https://github.com/mohakapt/react-native-js-tableview/issues)
[![License](https://img.shields.io/github/license/mohakapt/react-native-js-tableview.svg)](https://github.com/mohakapt/react-native-js-tableview)

_"Who wants native components. You spend hours linking 'em, they make your app crash and they don't work with expo, Yuck!"_ - **Steve Jobs** 😄
<br/><br/>

![react-native-js-tableview iOS Screenshot](https://raw.githubusercontent.com/mohakapt/react-native-js-tableview/master/images/screenshot_ios.jpg)
![react-native-js-tableview Android Screenshot](https://raw.githubusercontent.com/mohakapt/react-native-js-tableview/master/images/screenshot_android.jpg)


### Installation
```
npm i react-native-js-tableview
```
Or (If you're using yarn):

```
yarn add react-native-js-tableview
```


### Usage
You can check the example in the source code for more detailed information.<br/>For the complete list of available props there are flow annotations in every component (I will try to provide a list here very soon).

```js
import Table, { Section, BioCell, StaticCell, TouchableCell } from 'react-native-js-tableview';

class App extends React.Component {
  render() {
    return (
      <Table style={styles.container} accentColor="#4DB6AC" isScrollable={true}>
        <Section header="GENERAL" footer="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
          <BioCell title="Adam Smith" subtitle="Scottish economist, philosopher, and author." />
          <StaticCell title="Profile" accessory="disclosure" onPress={() => {}} />
          <StaticCell title="Books" accessory="disclosure" onPress={() => {}} />
          <StaticCell title="Projects" accessory="disclosure" onPress={() => {}} />
        </Section>
        
        <Section>
          <TouchableCell title="Sign out" onPress={() => {}} />
        </Section>
      </Table>
    );
  }
}
```


### Properties for all available components
These props are available for all components (`Table` `Section` `Cell` `AccessoryCell` `BioCell` `StaticCell` `KeyValueCell` `TouchableCell`): 

|Prop|Default Value|Description|
|---|---|---|
|`accentColor`|iOS: `#007AFF` <br/> Android: `#009688`|This color is used for icons and section titles.|
|`underlayColor`|`#F5FFFE`|Usually a light version of `accentColor` used of touch feedback.|

*Note:* The list of props above is inherited from parent to child meaning if you provide on of these props to (for example) a `Table` component all sections inside that table will get the same props unless you override it in the `Section` or the `Cell` component.

###`Table`

|Prop|Default Value|Description|
|---|---|---|
|`style`|Unavailable|The style for the container `View` of the `Table`.|
|`isScrollable`|`false`|Wraps the `Table` with `ScrollView`, Useful to disable when you have your own `ScrollView`.|
|`scrollViewStyle`|Unavailable|The style for the `ScrollView` if `isScrollable` is `true`.|

###`Section`

|Prop|Default Value|Description|
|---|---|---|
|`style`|Unavailable|The style for the container `View` of the `Section`.|
|`header`|`""`|A text that shows above the `Section`.|
|`headerStyle`|Unavailable|The style for the `Text` component in the header.|
|`headerComponent`|Unavailable|A custom component to put in the header of the `Section`, `header` and `headerStyle` will be ignored if this prop is provided.|
|`footer`|`""`|A text that shows bellow the `Section`.|
|`footerStyle`|Unavailable|The style for the `Text` component in the footer.|
|`footerComponent`|Unavailable|A custom component to put in the footer of the `Section`, `footer` and `footerStyle` will be ignored if this prop is provided.|
|`hideSeparators`|`false`|Hides/Shows the a separator each `Cell` in the `Section.|
|`separatorInsetLeft`|20|The left margin of the separators in the `Section`.|
|`separatorInsetRight`|0|The right margin of the separators in the `Section`.|
|`separatorColor`|iOS: `#C8C7CD` <br/> Android: `#EBEBEB`|The color of the separators in the `Section`.|

###`Cell`

|Prop|Default Value|Description|
|---|---|---|
|`style`|Unavailable|The style for the container `View` of the `Cell`.|
|`isEnabled`|`true`|Determines whether the `Cell` is clickable. In some cells it greys out the text color in that cell.|
|`onPress`|Unavailable|A function to call when the cell is clicked.|
|`onLongPress`|Unavailable|A function to call when the cell is long clicked.|
|`customActionType`|`openUrl`|The type of action to perform. Can be one of: `openUrl`, `call`, `compose`.|
|`customAction`|Unavailable|The value for a custom action (Can be a Url, Phone Number or Email Address).|
|`customActionTrigger`|`onPress`|Can be one of: `onPress`, `onLongPress`.|

###`AccessoryCell`
This cell contains all props from `Cell` component in addition to:

|Prop|Default Value|Description|
|---|---|---|
|`accessory`|`""`|A custom action that appears on the left side of the cell. Can be one of `disclosure`, `details`, `checkmark`.|
|`accessoryTint`|accentColor|The color of the accessory icon.|
|`accessoryComponent`|Unavailable|A custom component to put in place of the accessory, `accessory` andy `accessoryTint` will be ignored if this prop is provided.|
|`hideAccessorySeparator`|`false`||
|`accessorySeparatorColor`|iOS: `#C8C7CD` <br/> Android: `#EBEBEB`||
|`onAccessoryPress`|Unavailable||

###`StaticCell`
This cell contains all props from `Cell` and `AccessoryCell` components in addition to:

`To be continued, meanwhile check FlowTypes or PropTypes for more info.`


## Contributing
If you encounter a bug or you have a feature in mind please make a pull request and i will merge it as soon as possible, if you can't (for some reason) make a pull request please open an issue and i will happily do respond to it.


## Versioning
I use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/mohakapt/react-native-js-tableview/tags).<br/>
I will try to provide release notes with every release.


## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/mohakapt/react-native-js-tableview/blob/master/LICENSE) file for details
