/* @flow */

import { AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import App from './src/App';

const AppNavigator = createStackNavigator({ App: { screen: App } });
AppRegistry.registerComponent('example', () => AppNavigator);
