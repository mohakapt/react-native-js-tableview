import React, { Component } from 'react';
import { Image, Text, View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import UserAvatar from 'react-native-user-avatar';

import AccessoryCell from './AccessoryCell';
import { ThemeContext } from './ThemeContext';

import { bioCellStyles as styles } from './styles';

class BioCell extends Component {
	static contextType = ThemeContext;

	static propTypes = Object.assign({
		title: PropTypes.string.isRequired,
		titleStyle: Text.propTypes.style,

		subtitle: PropTypes.string,
		subtitleStyle: Text.propTypes.style,

		avatarName: PropTypes.string,
		avatarSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		photoComponent: PropTypes.node,
		photoSource: PropTypes.any,
		photoStyle: PropTypes.oneOfType([Image.propTypes.style, ViewPropTypes]),
	}, AccessoryCell.propTypes);


	render() {
		const {
			children,
			title, titleStyle,
			subtitle, subtitleStyle,
			avatarName, avatarSize,
			photoComponent, photoSource, photoStyle,

			...remainingProps
		} = this.props;
		const { colorPalette } = this.context;
		const disabled = this.props.disabled === undefined ? this.context.disabled : this.props.disabled;

		const getPhoto = () => {
			if (photoComponent) {
				return photoComponent;
			}

			if (avatarName || (!photoSource && title)) {
				return (
					<View style={[styles.image, photoStyle]}>
						<UserAvatar
							size={avatarSize || styles.image.height}
							name={avatarName || title}
							color={colorPalette.accent} />
					</View>
				);
			} else {
				return (
					<Image
						style={[styles.image, photoStyle]}
						source={photoSource} />
				);
			}
		};

		return (
			<AccessoryCell hideAccessorySeparator disabled={disabled} {...remainingProps}>
				{getPhoto()}

				<View style={styles.infoContainer}>
					<Text style={[styles.title(colorPalette, disabled), titleStyle]}>{title}</Text>
					<Text style={[styles.subtitle(colorPalette, disabled), subtitleStyle]}>{subtitle}</Text>
				</View>
			</AccessoryCell>
		);
	}
}

delete BioCell.propTypes.children;
export default BioCell;
