import * as React from 'react';
import { View, ScrollView, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import { insertProps } from './assets/utilites';
import { COLOR_ACCENT, getColorPalette } from './assets/colors';

import { tableStyles as styles } from './styles';

const Table = ({ style, scrollViewStyle, children, scrollable, accentColor, theme, blendAccent, disabled }) => {
	const colorPalette = getColorPalette(theme, blendAccent, accentColor);

	const renderTable = () => {
		const tableStyle = [styles.table, style];

		if (!scrollable) {
			tableStyle.unshift(styles.container(theme, blendAccent, accentColor));
		}

		return (
			<View style={tableStyle}>
				{insertProps(children, { colorPalette, disabled })}
			</View>
		);
	};

	if (!scrollable) {
		return renderTable();
	}

	return (
		<ScrollView style={[styles.container(colorPalette), scrollViewStyle]}>
			{renderTable()}
		</ScrollView>
	);
};

Table.propTypes = {
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

Table.defaultProps = {
	accentColor: COLOR_ACCENT,
	theme: 'light',
	blendAccent: false,
	disabled: false,

	scrollable: false,
};

export default Table;
