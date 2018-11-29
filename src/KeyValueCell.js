import * as React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import AccessoryCell from './AccessoryCell';

import { keyValueCellStyles as styles } from './styles';

const KeyValueCell = (props) => {
	const {
		children,
		title, titleStyle,
		value, valueStyle,
		iconComponent,
		contentComponent,
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

	const getValue = () => {
		if (value) {
			const combinedStyles = [styles.value(colorPalette, disabled), valueStyle];
			return <Text key='value' style={combinedStyles}>{value}</Text>;
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
			<View style={styles.contentContainer(!!props.accessory)}>
				{component}
			</View>
		);
	};

	return (
		<AccessoryCell hideAccessorySeparator colorPalette={colorPalette} disabled={disabled} {...remainingProps}>
			{getIcon()}
			{getContent()}
		</AccessoryCell>
	);
};

KeyValueCell.propTypes = Object.assign({
	title: PropTypes.string.isRequired,
	titleStyle: Text.propTypes.style,
	value: PropTypes.string,
	valueStyle: Text.propTypes.style,
	contentComponent: PropTypes.node,

	iconComponent: PropTypes.element,
}, AccessoryCell.propTypes);

delete KeyValueCell.propTypes.children;
export default KeyValueCell;
