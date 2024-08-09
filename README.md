# react-native-js-tableview
> A JavaScript implementation for TableView that looks great on both iOS and Android.

[![Latest Stable Version](https://img.shields.io/npm/v/react-native-js-tableview.svg)](https://www.npmjs.com/package/react-native-js-tableview)
[![NPM Downloads](https://img.shields.io/npm/dm/react-native-js-tableview.svg)](https://www.npmjs.com/package/react-native-js-tableview)
[![GitHub issues](https://img.shields.io/github/issues-raw/mohakapt/react-native-js-tableview.svg)](https://github.com/mohakapt/react-native-js-tableview/issues)
[![License](https://img.shields.io/github/license/mohakapt/react-native-js-tableview.svg)](https://github.com/mohakapt/react-native-js-tableview)

_"Who wants native components. You spend hours linking 'em, they make your app crash, and they don't work with expo, Yuck!"_ - **Steve Jobs** 😄
<br/><br/>

![react-native-js-tableview iOS Screenshot](https://raw.githubusercontent.com/mohakapt/react-native-js-tableview/master/images/screenshot_ios.gif)
![react-native-js-tableview Android Screenshot](https://raw.githubusercontent.com/mohakapt/react-native-js-tableview/master/images/screenshot_android.gif)


### Installation
```
npm i react-native-js-tableview
```
Or (If you're using yarn):

```
yarn add react-native-js-tableview
```


### Component API

* [`<Table />` Component API](docs/table.md)
* [`<Section />` Component API](docs/section.md)
* [`<Cell />` Component API](docs/cell.md)
* * [`<AccessoryCell />` Component API](docs/accessorycell.md)
* * * [`<IconCell />` Component API](docs/iconcell.md)
* * * * [`<StaticCell />` Component API](docs/staticcell.md)
* * * * * [`<BioCell />` Component API](docs/biocell.md)
* * * * [`<KeyValueCell />` Component API](docs/keyvaluecell.md)
* * * * [`<SwitchCell />` Component API](docs/switchcell.md)
* * * [`<TouchableCell />` Component API](docs/touchablecell.md)


### General Usage

```js
import Table from 'react-native-js-table';
```
or

```js
const Table = require('react-native-js-table');
```

This Table component is built so that features in the table (such as Sections, Cells, etc.) are
specified as children of the Table itself. This provides an intuitive and react-like API for
controlling the features of the table.


### Usage

You can check the example in the source code for more detailed information.<br/>For the complete list of available props there are flow annotations and ViewProps for every component. (I will try to provide TypeScript types very soon.)

```js
import Table, { Section, BioCell, StaticCell, TouchableCell } from 'react-native-js-tableview';

const App = () => (
  <Table style={styles.container} accentColor='#4DB6AC' scrollable={true}>
    <Section header='GENERAL' footer='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'>
      <BioCell title='Adam Smith' subtitle='Scottish economist, philosopher, and author.' />
      <StaticCell title='Profile' accessory='disclosure' onPress={() => {}} />
      <StaticCell title='Books' accessory='disclosure' onPress={() => {}} />
      <StaticCell title='Projects' accessory='disclosure' onPress={() => {}} />
    </Section>

    <Section>
      <TouchableCell title='Sign out' onPress={() => {}} />
    </Section>
  </Table>
);
```


## Contributing
If you encounter a bug, or you have a feature in mind please make a pull request, and I will merge it as soon as possible, if you can't (for some reason) make a pull request please open an issue, and I will happily do respond to it.


## Versioning
I use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/mohakapt/react-native-js-tableview/tags).<br/>
I will try to provide release notes with every release.


## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/mohakapt/react-native-js-tableview/blob/master/LICENSE) file for details
