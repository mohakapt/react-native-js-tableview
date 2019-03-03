/* @flow */

import { AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import App from './src/App';
import { name as appName } from './app.json';

const AppNavigator = createStackNavigator({ App: { screen: App } });
AppRegistry.registerComponent(appName, () => AppNavigator);
