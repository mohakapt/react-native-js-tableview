import * as React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import AccessoryCell from './AccessoryCell';

import { touchableCellStyles as styles } from './styles';

const TouchableCell = (props) => {
	const {
		children,
		title, titleStyle,
		colorPalette, disabled,

		...remainingProps
	} = props;

	const combinedStyles = [
		styles.title(colorPalette, disabled),
		titleStyle,
	];

	return (
		<AccessoryCell colorPalette={colorPalette} disabled={disabled}  {...remainingProps}>
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
