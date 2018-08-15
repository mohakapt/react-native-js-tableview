/* @flow */

import * as React from 'react';
import {
	View,
	Platform,
	TouchableHighlight,
	TouchableNativeFeedback,
} from 'react-native';
import { TOUCHABLE_COLOR } from './assets/colors';

export type Props = {
	children: React.Node,
	style?: any,

	isEnabled?: boolean,
	onPress?: () => void | false,
	onLongPress?: () => | false,
	underlayColor?: string,
};

const Cell = ({ children, style, isEnabled, onPress, onLongPress, underlayColor }: Props) => {
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
		<Touchable {...touchableProps} disabled={!isEnabled} onPress={onPress} onLongPress={onLongPress}>
			{renderCell()}
		</Touchable>
	);
};

Cell.defaultProps = {
	isEnabled: true,
	underlayColor: TOUCHABLE_COLOR,
};

export default Cell;
