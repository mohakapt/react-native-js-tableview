/* @flow */

import * as React from 'react';
import { View, ScrollView } from 'react-native';

import Section from './Section';

import { insertProps } from './assets/utilites';
import { COLOR_ACCENT, COLOR_TOUCHABLE } from './assets/colors';

import { tableStyles as styles } from './styles';

type Props = {
	accentColor?: string,
	underlayColor?: string,

	style?: ?any,
	scrollViewStyle?: ?any,

	children: React.ChildrenArray<React.Element<typeof Section>>,
	isScrollable?: boolean,
}

const Table = ({ style, scrollViewStyle, children, isScrollable, accentColor, underlayColor }: Props) => {
	const renderTable = (): React.Node => {
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

Table.defaultProps = {
	isScrollable: false,
	accentColor: COLOR_ACCENT,
	underlayColor: COLOR_TOUCHABLE,
};

export default Table;
