import React, { Component } from 'react';
import {
	ActivityIndicator,
	Platform,
	TouchableNativeFeedback,
	TouchableOpacity,
	TouchableHighlight,
	View,
} from 'react-native';
import PropTypes from 'prop-types';

import Cell from './Cell';
import Icon from './assets/icons';
import { ThemeContext } from './ThemeContext';

import { accessoryCellStyles as styles } from './styles';

class AccessoryCell extends Component {
	static contextType = ThemeContext;

	static propTypes = Object.assign({
		accessory: PropTypes.oneOf(['', 'disclosure', 'details', 'checkmark']),
		accessoryComponent: PropTypes.element,
		hideAccessorySeparator: PropTypes.bool,
		loading: PropTypes.bool,

		onAccessoryPress: PropTypes.func,
	}, Cell.propTypes);

	static defaultProps = {
		hideAccessorySeparator: false,
	};


	render() {
		const {
			style, children,

			accessory, accessoryComponent,
			hideAccessorySeparator, loading,
			onAccessoryPress,

			...remainingProps
		} = this.props;
		const { colorPalette } = this.context;
		const disabled = this.props.disabled === undefined ? this.context.disabled : this.props.disabled;

		const renderAccessory = () => {
			const reVal = [];

			if (!hideAccessorySeparator && Platform.OS !== 'ios') {
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
					const Touchable = Platform.select({
						ios: TouchableOpacity,
						android: TouchableNativeFeedback,
						default: TouchableHighlight,
					});
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
				disabled={disabled}
				{...remainingProps}>

				{children}
				{renderAccessory()}
			</Cell>
		);
	}
}

export default AccessoryCell;
