/* @flow */

import * as React from 'react';
import { View, ScrollView } from 'react-native';

import Section from './Section';

import { tableStyles as styles } from './styles';

type Props = {
	style?: any,
	scrollViewStyle?: any,
	children: React.ChildrenArray<React.Element<typeof Section>>,

	isScrollable: boolean,
}

const Table = ({ style, scrollViewStyle, children, isScrollable }: Props) => {
	const renderTable = (): React.Node => {
		const tableStyle = [style];

		if (!isScrollable) {
			tableStyle.unshift(styles.container);
		}

		return (
			<View style={tableStyle}>
				{children}
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
};

export default Table;
