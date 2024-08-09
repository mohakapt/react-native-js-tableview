import { Platform } from 'react-native';
import chroma from 'chroma-js';

export const getColorPalette = (theme) => {
	const accentColor = Platform.OS === 'ios' ? '#007AFF' : '#009688';

	const scale = chroma.scale([accentColor, theme !== 'light' ? 'black' : 'white']);
	const accent = scale(0.1).hex();

	const shades = chroma.scale([accent, 'black']);
	const statusBar = shades(0.3).hex();
	const icons = shades(0.3).desaturate(0.6).hex();

	const light = {
		header: Platform.OS === 'ios' ? '#F7F7F7' : accent,
		headerSeparator: '#A7A7AA',
		headerText: Platform.OS === 'ios' ? '#000000' : '#ffffff',
		headerIcon: '#1F1F1F',
	};

	const dark = {
		header: Platform.OS === 'ios' ? '#1B1B1B' : accent,
		headerSeparator: '#3A3A3A',
		headerText: '#ffffff',
		headerIcon: '#E0E0E0',
	};

	const midnight = {
		header: Platform.OS === 'ios' ? '#121112' : accent,
		headerSeparator: '#313131',
		headerText: '#ffffff',
		headerIcon: '#E0E0E0',
	};

	const themes = { light, dark, midnight };

	const palette = themes[theme];
	palette.accent = accent;
	palette.statusBar = statusBar;
	palette.icons = icons;

	return palette;
};
