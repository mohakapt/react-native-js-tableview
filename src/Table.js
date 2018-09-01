import * as React from 'react';
import { View, ScrollView, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import { insertProps } from './assets/utilites';
import { COLOR_ACCENT, COLOR_TOUCHABLE } from './assets/colors';

import { tableStyles as styles } from './styles';

const Table = ({ style, scrollViewStyle, children, isScrollable, accentColor, underlayColor }) => {
	const renderTable = () => {
		const tableStyle = [styles.table, style];

		if (!isScrollable) {
			tableStyle.unshift(styles.container);
		}

		return (
			<View style={tableStyle}>
				{insertProps(children, { accentColor, underlayColor })}
			</View>
		);
	};

	if (!isScrollable) {
		return renderTable();
	}

	return (
		<ScrollView style={[styles.container, scrollViewStyle]}>
			{renderTable()}
		</ScrollView>
	);
};

Table.propTypes = {
	accentColor: PropTypes.string,
	underlayColor: PropTypes.string,

	style: ViewPropTypes.style,
	scrollViewStyle: ViewPropTypes.style,

	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.PropTypes.element,
	]).isRequired,
	isScrollable: PropTypes.bool,
};

Table.defaultProps = {
	isScrollable: false,
	accentColor: COLOR_ACCENT,
	underlayColor: COLOR_TOUCHABLE,
};

export default Table;
