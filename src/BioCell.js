import * as React from 'react';
import { View, Text, Image, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import UserAvatar from 'react-native-user-avatar';

import AccessoryCell from './AccessoryCell';

import { bioCellStyles as styles } from './styles';

const BioCell = (props) => {
	const {
		children,
		title, titleStyle,
		subtitle, subtitleStyle,
		avatarName, avatarSize,
		photoComponent, photoSource, photoStyle,
		colorPalette, disabled,

		...remainingProps
	} = props;

	console.log('============== BioCell ', colorPalette);

	const getPhoto = () => {
		if (photoComponent) {
			return photoComponent;
		}

		if (avatarName || (!photoSource && title)) {
			return (
				<UserAvatar
					style={[styles.image, photoStyle]}
					size={avatarSize || styles.image.height}
					name={avatarName || title}
					color={colorPalette.accent} />
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
		<AccessoryCell hideAccessorySeparator colorPalette={colorPalette} disabled={disabled} {...remainingProps}>
			{getPhoto()}

			<View style={styles.infoContainer}>
				<Text style={[styles.title(colorPalette, disabled), titleStyle]}>{title}</Text>
				<Text style={[styles.subtitle(colorPalette, disabled), subtitleStyle]}>{subtitle}</Text>
			</View>
		</AccessoryCell>
	);
};

BioCell.propTypes = Object.assign({
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

delete BioCell.propTypes.children;
export default BioCell;
