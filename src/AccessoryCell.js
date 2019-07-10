import * as React from 'react';
import { ActivityIndicator, Platform, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import Cell from './Cell';
import Icon from './assets/icons';

import { accessoryCellStyles as styles } from './styles';

const AccessoryCell = (props) => {
	const {
		style,

		accessory, accessoryComponent,
		hideAccessorySeparator, loading,
		onAccessoryPress,

		colorPalette, disabled,
		children,

		...remainingProps
	} = props;

	const getAccessory = () => {
		const reVal = [];

		if (!hideAccessorySeparator && Platform.OS === 'android') {
			const separator = <View key='accessorySeparator' style={styles.separator(colorPalette)} />;
			reVal.push(separator);
		}

		let component;
		if (loading) {
			component = <ActivityIndicator animating={true} color={colorPalette.progress} size='small' />;
		} else if (accessoryComponent) {
			component = accessoryComponent;
		} else if (accessory) {
			component = <Icon name={accessory} style={styles.accessory(accessory, colorPalette, disabled)} />;
		}

		if (component) {
			const view = (
				<View key='accessoryContainer' style={styles.container}>
					{component}
				</View>
			);

			if (onAccessoryPress) {
				const Touchable = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;
				const touchableProps = Platform.select({
					ios: {
						underlayColor: colorPalette.underlay,
					},
					android: {
						background: TouchableNativeFeedback.Ripple(colorPalette.ripple, false),
					},
				});
				const touchable = (
					<Touchable
						{...touchableProps}
						key='touchableAccessory'
						disabled={disabled}
						onPress={onAccessoryPress}>

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
			colorPalette={colorPalette}
			disabled={disabled}
			{...remainingProps}>

			{children}
			{getAccessory()}
		</Cell>
	);
};

AccessoryCell.propTypes = Object.assign({
	accessory: PropTypes.oneOf(['', 'disclosure', 'details', 'checkmark']),
	accessoryComponent: PropTypes.element,
	hideAccessorySeparator: PropTypes.bool,
	loading: PropTypes.bool,

	onAccessoryPress: PropTypes.func,
}, Cell.propTypes);

AccessoryCell.defaultProps = {
	hideAccessorySeparator: false,
};

export default AccessoryCell;
