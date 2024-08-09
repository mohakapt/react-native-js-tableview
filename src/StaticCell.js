import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import IconCell from './IconCell';
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
	}, IconCell.propTypes);


	render() {
		const {
			children, // don't pass children to IconCell
			contentContainerStyle,  // will be combined with other styles and sent to IconCell

			title, titleStyle, titleNumberOfLines, titleEllipsizeMode,
			subtitle, subtitleStyle, subtitleNumberOfLines, subtitleEllipsizeMode,

			...remainingProps
		} = this.props;
		const { colorPalette } = this.context;
		const disabled = this.props.disabled === undefined ? this.context.disabled : this.props.disabled;

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

		const combinedStyles = [styles.contentContainer, contentContainerStyle];
		return (
			<IconCell
				disabled={disabled}
				contentContainerStyle={combinedStyles}
				{...remainingProps}>

				{renderTitle()}
				{renderSubtitle()}
			</IconCell>
		);
	}
}

delete StaticCell.propTypes.children;
delete StaticCell.propTypes.contentComponent;
export default StaticCell;
