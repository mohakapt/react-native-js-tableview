import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import AccessoryCell from './AccessoryCell';
import { ThemeContext } from './ThemeContext';

import { touchableCellStyles as styles } from './styles';

class TouchableCell extends Component {
	static contextType = ThemeContext;

	static propTypes = Object.assign({
		title: PropTypes.string.isRequired,
		titleStyle: Text.propTypes.style,
	}, AccessoryCell.propTypes);


	render() {
		const {
			children,
			title, titleStyle,

			...remainingProps
		} = this.props;
		const { colorPalette } = this.context;
		const disabled = this.props.disabled === undefined ? this.context.disabled : this.props.disabled;

		const combinedStyles = [
			styles.title(colorPalette, disabled),
			titleStyle,
		];

		return (
			<AccessoryCell disabled={disabled} {...remainingProps}>
				<Text style={combinedStyles}>{title}</Text>
			</AccessoryCell>
		);
	}
}

delete TouchableCell.propTypes.children;
export default TouchableCell;
