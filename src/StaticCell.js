import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import AccessoryCell from './AccessoryCell';
import { ThemeContext } from './ThemeContext';

import { staticCellStyles as styles } from './styles';

class StaticCell extends Component {
	static contextType = ThemeContext;

	static propTypes = Object.assign({
		title: PropTypes.string.isRequired,
		titleStyle: Text.propTypes.style,
		subtitle: PropTypes.string,
		subtitleStyle: Text.propTypes.style,
		contentComponent: PropTypes.node,

		iconComponent: PropTypes.element,
	}, AccessoryCell.propTypes);

	render() {
		const {
			children,
			title, titleStyle,
			subtitle, subtitleStyle,
			iconComponent, contentComponent,

			...remainingProps
		} = this.props;
		const { colorPalette } = this.context;
		const disabled = this.props.disabled === undefined ? this.context.disable : this.props.disabled;

		const renderIcon = () => {
			if (iconComponent) {
				return (
					<View style={styles.iconContainer}>
						{iconComponent}
					</View>
				);
			}
		};

		const renderTitle = () => {
			if (title) {
				const combinedStyles = [styles.title(colorPalette, disabled), titleStyle];
				return <Text key='title' style={combinedStyles}>{title}</Text>;
			}
		};

		const renderSubtitle = () => {
			if (subtitle) {
				const combinedStyles = [styles.subtitle(colorPalette, disabled), subtitleStyle];
				return <Text key='subtitle' style={combinedStyles}>{subtitle}</Text>;
			}
		};

		const renderContent = () => {
			let component;
			if (contentComponent) {
				component = contentComponent;
			} else {
				component = [renderTitle(), renderSubtitle()];
			}

			return (
				<View style={styles.contentContainer}>
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

delete StaticCell.propTypes.children;
export default StaticCell;
