import React, { Component } from 'react';
import { Switch, Text, View, Platform } from 'react-native';
import PropTypes from 'prop-types';

import AccessoryCell from './AccessoryCell';
import { ThemeContext } from './ThemeContext';

import { switchCellStyles as styles } from './styles';

class SwitchCell extends Component {
	static contextType = ThemeContext;

	static propTypes = Object.assign({
		title: PropTypes.string.isRequired,
		titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
		value: PropTypes.bool,
		onSwitch: PropTypes.func,

		iconComponent: PropTypes.element,
	}, AccessoryCell.propTypes);


	render() {
		const {
			children, onPress,
			title, titleStyle,
			value, onSwitch,
			thumbTintColor, ios_backgroundColor, tintColor,
			iconComponent,

			...remainingProps
		} = this.props;
		const { colorPalette } = this.context;
		const disabled = this.props.disabled === undefined ? this.context.disabled : this.props.disabled;

		const renderIcon = () => {
			if (iconComponent) {
				return (
					<View style={styles.iconContainer}>
						{iconComponent}
					</View>
				);
			}
		};

		const renderTitle = () => {
			if (title) {
				const combinedStyles = [styles.title(colorPalette, disabled), titleStyle];
				return <Text key='title' style={combinedStyles}>{title}</Text>;
			}
		};

		const renderSwitch = () => {
			return (
				<Switch
					key='switch'
					value={value}
					disabled={disabled}
					trackColor={colorPalette.accent}
					thumbTintColor={thumbTintColor}
					ios_backgroundColor={ios_backgroundColor}
					tintColor={tintColor}
					onValueChange={onSwitch}
				/>
			);
		};

		const renderContent = () => {
			const space = <View key='space' style={styles.space} />;
			const component = [renderTitle(), space, renderSwitch()];

			return (
				<View style={styles.contentContainer(!!this.props.accessory)}>
					{component}
				</View>
			);
		};

		return (
			<AccessoryCell
				hideAccessorySeparator
				disabled={disabled}
				onPress={Platform.OS === 'android' ? onSwitch : null}
				{...remainingProps}
				customActionTrigger='onLongPress'
			>

				{renderIcon()}
				{renderContent()}
			</AccessoryCell>
		);
	}
}

delete SwitchCell.propTypes.children;
delete SwitchCell.propTypes.onPress;
export default SwitchCell;
