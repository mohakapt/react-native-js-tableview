import * as React from 'react';
import { Text, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import AccessoryCell from './AccessoryCell';

import { touchableCellStyles as styles } from './styles';

const TouchableCell = (props) => {
	const {
		children,
		title, titleStyle,
		theme, accentColor, disabled,

		...remainingProps
	} = props;

	const combinedStyles = [
		styles.title(theme, accentColor, disabled),
		titleStyle,
	];

	return (
		<AccessoryCell theme={theme} accentColor={accentColor} disabled={disabled}  {...remainingProps}>
			<Text style={combinedStyles}>{title}</Text>
		</AccessoryCell>
	);
};

TouchableCell.propTypes = Object.assign({
	title: PropTypes.string.isRequired,
	titleStyle: Text.propTypes.style,
}, AccessoryCell.propTypes);

delete TouchableCell.propTypes.children;
export default TouchableCell;
