/* @flow */

import * as React from 'react';
import {
	View,
	TouchableNativeFeedback,
	TouchableOpacity,
	Platform,
} from 'react-native';

import Cell from './Cell';
import Icon from './assets/icons';
import { ACCENT_COLOR, SEPARATOR_COLOR } from './assets/colors';

import type { Props as CellProps } from './Cell';
import { accessoryCellStyles as styles } from './styles';

export type Props = {
	...CellProps,

	accessory?: 'disclosure' | 'detail' | 'checkmark',
	accessoryTint?: string,
	accessoryComponent?: React.Node,
	hideAccessorySeparator?: boolean,
	accessorySeparatorColor?: string,

	onAccessoryPress?: () => void,
};

const AccessoryCell = (props: Props) => {
	const getAccessory = (): React.Node => {
		const {
			accessory,
			accessoryTint,
			accessoryComponent,
			hideAccessorySeparator,
			accessorySeparatorColor,
			isEnabled,
			onAccessoryPress,
		} = props;

		const reVal = [];

		if (!hideAccessorySeparator && Platform.OS === 'android') {
			const style = { backgroundColor: accessorySeparatorColor };
			const separator =
				<View key='accessorySeparator' style={[styles.separator, style]} />;
			reVal.push(separator);
		}

		let component;
		if (accessoryComponent) {
			component = accessoryComponent;
		} else if (accessory) {
			component = <Icon name={accessory} tintColor={accessoryTint} />;
		}

		if (component) {
			const view = (
				<View key='accessoryContainer' style={styles.container}>
					{component}
				</View>
			);

			if (onAccessoryPress) {
				const Touchable = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;
				const touchable = (
					<Touchable key='touchableAccessory' disabled={!isEnabled} onPress={onAccessoryPress}>
						{view}
					</Touchable>
				);
				reVal.push(touchable);
			} else {
				reVal.push(view);
			}

			return reVal;
		}
	};

	const { children, style, isEnabled, onPress } = props;
	return (
		<Cell style={[style, styles.cell]} isEnabled={isEnabled} onPress={onPress}>
			{children}
			{getAccessory()}
		</Cell>
	);
};

AccessoryCell.defaultProps = {
	accessoryTint: ACCENT_COLOR,
	hideAccessorySeparator: false,
	accessorySeparatorColor: SEPARATOR_COLOR,
	isEnabled: true,
};

export default AccessoryCell;
