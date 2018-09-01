import * as React from 'react';
import { Text, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import AccessoryCell from './AccessoryCell';

import { touchableCellStyles as styles } from './styles';

const TouchableCell = (props) => {
	const {
		children, title, titleStyle,
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

TouchableCell.propTypes = Object.assign({
	title: PropTypes.string.isRequired,
	titleStyle: ViewPropTypes.style,
}, AccessoryCell.propTypes);

TouchableCell.defaultProps = {
	isEnabled: true,
};

delete TouchableCell.propTypes.children;
export default TouchableCell;
