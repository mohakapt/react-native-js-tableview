import * as React from 'react';
import { View, Text, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import AccessoryCell from './AccessoryCell';

import { keyValueCellStyles as styles } from './styles';

const KeyValueCell = (props) => {
	const {
		children, title, titleStyle,
		value, valueStyle,
		iconComponent,
		contentComponent,

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
			return <Text key='title' style={[styles.title, titleStyle]}>{title}</Text>;
		}
	};

	const getValue = () => {
		if (value) {
			return <Text key='value' style={[styles.value, valueStyle]}>{value}</Text>;
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

		const combinedStyles = [styles.contentContainer];
		if (!props.accessory) {
			combinedStyles.push({ paddingEnd: 15 });
		}

		return (
			<View style={combinedStyles}>
				{component}
			</View>
		);
	};

	return (
		<AccessoryCell hideAccessorySeparator {...remainingProps}>
			{getIcon()}
			{getContent()}
		</AccessoryCell>
	);
};

KeyValueCell.propTypes = Object.assign({
	title: PropTypes.string.isRequired,
	titleString: Text.propTypes.style,
	value: PropTypes.string,
	valueStyle: Text.propTypes.style,
	contentComponent: PropTypes.node,

	iconComponent: PropTypes.element,
}, AccessoryCell.propTypes);

KeyValueCell.defaultProps = {
	isEnabled: true,
};

delete KeyValueCell.propTypes.children;
export default KeyValueCell;
