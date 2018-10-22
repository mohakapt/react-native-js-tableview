import * as React from 'react';
import {
	View,
	TouchableNativeFeedback,
	TouchableOpacity,
	Platform,
} from 'react-native';
import PropTypes from 'prop-types';

import Cell from './Cell';
import Icon from './assets/icons';
import { COLOR_ACCESSORY } from './assets/colors';

import { accessoryCellStyles as styles } from './styles';

const AccessoryCell = (props) => {
	let { accessoryTint } = props;
	const {
		style,

		accessory, accessoryComponent,
		hideAccessorySeparator,
		onAccessoryPress,

		theme, accentColor, disabled,
		children,

		...remainingProps
	} = props;

	const getAccessory = () => {
		const reVal = [];

		if (!hideAccessorySeparator && Platform.OS === 'android') {
			const separator = <View key='accessorySeparator' style={styles.separator(theme)} />;
			reVal.push(separator);
		}

		let component;
		if (accessoryComponent) {
			component = accessoryComponent;
		} else if (accessory) {
			if (!accessoryTint) {
				accessoryTint = accessory === 'disclosure' ? COLOR_ACCESSORY : accentColor;
			}

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
					<Touchable key='touchableAccessory' disabled={disabled} onPress={onAccessoryPress}>
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
	return (
		<Cell
			style={[style, styles.cell]}
			theme={theme}
			accentColor={accentColor}
			disabled={disabled}
			{...remainingProps}>

			{children}
			{getAccessory()}
		</Cell>
	);
};

AccessoryCell.propTypes = Object.assign({
	accessory: PropTypes.oneOf(['', 'disclosure', 'details', 'checkmark']),
	accessoryTint: PropTypes.string,
	accessoryComponent: PropTypes.element,
	hideAccessorySeparator: PropTypes.bool,

	onAccessoryPress: PropTypes.func,
}, Cell.propTypes);

AccessoryCell.defaultProps = {
	hideAccessorySeparator: false,
	disabled: false,
};

export default AccessoryCell;
