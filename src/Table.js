import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';

import { COLOR_ACCENT, getColorPalette } from './assets/colors';
import { ThemeProvider } from './ThemeContext';

import { tableStyles as styles } from './styles';

class Table extends Component {
	static propTypes = {
		accentColor: PropTypes.string,
		theme: PropTypes.oneOf(['light', 'dark', 'midnight']),
		blendAccent: PropTypes.bool,
		colorPalette: PropTypes.oneOfType([
			PropTypes.func,
			PropTypes.object,
		]),

		style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
		scrollViewStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),

		children: PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.element),
			PropTypes.element,
		]),
		scrollable: PropTypes.bool,
		disabled: PropTypes.bool,
		mode: PropTypes.oneOf(['grouped', 'inset-grouped']),
	};

	static defaultProps = {
		accentColor: COLOR_ACCENT,
		theme: 'light',
		blendAccent: false,
		scrollable: false,
		disabled: false,
		mode: 'inset-grouped',
	};

	render() {
		const { style, scrollViewStyle, children } = this.props;
		const { scrollable, accentColor, theme, blendAccent, colorPalette, disabled, mode } = this.props;

		let palette = getColorPalette(theme, blendAccent, accentColor);

		if (!!colorPalette) {
			const isFunc = typeof colorPalette === 'function';

			if (isFunc) {
				palette = colorPalette(palette);
			} else {
				palette = colorPalette;
			}
		}

		const renderTable = () => {
			const tableStyle = [styles.table, style];

			if (!scrollable) {
				tableStyle.unshift(styles.container(palette));
			}

			return (
				<View style={tableStyle}>
					{children}
				</View>
			);
		};

		const wrapScrollView = (component) => {
			if (scrollable) {
				return (
					<ScrollView style={[styles.container(palette), scrollViewStyle]}>
						{component}
					</ScrollView>
				);
			} else {
				return component;
			}
		};

		return (
			<ThemeProvider value={{ colorPalette: palette, disabled, mode }}>
				{wrapScrollView(renderTable())}
			</ThemeProvider>
		);
	}
}

export default Table;
