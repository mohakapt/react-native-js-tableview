import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import AccessoryCell from './AccessoryCell';
import { ThemeContext } from './ThemeContext';

import { iconCellStyles as styles } from './styles';

class IconCell extends Component {
	static contextType = ThemeContext;

	static propTypes = Object.assign({
		iconComponent: PropTypes.element,
		iconContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),

		children: PropTypes.node,
		contentComponent: PropTypes.node,
		contentContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
	}, AccessoryCell.propTypes);


	render() {
		const {
			iconComponent, iconContainerStyle,
			children, contentComponent, contentContainerStyle,

			...remainingProps
		} = this.props;
		const disabled = this.props.disabled === undefined ? this.context.disabled : this.props.disabled;

		const renderIcon = () => {
			if (iconComponent) {
				const combinedStyles = [styles.iconContainer, iconContainerStyle];
				return (
					<View style={combinedStyles}>
						{iconComponent}
					</View>
				);
			}
		};

		const renderContent = () => {
			const component = children ?? contentComponent;

			const combinedStyles = [styles.contentContainer, contentContainerStyle];
			return (
				<View style={combinedStyles}>
					{component}
				</View>
			);
		};

		return (
			<AccessoryCell disabled={disabled} {...remainingProps}>
				{renderIcon()}
				{renderContent()}
			</AccessoryCell>
		);
	}
}

export default IconCell;
