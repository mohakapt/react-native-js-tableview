/* @flow */

import * as React from 'react';
import { View, Text, Image } from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import AccessoryCell from './AccessoryCell';

import { ACCENT_COLOR } from './assets/colors';

import type { Props as AccessoryProps } from './AccessoryCell';
import { bioCellStyles as styles } from './styles';

type Props = {
	...AccessoryProps,
	title: string,
	titleStyle: any,

	subtitle: string,
	subtitleStyle: any,

	avatarName?: ?string,
	photoUrl?: ?string,
}
const BioCell = (props: Props) => {
	const {
		title,
		subtitle,
		photoUrl,
		avatarName,
		titleStyle,
		subtitleStyle,
	} = props;

	const getPhoto = () => {
		if (avatarName || (!photoUrl && title)) {
			return (
				<UserAvatar
					style={styles.image}
					size={styles.image.height}
					name={avatarName || title}
					color={ACCENT_COLOR} />
			);
		} else {
			return (
				<Image
					style={styles.image}
					source={{ uri: photoUrl }} />
			);
		}
	};

	return (
		<AccessoryCell hideAccessorySeparator {...props}>
			{getPhoto()}

			<View style={styles.infoContainer}>
				<Text style={[styles.title, titleStyle]}>{title}</Text>
				<Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>
			</View>
		</AccessoryCell>
	);
};

export default BioCell;
