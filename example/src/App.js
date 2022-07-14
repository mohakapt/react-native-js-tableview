/* @flow */

import React, { Component } from 'react';
import { LayoutAnimation, Platform, StatusBar, StyleSheet, UIManager } from 'react-native';
import Table, {
	BioCell,
	KeyValueCell,
	Section,
	StaticCell,
	SwitchCell,
	TouchableCell,
} from 'react-native-js-tableview';
import { getColorPalette } from './assets/colors';
import Icon from './assets/icons';
import NavBarItem from './NavBarItem';

type Props = {
	navigation: any,
};

type State = {
	theme: 'light' | 'dark' | 'midnight',
	enabledRecommendations: boolean,
	selectedBook: number,
};

export default class App extends Component<Props, State> {
	static navigationOptions = ({ navigation }) => {
		const { params = {} } = navigation.state;
		const { theme = 'light', onToggleThemeTouched } = params;
		const palette = getColorPalette(theme);

		return {
			title: 'Profile',
			headerRight: <NavBarItem
				tintColor={palette.headerIcon}
				icon='theme'
				onPress={onToggleThemeTouched} />,

			headerTintColor: palette.headerText,
			headerStyle: {
				backgroundColor: palette.header,
				...Platform.select({ ios: { borderBottomColor: palette.headerSeparator } }),
			},
		};
	};

	constructor(props) {
		super(props);

		if (Platform.OS === 'android')
			UIManager.setLayoutAnimationEnabledExperimental &&
			UIManager.setLayoutAnimationEnabledExperimental(true);

		const theme = 'light';
		this.state = { theme, enabledRecommendations: false, selectedBook: 0 };
		this.props.navigation.setParams({ theme, onToggleThemeTouched: this.onToggleThemeTouched });
	}

	onToggleThemeTouched = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

		const themes = ['dark', 'midnight', 'light'];
		const oldIndex = themes.findIndex(x => x === this.state.theme);
		const newIndex = (oldIndex + 1) % themes.length;
		const theme = themes[newIndex];

		this.setState({ theme });
		this.props.navigation.setParams({ theme, onToggleThemeTouched: this.onToggleThemeTouched });
	};

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

	onEnableRecommendationsSwitched = () => {
		const { enabledRecommendations } = this.state;
		this.setState({ enabledRecommendations: !enabledRecommendations });
	};

	onReminderTouched = (index: number) => {
		this.setState({ selectedBook: index });
	};

	onLogoutTouched = () => {

	};

	render() {
		const { theme, enabledRecommendations } = this.state;
		const palette = getColorPalette(theme);

		const adamSmithPhoto = 'https://static1.squarespace.com/static/56eddde762cd9413e151ac92/t/56f6e29eb2d7c7b358cf8dad/1459020450333/';
		const getIcon = (name: string, tint: ?string): React.Node => (
			<Icon name={name} tintColor={tint || palette.icons} />
		);
		const getBooks = (): Array<React.Node> =>
			['The Wealth of Nations', 'The Theory of Moral Sentiments', 'Lectures on Jurisprudence', 'Essays on Philosophical Subjects', 'The Essential Adam Smith']
				.map((title: string, index: number) =>
					<StaticCell
						key={index}
						title={title}
						disabled={!this.state.enabledRecommendations}
						accessory={this.state.selectedBook === index ? 'checkmark' : ''}
						hideAccessorySeparator
						onPress={this.onReminderTouched.bind(this, index)} />);


		let generalHeader = 'General';
		const generalFooter = 'All materials about Adam Smith are brought to you from wikipedia.org';
		if (Platform.OS === 'ios') {
			generalHeader = generalHeader.toUpperCase();
		}

		return (
			<>
				<StatusBar
					backgroundColor={palette.statusBar}
					barStyle={Platform.OS === 'android' || theme !== 'light' ? 'light-content' : 'dark-content'} />

				<Table
					accentColor={palette.accent}
					theme={theme}
					blendAccent={false}
					mode={Platform.OS === 'ios' ? 'grouped' : 'inset-grouped'}
					style={styles.container}
					scrollable={true}>

					<Section>
						<BioCell
							title='Adam Smith'
							subtitle='Scottish economist, philosopher, and author.'
							photoSource={{ uri: adamSmithPhoto }}
							accessory='details'
							onPress={this.onBioTouched} />

						<KeyValueCell
							style={styles.email}
							title='+1-541-754-3010'
							iconComponent={getIcon('phone')}
							accessory='disclosure' loading={true}
							onPress={this.onContactTouched.bind(this, 'phone')}
							onLongPress={this.onContactLongTouched.bind(this, 'phone')} />

						<KeyValueCell
							style={styles.email}
							title='a.smith@gmail.com'
							iconComponent={getIcon('email')}
							accessory='disclosure'
							onPress={this.onContactTouched.bind(this, 'email')}
							onLongPress={this.onContactLongTouched.bind(this, 'email')} />
					</Section>

					<Section header={generalHeader} footer={generalFooter} separatorInsetLeft={54}>
						<KeyValueCell
							title='Books'
							value='3 books'
							iconComponent={getIcon('book')}
							accessory='disclosure'
							customAction='www.google.com'
							customActionType='openUrl'
							customActionTrigger='onPress'
							onPress={this.onWorksTouched.bind(this, 'books')} />

						<KeyValueCell
							title='Articles'
							value='238 articles'
							iconComponent={getIcon('article')}
							accessory='disclosure'
							onPress={this.onWorksTouched.bind(this, 'books')} />

						<KeyValueCell
							title='Projects'
							value='8 projects'
							iconComponent={getIcon('project')}
							accessory='disclosure'
							onPress={this.onWorksTouched.bind(this, 'books')} />
					</Section>

					<Section header='Select Your favorite book:'>
						<SwitchCell
							title='Enable Recommendations'
							value={enabledRecommendations}
							onSwitch={this.onEnableRecommendationsSwitched}
						/>

						{getBooks()}
					</Section>

					<Section>
						<TouchableCell
							title='Log Out'
							accentColor={'#B71C1C'}
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
