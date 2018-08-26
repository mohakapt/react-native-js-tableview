/* @flow */

import { Platform } from 'react-native';
import Color from 'color';

export const COLOR_ACCENT = Platform.OS === 'ios' ? '#007AFF' : '#009688';

export const COLOR_ACCENT_LIGHT = Platform.OS === 'ios' ?
	Color(COLOR_ACCENT).desaturate(0.5).lighten(0.9).hex() :
	Color(COLOR_ACCENT).desaturate(0.8).lighten(2.1).hex();

export const COLOR_ACCENT_DARK = Color(COLOR_ACCENT).darken(0.3).hex();
export const COLOR_ACCENT_DARKER = Color(COLOR_ACCENT).desaturate(0.3).darken(0.3).hex();
