import * as React from 'react';
import { View, Text, Switch } from 'react-native';
import PropTypes from 'prop-types';

import AccessoryCell from './AccessoryCell';

import { switchCellStyles as styles } from './styles';

const SwitchCell = (props) => {
	const {
		children, onPress,
		title, titleStyle,
		value, onSwitch,
		thumbTintColor, ios_backgroundColor, tintColor,
		iconComponent,
		colorPalette, disabled,

		...remainingProps
	} = props;

	const getIcon = () => {
		if (iconComponent) {
			return (
				<View style={styles.iconContainer}>
					{iconComponent}
				</View>
			);
		}
	};

	const getTitle = () => {
		if (title) {
			const combinedStyles = [styles.title(colorPalette, disabled), titleStyle];
			return <Text key='title' style={combinedStyles}>{title}</Text>;
		}
	};

	const getSwitch = () => {
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

	const getContent = () => {
		const space = <View key='space' style={styles.space} />;
		const component = [getTitle(), space, getSwitch()];

		return (
			<View style={styles.contentContainer(!!props.accessory)}>
				{component}
			</View>
		);
	};

	return (
		<AccessoryCell
			hideAccessorySeparator
			colorPalette={colorPalette}
			disabled={disabled}
			onPress={onSwitch}
			{...remainingProps}
			customActionTrigger='onLongPress'
		>

			{getIcon()}
			{getContent()}
		</AccessoryCell>
	);
};

SwitchCell.propTypes = Object.assign({
	title: PropTypes.string.isRequired,
	titleStyle: Text.propTypes.style,
	value: PropTypes.bool,
	onSwitch: PropTypes.func,

	iconComponent: PropTypes.element,
}, AccessoryCell.propTypes);

delete SwitchCell.propTypes.children;
delete SwitchCell.propTypes.onPress;
export default SwitchCell;
