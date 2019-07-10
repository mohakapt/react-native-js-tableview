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
		background: Platform.OS === 'ios' ? '#F0EFF5' : '#F9F9F9',
		section: '#fff',
		separator: Platform.OS === 'ios' ? '#C8C7CD' : '#EBEBEB',
		header: Platform.OS === 'ios' ? '#6D6D72' : accent,
		footer: Platform.OS === 'ios' ? '#6D6D72' : '#575759',
		accessory: Platform.OS === 'ios' ? '#b2b2b4' : '#9c9ca0',
		title: Platform.OS === 'ios' ? '#000' : '#1a1a1a',
		subtitle: '#8E8E93',
		disabled: '#b5b5b5',
		progress: Platform.OS === 'ios' ? '#373737' : accent,

		underlay: '#f2f2f2',
		ripple: 'rgba(0,0,0,.2)',
	};

	const dark = {
		background: Platform.OS === 'ios' ? '#1A1A1A' : '#1f1f1f',
		section: Platform.OS === 'ios' ? '#212121' : '#2B2B2B',
		separator: Platform.OS === 'ios' ? '#3E3E40' : '#5E5E5E',
		header: Platform.OS === 'ios' ? '#8F8F95' : accent,
		footer: Platform.OS === 'ios' ? '#8F8F95' : '#9f9fa6',
		accessory: Platform.OS === 'ios' ? '#969696' : '#9c9ca0',
		title: Platform.OS === 'ios' ? 'white' : '#e6e6e6',
		subtitle: '#8E8E93',       // <-
		disabled: '#4b4b4b',
		progress: Platform.OS === 'ios' ? '#c8c8c8' : accent,

		underlay: '#2b2b2b',
		ripple: 'rgba(255,255,255,.2)',
	};

	const palette = theme === 'dark' ? dark : light;
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
