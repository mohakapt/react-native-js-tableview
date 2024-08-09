import { useState, useMemo } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';

import { getColorPalette } from './assets/colors';
import ThemeContext from './tools/ThemeContext';
import Stack from './tools/NavigationStack';
import MainScreen from './MainScreen';

const getTheme = (theme) => {
	const palette = getColorPalette(theme);
	const parent = theme === 'light' ? DefaultTheme : DarkTheme;

	return {
		...parent,
		colors: {
			...parent.colors,
			primary: palette.accent,
			card: palette.header,
			text: palette.headerText,
			border: palette.headerSeparator,
		},
	};
};

const lightTheme = getTheme('light');
const darkTheme = getTheme('dark');
const midnightTheme = getTheme('midnight');

function App() {
	// possible values; 'light', 'dark', 'midnight'
	const [theme, setTheme] = useState('light');
	const navigationTheme = useMemo(() => {
		switch (theme) {
			case 'dark':
				return darkTheme;
			case 'midnight':
				return midnightTheme;
			default:
				return lightTheme;
		}
	}, [theme]);

	return (
		<ThemeContext.Provider value={[theme, setTheme]}>
			<NavigationContainer theme={navigationTheme}>
				<Stack.Navigator>
					<Stack.Screen name='Main' component={MainScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</ThemeContext.Provider>
	);
}

export default App;
