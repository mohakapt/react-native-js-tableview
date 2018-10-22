/* @flow */

import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar } from 'react-native';
import Table, { Section, KeyValueCell, StaticCell, TouchableCell, BioCell } from './src';
import { COLOR_ACCENT, COLOR_ACCENT_DARK, COLOR_ACCENT_DARKER, COLOR_ACCENT_LIGHT } from './assets/colors';
import Icon from './assets/icons';

type Props = {
	navigation: any,
};

type State = {
	theme: 'light' | 'dark',
	selectedBook: number,
};

export default class App extends Component<Props, State> {
	static navigationOptions = ({ navigation }) => {
		const { params = {} } = navigation.state;
		const theme = params.theme || 'light';

		return {
			title: 'Profile',

			...Platform.select({
				ios: {
					headerStyle: {
						backgroundColor: theme === 'dark' ? '#1B1B1B' : '#F7F7F7',
						borderBottomColor: theme === 'dark' ? '#3A3A3A' : '#A7A7AA',
					},
					headerTintColor: theme === 'dark' ? 'white' : 'black',
				},
				android: {
					headerStyle: {
						backgroundColor: COLOR_ACCENT,
					},
					headerTintColor: 'white',
				},
			}),
		};
	};

	constructor(props) {
		super(props);

		const theme = 'dark';

		this.state = { theme, selectedBook: 0 };
		this.props.navigation.setParams({ theme });
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
			['The Wealth of Nations', 'The Theory of Moral Sentiments', 'Lectures on Jurisprudence', 'Essays on Philosophical Subjects', 'The Essential Adam Smith']
				.map((title: string, index: number) =>
					<StaticCell
						key={index}
						title={title}
						accessory={this.state.selectedBook === index ? 'checkmark' : ''}
						hideAccessorySeparator
						onPress={this.onReminderTouched.bind(this, index)} />);


		let generalHeader = 'General';
		const generalFooter = 'All materials about Adam Smith are brought to you from wikipedia.org';
		if (Platform.OS === 'ios') {
			generalHeader = generalHeader.toUpperCase();
		}

		const { theme } = this.state;
		return (
			<>
				<StatusBar
					backgroundColor={COLOR_ACCENT_DARK}
					barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} />

				<Table
					theme={theme}
					blendAccent={false}
					style={styles.container}
					isScrollable={true}
					accentColor={COLOR_ACCENT}
					underlayColor={COLOR_ACCENT_LIGHT}>

					<Section>
						<BioCell
							title="Adam Smith"
							subtitle="Scottish economist, philosopher, and author."
							photoUrl={adamSmithPhoto}
							accessory="details"
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

					<Section header={generalHeader} footer={generalFooter} separatorInsetLeft={54}>
						<KeyValueCell
							title="Books"
							value="3 books"
							iconComponent={getIcon('book')}
							accessory="disclosure"
							customAction='www.google.com'
							customActionType='openUrl'
							customActionTrigger='onPress'
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
						<TouchableCell
							title="Log Out"
							accentColor="#B71C1C"
							onPress={this.onLogoutTouched} />
					</Section>
				</Table>
			</>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginBottom: 30,
	},
	email: {
		//backgroundColor: '#fbfbfb',
	},
});
