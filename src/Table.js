import * as React from 'react';
import { ScrollView, View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import { COLOR_ACCENT, getColorPalette } from './assets/colors';
import { ThemeProvider } from './ThemeContext';

import { tableStyles as styles } from './styles';

class Table extends React.Component {
	static propTypes = {
		accentColor: PropTypes.string,
		theme: PropTypes.oneOf(['light', 'dark']),
		blendAccent: PropTypes.bool,
		disabled: PropTypes.bool,

		style: ViewPropTypes.style,
		scrollViewStyle: ViewPropTypes.style,

		children: PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.element),
			PropTypes.PropTypes.element,
		]),
		scrollable: PropTypes.bool,
	};

	static defaultProps = {
		accentColor: COLOR_ACCENT,
		theme: 'light',
		blendAccent: false,
		disabled: false,

		scrollable: false,
	};

	render() {
		const { style, scrollViewStyle, children } = this.props;
		const { scrollable, accentColor, theme, blendAccent, disabled } = this.props;

		const colorPalette = getColorPalette(theme, blendAccent, accentColor);

		const renderTable = () => {
			const tableStyle = [styles.table, style];

			if (!scrollable) {
				tableStyle.unshift(styles.container(theme, blendAccent, accentColor));
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
					<ScrollView style={[styles.container(colorPalette), scrollViewStyle]}>
						{component}
					</ScrollView>
				);
			} else {
				return component;
			}
		};

		return (
			<ThemeProvider value={{ colorPalette, disabled }}>
				{wrapScrollView(renderTable())}
			</ThemeProvider>
		);
	}
}

export default Table;
