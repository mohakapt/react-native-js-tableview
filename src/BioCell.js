import * as React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import UserAvatar from 'react-native-user-avatar';

import AccessoryCell from './AccessoryCell';

import { bioCellStyles as styles } from './styles';

BioCell.propTypes = Object.assign(AccessoryCell.propTypes, {
	title: PropTypes.string.isRequired,
	titleStyle: Text.propTypes.style,

	subtitle: PropTypes.string,
	subtitleStyle: Text.propTypes.style,

	avatarName: PropTypes.string,
	avatarSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	photoUrl: PropTypes.string,
	photoStyle: View.propTypes.style,
});

BioCell.defaultProps = {
	isEnabled: true,
};

const BioCell = (props) => {
	const {
		title, titleStyle,
		subtitle, subtitleStyle,
		avatarName, avatarSize,
		photoUrl, photoStyle,
		accentColor,

		...remainingProps
	} = props;

	const getPhoto = () => {
		if (avatarName || (!photoUrl && title)) {
			return (
				<UserAvatar
					style={[styles.image, photoStyle]}
					size={avatarSize || styles.image.height}
					name={avatarName || title}
					color={accentColor} />
			);
		} else {
			return (
				<Image
					style={[styles.image, photoStyle]}
					source={{ uri: photoUrl }} />
			);
		}
	};

	return (
		<AccessoryCell hideAccessorySeparator accentColor={accentColor} {...remainingProps}>
			{getPhoto()}

			<View style={styles.infoContainer}>
				<Text style={[styles.title, titleStyle]}>{title}</Text>
				<Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>
			</View>
		</AccessoryCell>
	);
};

export default BioCell;
