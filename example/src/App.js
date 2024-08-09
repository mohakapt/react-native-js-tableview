import { useState } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';

import ThemeContext from './tools/ThemeContext';
import Stack from './tools/NavigationStack';
import MainScreen from './MainScreen';

function App() {
	// possible values; 'light', 'dark', 'midnight'
	const [theme, setTheme] = useState('light');

	return (
		<ThemeContext.Provider value={[theme, setTheme]}>
			<NavigationContainer theme={theme === 'light' ? DefaultTheme : DarkTheme}>
				<Stack.Navigator>
					<Stack.Screen name='Main' component={MainScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</ThemeContext.Provider>
	);
}

export default App;
