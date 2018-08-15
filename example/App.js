/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
import Table, { Section, KeyValueCell,TouchableCell } from 'react-native-js-tableview';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android:
	'Double tap R on your keyboard to reload,\n' +
	'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
	render() {
		return (
			<Table style={styles.container} accentColor='#ffc'>
				<Section>
					<KeyValueCell title="Title" />
					<TouchableCell title="Action"/>
				</Section>
			</Table>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
