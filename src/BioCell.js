/* @flow */

import * as React from 'react';
import { View, Text, Image } from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import AccessoryCell from './AccessoryCell';

import type { Props as AccessoryProps } from './AccessoryCell';
import { bioCellStyles as styles } from './styles';

type Props = {
	...AccessoryProps,

	title: string,
	titleStyle?: ?any,

	subtitle?: ?string,
	subtitleStyle?: ?any,

	avatarName?: ?string,
	avatarSize?: ?string | ?number,
	photoUrl?: ?string,
	photoStyle?: ?any,
}
const BioCell = (props: Props) => {
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
