import * as React from 'react';
import { Text, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import AccessoryCell from './AccessoryCell';

import { touchableCellStyles as styles } from './styles';

TouchableCell.propTypes = Object.assign(AccessoryCell.propTypes, {
	title: PropTypes.string.isRequired,
	titleStyle: ViewPropTypes.style,
});

TouchableCell.defaultProps = {
	isEnabled: true,
};

const TouchableCell = (props) => {
	const {
		title, titleStyle,
		accentColor, isEnabled,

		...remainingProps
	} = props;

	const combinedStyles = [styles.title, titleStyle, { color: accentColor }];
	if (!isEnabled) {
		combinedStyles.push(styles.disabledTitle);
	}

	return (
		<AccessoryCell isEnabled={isEnabled} accentColor={accentColor} {...remainingProps}>
			<Text style={combinedStyles}>{title}</Text>
		</AccessoryCell>
	);
};

export default TouchableCell;
