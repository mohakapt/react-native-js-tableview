import { Platform } from 'react-native';
import chroma from 'chroma-js';

export const COLOR_ACCENT = '#4DB6AC';

export const blendColors = (theme, color, accent) => {
	const alteredAccent = chroma(accent).set('hsv.s', 0.03).set('hsv.v', 1).hex();
	const blendMode = theme === 'dark' ? 'burn' : 'multiply';

	return chroma.blend(color, alteredAccent, blendMode).hex();
};

export const getColorPalette = (theme, blend, accent) => {
	const light = {
		background: Platform.OS === 'ios' ? '#F2F2F7' : '#F9F9F9',
		section: '#fff',
		separator: Platform.OS === 'ios' ? '#C6C6C6' : '#d7d7d7',
		header: Platform.OS === 'ios' ? '#85858B' : accent,
		footer: Platform.OS === 'ios' ? '#85858B' : '#575759',
		accessory: Platform.OS === 'ios' ? '#C4C4C7' : '#9c9ca0',
		title: Platform.OS === 'ios' ? '#000' : '#1a1a1a',
		subtitle: '#8A8A8E',
		disabled: '#b5b5b5',
		progress: Platform.OS === 'ios' ? '#373737' : accent,

		underlay: '#E5E5EA',
		ripple: 'rgba(0,0,0,.2)',
	};

	const dark = {
		background: Platform.OS === 'ios' ? '#1A1A1A' : '#1f1f1f',
		section: Platform.OS === 'ios' ? '#212121' : '#2B2B2B',
		separator: Platform.OS === 'ios' ? '#404040' : '#585858',
		header: Platform.OS === 'ios' ? '#8F8F95' : accent,
		footer: Platform.OS === 'ios' ? '#8F8F95' : '#9f9fa6',
		accessory: Platform.OS === 'ios' ? '#969696' : '#9c9ca0',
		title: Platform.OS === 'ios' ? 'white' : '#e6e6e6',
		subtitle: '#8E8E93',
		disabled: '#4b4b4b',
		progress: Platform.OS === 'ios' ? '#c8c8c8' : accent,

		underlay: '#2b2b2b',
		ripple: 'rgba(255,255,255,.2)',
	};

	const midnight = {
		background: Platform.OS === 'ios' ? '#000000' : '#121212',
		section: Platform.OS === 'ios' ? '#1C1C1E' : '#1E1E1E',
		separator: Platform.OS === 'ios' ? '#3E3E41' : '#4b4b4b',
		header: Platform.OS === 'ios' ? '#8D8D93' : accent,
		footer: Platform.OS === 'ios' ? '#8D8D93' : '#a2a2a2',
		accessory: Platform.OS === 'ios' ? '#5A5A5F' : '#666666',
		title: Platform.OS === 'ios' ? 'white' : '#E1E1E1',
		subtitle: '#98989F',
		disabled: '#4b4b4b',
		progress: Platform.OS === 'ios' ? '#c8c8c8' : accent,

		underlay: '#2C2C2E',
		ripple: 'rgba(255,255,255,.2)',
	};

	const themes = {
		light,
		dark,
		midnight,
	};

	const palette = themes[theme];
	palette.theme = theme;
	palette.blend = blend;
	palette.accent = accent;

	if (blend) {
		palette.background = blendColors(theme, palette.background, accent);
		palette.section = blendColors(theme, palette.section, accent);
		palette.underlay = blendColors(theme, palette.underlay, accent);
	}

	return palette;
};
