/* @flow */

import * as React from 'react';
import { View, Text } from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import { Image } from '../../components';
import AccessoryCell from './AccessoryCell';

import type { Props as AccessoryProps } from './AccessoryCell';
import { bioCellStyles as styles } from './styles';
import { COLOR_PRIMARY } from '../../config/colors';

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
		if (avatarName)
			return <UserAvatar size='75' name={avatarName} color={COLOR_PRIMARY} />;
		else
			return <Image style={styles.image} source={{ uri: photoUrl }} />
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
