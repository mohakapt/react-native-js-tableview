/* @flow */

import * as React from 'react';
import {
	View,
	Platform,
	TouchableHighlight,
	TouchableNativeFeedback,
} from 'react-native';

import { COLOR_ACCENT_LIGHT } from '../../config/colors';

export type Props = {
	children: React.Node,
	style?: any,

	isEnabled?: boolean,
	onPress?: () => void | false,
	underlayColor?: string,
};

const Cell = ({ children, style, isEnabled, onPress, underlayColor }: Props) => {
	const renderCell = (): React.Node => (
		<View style={style}>
			{children}
		</View>
	);

	if (!onPress) {
		return renderCell();
	}

	const Touchable = Platform.OS === 'ios' ? TouchableHighlight : TouchableNativeFeedback;
	const touchableProps = Platform.select({
		ios: {
			underlayColor,
		},
		android: {},
	});

	return (
		<Touchable {...touchableProps} disabled={!isEnabled} onPress={onPress}>
			{renderCell()}
		</Touchable>
	);
};

Cell.defaultProps = {
	isEnabled: true,
	underlayColor: COLOR_ACCENT_LIGHT,
};

export default Cell;
