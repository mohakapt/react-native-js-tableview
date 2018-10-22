import * as React from 'react';
import { View, ScrollView, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import { insertProps } from './assets/utilites';
import { COLOR_ACCENT } from './assets/colors';

import { tableStyles as styles } from './styles';

const Table = ({ style, scrollViewStyle, children, isScrollable, accentColor, theme, blendAccent, disabled }) => {
	const renderTable = () => {
		const tableStyle = [styles.table, style];

		if (!isScrollable) {
			tableStyle.unshift(styles.container(theme, blendAccent, accentColor));
		}

		return (
			<View style={tableStyle}>
				{insertProps(children, { accentColor, theme, blendAccent, disabled })}
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
	theme: PropTypes.oneOf(['light', 'dark']),
	blendAccent: PropTypes.bool,
	disabled: PropTypes.bool,

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
	theme: 'light',
	blendAccent: false,
	disabled: false,

	isScrollable: false,
};

export default Table;
