import React, { useState, useEffect, useMemo } from 'react';
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
import { useTheme } from './tools/ThemeContext';
import NavBarItem from './NavBarItem';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
	UIManager.setLayoutAnimationEnabledExperimental(true);
}

const themes = ['dark', 'midnight', 'light'];
const adamSmithPhoto = 'https://static1.squarespace.com/static/56eddde762cd9413e151ac92/t/56f6e29eb2d7c7b358cf8dad/1459020450333/';
const adamSmithBooks = ['The Wealth of Nations', 'The Theory of Moral Sentiments', 'Lectures on Jurisprudence', 'Essays on Philosophical Subjects', 'The Essential Adam Smith'];

export default ({ navigation }) => {
	const [theme, setTheme] = useTheme();
	const [enabledRecommendations, setEnabledRecommendations] = useState(false);
	const [selectedBook, setSelectedBook] = useState(0);

	const palette = useMemo(() => getColorPalette(theme), [theme]);

	useEffect(() => {
		navigation.setOptions({
			title: 'Profile',

			headerRight: () => <NavBarItem
				tintColor={palette.headerIcon}
				icon='theme'
				onPress={onToggleThemeTouched} />,
		});
	}, [navigation, palette]);

	const onToggleThemeTouched = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

		const oldIndex = themes.findIndex(x => x === theme);
		const newIndex = (oldIndex + 1) % themes.length;
		const newTheme = themes[newIndex];

		setTheme(newTheme);
	};

	const onBioTouched = () => {
	};

	const onContactTouched = (contact) => {
		const messages = {
			phone: 'Sorry, Adam Smith is not available right now. 😀',
			email: 'Really!, The man probably haven\'t even thought about sending and receiving messages that fast.',
		};

		alert(messages[contact]);
	};

	const onContactLongTouched = (contact) => {
		const messages = {
			phone: 'Adam Smith\'s phone number is copied',
			email: 'Adam Smith\'s email address is copied',
		};

		alert(messages[contact]);
	};

	const onWorksTouched = (work) => {
	};

	const onEnableRecommendationsSwitched = () => {
		setEnabledRecommendations((current) => !current);
	};

	const onReminderTouched = (index) => {
		setSelectedBook(index);
	};

	const onLogoutTouched = () => {

	};

	const getIcon = (name, tint) => (
		<Icon name={name} tintColor={tint || palette.icons} />
	);

	const getBooks = () => adamSmithBooks.map((title, index) =>
		<StaticCell
			key={index}
			title={title}
			disabled={!enabledRecommendations}
			accessory={selectedBook === index ? 'checkmark' : ''}
			hideAccessorySeparator
			onPress={() => onReminderTouched(index)} />);

	return (
		<>
			<StatusBar
				backgroundColor={palette.statusBar}
				barStyle={Platform.OS === 'android' || theme !== 'light' ? 'light-content' : 'dark-content'} />

			<Table
				accentColor={palette.accent}
				theme={theme}
				blendAccent={false}
				style={styles.container}
				scrollable={true}>

				<Section>
					<BioCell
						title='Adam Smith'
						subtitle='Scottish economist, philosopher, and author.'
						photoSource={{ uri: adamSmithPhoto }}
						accessory='details'
						onAccessoryPress={onBioTouched}
						onPress={onBioTouched} />

					<KeyValueCell
						style={styles.email}
						title='+1-541-754-3010'
						iconComponent={getIcon('phone')}
						accessory='disclosure' loading={true}
						onPress={() => onContactTouched('phone')}
						onLongPress={() => onContactLongTouched('phone')} />

					<KeyValueCell
						style={styles.email}
						title='a.smith@gmail.com'
						iconComponent={getIcon('email')}
						accessory='disclosure'
						onPress={() => onContactTouched('email')}
						onLongPress={() => onContactLongTouched('email')} />
				</Section>

				<Section
					header='General'
					footer='All materials about Adam Smith are brought to you from wikipedia.org'
					separatorInsetLeft={54}>

					<KeyValueCell
						title='Books'
						value='3 books'
						iconComponent={getIcon('book')}
						accessory='disclosure'
						customAction='www.google.com'
						customActionType='openUrl'
						customActionTrigger='onPress'
						onPress={() => onWorksTouched('books')} />

					<KeyValueCell
						title='Articles'
						value='238 articles'
						iconComponent={getIcon('article')}
						accessory='disclosure'
						onPress={() => onWorksTouched('articles')} />

					<KeyValueCell
						title='Projects'
						value='8 projects'
						iconComponent={getIcon('project')}
						accessory='disclosure'
						onPress={() => onWorksTouched('projects')} />
				</Section>

				<Section header='Select Your favorite book:'>
					<SwitchCell
						title='Enable Recommendations'
						value={enabledRecommendations}
						onSwitch={onEnableRecommendationsSwitched}
					/>

					{getBooks()}
				</Section>

				<Section>
					<TouchableCell
						title='Log Out'
						accentColor={'#B71C1C'}
						onPress={onLogoutTouched} />
				</Section>
			</Table>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginBottom: 30,
	},
	email: {
		//backgroundColor: '#fbfbfb',
	},
});

