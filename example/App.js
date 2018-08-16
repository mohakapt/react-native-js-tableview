/* @flow */

import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar } from 'react-native';
import Table, { Section, KeyValueCell, StaticCell, TouchableCell, BioCell } from 'react-native-js-tableview';
import { COLOR_ACCENT, COLOR_ACCENT_DARK, COLOR_ACCENT_DARKER, COLOR_ACCENT_LIGHT } from './assets/colors';
import Icon from './assets/icons';

type Props = {};

type State = {
	selectedBook: number,
};

export default class App extends Component<Props> {
	static navigationOptions = {
		title: 'Profile',
		...Platform.select({
			android: {
				headerStyle: {
					backgroundColor: COLOR_ACCENT,
				},
				headerTintColor: 'white',
			},
		}),
	};

	constructor(props) {
		super(props);

		this.state = { selectedBook: 0 };
	}

	componentWillMount() {
		if (Platform.OS === 'android') {
			StatusBar.setBackgroundColor(COLOR_ACCENT_DARK);
		}
	}

	onBioTouched = () => {

	};

	onContactTouched = (contact: 'phone' | 'email') => {
		const messages = {
			phone: 'Sorry, Adam Smith is not available right now. 😀',
			email: 'Really!, The man probably haven\'t even thought about sending and receiving messages that fast.',
		};

		alert(messages[contact]);
	};

	onContactLongTouched = (contact: 'phone' | 'email') => {
		const messages = {
			phone: 'Adam Smith\'s phone number is copied',
			email: 'Adam Smith\'s email address is copied',
		};

		alert(messages[contact]);
	};

	onWorksTouched = (work: 'books' | 'articles' | 'projects') => {

	};

	onReminderTouched = (index: number) => {
		this.setState({ selectedBook: index });
	};

	onLogoutTouched = () => {

	};

	render() {
		const adamSmithPhoto = 'https://static1.squarespace.com/static/56eddde762cd9413e151ac92/t/56f6e29eb2d7c7b358cf8dad/1459020450333/';
		const getIcon = (name: string, tint: ?string): React.Node => (
			<Icon name={name} tintColor={tint || COLOR_ACCENT_DARKER} />
		);
		const getBooks = (): Array<React.Node> =>
			['The Wealth of Nations', 'The Theory of Moral Sentiments', 'Lectures on Jurisprudence', 'Essays on Philosophical Subjects']
				.map((title: string, index: number) =>
					<StaticCell
						key={index}
						title={title}
						accessory={this.state.selectedBook === index ? 'checkmark' : ''}
						onPress={this.onReminderTouched.bind(this, index)} />);


		let generalHeader = 'General';
		const generalFooter = 'All materials about Adam Smith are brought to you from wikipedia.org';
		if (Platform.OS === 'ios') {
			generalHeader = generalHeader.toUpperCase();
		}

		return (
			<Table
				style={styles.container}
				isScrollable={true}
				accentColor={COLOR_ACCENT}
				underlayColor={COLOR_ACCENT_LIGHT}>

				<Section>
					<BioCell
						title="Adam Smith"
						subtitle="Scottish economist, philosopher, and author."
						photoUrl={adamSmithPhoto}
						accessory="detail"
						onPress={this.onBioTouched} />

					<KeyValueCell
						style={styles.email}
						title="+1-541-754-3010"
						iconComponent={getIcon('phone')}
						accessory="disclosure"
						onPress={this.onContactTouched.bind(this, 'phone')}
						onLongPress={this.onContactLongTouched.bind(this, 'phone')} />

					<KeyValueCell
						style={styles.email}
						title="a.smith@gmail.com"
						iconComponent={getIcon('email')}
						accessory="disclosure"
						onPress={this.onContactTouched.bind(this, 'email')}
						onLongPress={this.onContactLongTouched.bind(this, 'email')} />
				</Section>

				<Section header={generalHeader} footer={generalFooter} headerStyle={styles.sectionHeader}
				         separatorInsetLeft={54}>
					<KeyValueCell
						title="Books"
						value="3 books"
						iconComponent={getIcon('book')}
						accessory="disclosure"
						onPress={this.onWorksTouched.bind(this, 'books')} />

					<KeyValueCell
						title="Articles"
						value="238 articles"
						iconComponent={getIcon('article')}
						accessory="disclosure"
						onPress={this.onWorksTouched.bind(this, 'books')} />

					<KeyValueCell
						title="Projects"
						value="8 projects"
						iconComponent={getIcon('project')}
						accessory="disclosure"
						onPress={this.onWorksTouched.bind(this, 'books')} />
				</Section>

				<Section header="Select Your favorite book:">
					{getBooks()}
				</Section>

				<Section>
					<TouchableCell title="Log Out" onPress={this.onLogoutTouched} />
				</Section>
			</Table>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginBottom: 30,
	},
	email: {
		backgroundColor: '#fbfbfb',
	},
	sectionHeader: Platform.select({
		android: {
			color: COLOR_ACCENT,
		},
	}),
});
