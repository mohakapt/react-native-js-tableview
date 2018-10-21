import * as React from 'react';
import { View, ScrollView, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import { insertProps } from './assets/utilites';
import { COLOR_ACCENT, COLOR_TOUCHABLE } from './assets/colors';

import { tableStyles as styles } from './styles';

const Table = ({ style, scrollViewStyle, children, isScrollable, accentColor, underlayColor, theme, blendAccent }) => {
	const renderTable = () => {
		const tableStyle = [styles.table, style];

		if (!isScrollable) {
			tableStyle.unshift(styles.container(theme, blendAccent, accentColor));
		}

		return (
			<View style={tableStyle}>
				{insertProps(children, { accentColor, underlayColor, theme, blendAccent })}
			</View>
		);
	};

	if (!isScrollable) {
		return renderTable();
	}

	return (
		<ScrollView style={[styles.container(theme, blendAccent, accentColor), scrollViewStyle]}>
			{renderTable()}
		</ScrollView>
	);
};

Table.propTypes = {
	accentColor: PropTypes.string,
	underlayColor: PropTypes.string,
	theme: PropTypes.oneOf(['light', 'dark']),
	blendAccent: PropTypes.bool,

	style: ViewPropTypes.style,
	scrollViewStyle: ViewPropTypes.style,

	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.PropTypes.element,
	]),
	isScrollable: PropTypes.bool,
};

Table.defaultProps = {
	accentColor: COLOR_ACCENT,
	underlayColor: COLOR_TOUCHABLE,
	theme: 'light',
	blendAccent: false,

	isScrollable: false,
};

export default Table;
