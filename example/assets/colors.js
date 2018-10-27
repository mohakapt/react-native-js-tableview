/* @flow */

import { Platform } from 'react-native';
import chroma from 'chroma-js';

export const getColorPalette = (theme) => {
	const accentColor = Platform.OS === 'ios' ? '#007AFF' : '#009688';

	const scale = chroma.scale([accentColor, theme === 'dark' ? 'white' : 'black']);
	const accent = scale(0.1).hex();

	const shades = chroma.scale([accent, 'black']);
	const statusBar = shades(0.3).hex();
	const icons = shades(0.3).desaturate(0.6).hex();

	return {
		accent,
		statusBar,
		icons,

		header: Platform.select({ android: accent, ios: theme === 'dark' ? '#1B1B1B' : '#F7F7F7' }),
		headerSeparator: theme === 'dark' ? '#3A3A3A' : '#A7A7AA',
		headerText: Platform.OS === 'android' || theme === 'dark' ? 'white' : 'black',
		headerIcon: theme === 'dark' ? '#E0E0E0' : '#1F1F1F',
	};
};
