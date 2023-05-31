import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import AccessoryCell from './AccessoryCell';

import { keyValueCellStyles as styles } from './styles';
import { ThemeContext } from './ThemeContext';

class KeyValueCell extends Component {
	static contextType = ThemeContext;

	static propTypes = Object.assign({
		title: PropTypes.string.isRequired,
		titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
		value: PropTypes.string,
		valueStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
		contentComponent: PropTypes.node,

		iconComponent: PropTypes.element,
	}, AccessoryCell.propTypes);


	render() {
		const {
			children,
			title, titleStyle,
			value, valueStyle,
			iconComponent,
			contentComponent,

			...remainingProps
		} = this.props;
		const { colorPalette } = this.context;
		const disabled = this.props.disabled === undefined ? this.context.disabled : this.props.disabled;

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
				return <Text key='title' style={combinedStyles} numberOfLines={1} ellipsizeMode='tail'>{title}</Text>;
			}
		};

		const getValue = () => {
			if (value) {
				const combinedStyles = [styles.value(colorPalette, disabled), valueStyle];
				return <Text key='value' style={combinedStyles} numberOfLines={1} ellipsizeMode='tail'>{value}</Text>;
			}
		};

		const getContent = () => {
			let component;
			if (contentComponent) {
				component = contentComponent;
			} else {
				const space = <View key='space' style={styles.space} />;
				component = [getTitle(), space, getValue()];
			}

			return (
				<View style={styles.contentContainer(!!this.props.accessory)}>
					{component}
				</View>
			);
		};

		return (
			<AccessoryCell hideAccessorySeparator disabled={disabled} {...remainingProps}>
				{getIcon()}
				{getContent()}
			</AccessoryCell>
		);
	}
}

delete KeyValueCell.propTypes.children;
export default KeyValueCell;
