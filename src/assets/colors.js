import { Platform } from 'react-native';
import chroma from 'chroma-js';

export const COLOR_ACCENT = '#4DB6AC';
export const COLOR_TOUCHABLE = '#F5FFFE';

export const COLOR_TITLE = '#253545';
export const COLOR_DISABLED = '#b5b5b5';
export const COLOR_SUBTITLE = '#8E8E93';
export const COLOR_SEPARATOR = Platform.OS === 'ios' ? '#C8C7CD' : '#EBEBEB';
export const COLOR_ACCESSORY = Platform.OS === 'ios' ? '#D1D1D6' : '#9c9ca0';

export const blendColors = (theme, color, accent) => {
	const alteredAccent = chroma(accent).set('hsv.s', 0.03).set('hsv.v', 1).hex();
	const blendMode = theme === 'dark' ? 'burn' : 'multiply';

	return chroma.blend(color, alteredAccent, blendMode).hex();
};

export const getColorBackground = (theme, blend, accent) => {
	const backgroundLight = Platform.OS === 'ios' ? '#F0EFF5' : '#F9F9F9';
	const backgroundDark = Platform.OS === 'ios' ? '#1A1A1A' : '#242424';

	const background = theme === 'dark' ? backgroundDark : backgroundLight;
	if (!blend) {
		return background;
	}

	return blendColors(theme, background, accent);
};

export const getColorSection = (theme, blend, accent) => {
	const sectionLight = '#fff';
	const sectionDark = Platform.OS === 'ios' ? '#212121' : '#2B2B2B';

	const section = theme === 'dark' ? sectionDark : sectionLight;
	if (!blend) {
		return section;
	}

	return blendColors(theme, section, accent);
};

export const getColorSeparator = (theme) => {
	const separatorLight = Platform.OS === 'ios' ? '#C8C7CD' : '#EBEBEB';
	const separatorDark = Platform.OS === 'ios' ? '#3E3E40' : '#5E5E5E';

	return theme === 'dark' ? separatorDark : separatorLight;
};

export const getColorHeader = (theme, accent) => {
	const headerLight = Platform.OS === 'ios' ? '#6D6D72' : accent;
	const headerDark = Platform.OS === 'ios' ? '#8F8F95' : accent;

	return theme === 'dark' ? headerDark : headerLight;
};

export const getColorFooter = (theme) => {
	const headerLight = '#6D6D72';
	const headerDark = '#8F8F95';

	return theme === 'dark' ? headerDark : headerLight;
};

export const getColorTitle = (theme) => {
	const titleLight = Platform.OS === 'ios' ? 'black' : '#757575';
	const titleDark = Platform.OS === 'ios' ? 'white' : '#8A8A8A';

	return theme === 'dark' ? titleDark : titleLight;
};
