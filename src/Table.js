/* @flow */

import * as React from 'react';
import { View } from 'react-native';
import Section from './Section';

import { tableStyles as styles } from './styles';

type Props = {
	style?: any,
	children: React.ChildrenArray<React.Element<typeof Section>>,
}

const Table = ({ children, style }: Props) => (
	<View style={[styles.container, style]}>
		{children}
	</View>
);

export default Table;
