/* @flow */

import Color from 'color';

export const COLOR_ACCENT = '#009688';

export const COLOR_ACCENT_LIGHT = Color(COLOR_ACCENT).desaturate(0.8).lighten(2.1).hex();
export const COLOR_ACCENT_DARK = Color(COLOR_ACCENT).darken(0.3).hex();
export const COLOR_ACCENT_DARKER = Color(COLOR_ACCENT).desaturate(0.3).darken(0.3).hex();
