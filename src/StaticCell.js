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
		titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
		titleNumberOfLines: PropTypes.number,
		titleEllipsizeMode: PropTypes.oneOf(['head', 'middle', 'tail', 'clip']),
		subtitle: PropTypes.string,
		subtitleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
		subtitleNumberOfLines: PropTypes.number,
		subtitleEllipsizeMode: PropTypes.oneOf(['head', 'middle', 'tail', 'clip']),
		contentComponent: PropTypes.node,

		iconComponent: PropTypes.element,
	}, AccessoryCell.propTypes);


	render() {
		const {
			children,
			title, titleStyle, titleNumberOfLines, titleEllipsizeMode,
			subtitle, subtitleStyle, subtitleNumberOfLines, subtitleEllipsizeMode,
			iconComponent, contentComponent,

			...remainingProps
		} = this.props;
		const { colorPalette } = this.context;
		const disabled = this.props.disabled === undefined ? this.context.disabled : this.props.disabled;

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
				return <Text
					key='title'
					style={combinedStyles}
					numberOfLines={titleNumberOfLines}
					ellipsizeMode={titleEllipsizeMode}
					children={title} />;
			}
		};

		const renderSubtitle = () => {
			if (subtitle) {
				const combinedStyles = [styles.subtitle(colorPalette, disabled), subtitleStyle];
				return <Text
					key='subtitle'
					style={combinedStyles}
					numberOfLines={subtitleNumberOfLines}
					ellipsizeMode={subtitleEllipsizeMode}
					children={subtitle} />;
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
