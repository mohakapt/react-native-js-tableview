import * as React from 'react';
import { View, Text, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import AccessoryCell from './AccessoryCell';

import { keyValueCellStyles as styles } from './styles';

KeyValueCell.propTypes = Object.assign(AccessoryCell.propTypes, {
	title: PropTypes.string.isRequired,
	titleString: ViewPropTypes.style,
	value: PropTypes.string,
	valueStyle: ViewPropTypes.style,
	contentComponent: PropTypes.node,

	iconComponent: PropTypes.element,
});

KeyValueCell.defaultProps = {
	isEnabled: true,
};

const KeyValueCell = (props) => {
	const {
		title, titleStyle,
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

		return (
			<View style={styles.contentContainer}>
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

export default KeyValueCell;
