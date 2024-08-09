import React, { Component } from 'react';
import { Switch, Text, View, Platform } from 'react-native';
import PropTypes from 'prop-types';

import IconCell from './IconCell';
import { ThemeContext } from './ThemeContext';

import { switchCellStyles as styles } from './styles';

class SwitchCell extends Component {
	static contextType = ThemeContext;

	static propTypes = Object.assign({
		title: PropTypes.string.isRequired,
		titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
		switchOnCell: PropTypes.bool,
		value: PropTypes.bool,
		onSwitch: PropTypes.func,

		iconComponent: PropTypes.element,
	}, IconCell.propTypes);

	static defaultProps = {
		switchOnCell: Platform.OS !== 'ios',
	};

	render() {
		const {
			children, // don't pass children to IconCell
			contentContainerStyle,  // will be combined with other styles and sent to IconCell

			onPress,
			title, titleStyle,
			switchOnCell,
			value, onSwitch,
			thumbTintColor, ios_backgroundColor, tintColor,

			...remainingProps
		} = this.props;
		const { colorPalette } = this.context;
		const disabled = this.props.disabled === undefined ? this.context.disabled : this.props.disabled;

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
					onValueChange={onSwitch} />
			);
		};

		const combinedStyles = [styles.contentContainer(!!this.props.accessory), contentContainerStyle];
		const combinedOnPress = onPress || (switchOnCell ? onSwitch : undefined);

		return (
			<IconCell
				hideAccessorySeparator
				disabled={disabled}
				contentContainerStyle={combinedStyles}
				onPress={combinedOnPress}
				{...remainingProps}
				customActionTrigger='onLongPress'>

				{renderTitle()}
				<View key='space' style={styles.space} />
				{renderSwitch()}
			</IconCell>
		);
	}
}

delete SwitchCell.propTypes.children;
export default SwitchCell;
