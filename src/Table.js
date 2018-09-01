import * as React from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import Section from './Section';
import { insertProps } from './assets/utilites';
import { COLOR_ACCENT, COLOR_TOUCHABLE } from './assets/colors';

import { tableStyles as styles } from './styles';

Table.propTypes = {
	accentColor: PropTypes.string,
	underlayColor: PropTypes.string,

	style: View.propTypes.style,
	scrollViewStyle: View.propTypes.style,

	children: PropTypes.arrayOf(PropTypes.instanceOf(Section)).isRequired,
	isScrollable: PropTypes.bool,
};

Table.defaultProps = {
	isScrollable: false,
	accentColor: COLOR_ACCENT,
	underlayColor: COLOR_TOUCHABLE,
};

const Table = ({ style, scrollViewStyle, children, isScrollable, accentColor, underlayColor }: Props) => {
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

export default Table;
