/* @flow */

import * as React from 'react';
import { View, ScrollView } from 'react-native';

import Section from './Section';

import { tableStyles as styles } from './styles';
import { ACCENT_COLOR } from './assets/colors';

type Props = {
	style?: any,
	scrollViewStyle?: any,
	children: React.ChildrenArray<React.Element<typeof Section>>,

	isScrollable?: boolean,
	accentColor?: string,
	underlayColor?: string,
}

const Table = ({ style, scrollViewStyle, children, isScrollable, accentColor, underlayColor }: Props) => {
	const renderTable = (): React.Node => {
		const tableStyle = [style];

		if (!isScrollable) {
			tableStyle.unshift(styles.container);
		}

		return (
			<View style={tableStyle}>
				{React.Children.map(children, child =>
					React.cloneElement(child, { accentColor, underlayColor }))}
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
	accentColor: ACCENT_COLOR,
};

export default Table;
