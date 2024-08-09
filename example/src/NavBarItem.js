import React from 'react';
import { Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';

import Icon, { hasIcon } from './assets/icons';

const NavBarItem = (props) => {
	const getContent = () => {
		const { text, icon, tintColor } = props;

		let component;
		if (icon && hasIcon(icon)) {
			component = <Icon name={icon} tintColor={tintColor} />;
		} else {
			component = <Text style={styles.navItemText(tintColor)}>{text}</Text>;
		}

		return <View style={styles.container}>{component}</View>;
	};

	const Touchable = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;
	const touchableProps = Platform.select({
		ios: {},
		android: { background: TouchableNativeFeedback.Ripple('rgba(0, 0, 0, .26)', true) },
	});

	return (
		<Touchable {...touchableProps} onPress={props.onPress}>
			{getContent()}
		</Touchable>
	);
};

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 8,
		padding: 4,
	},
	navItemText: (tintColor) => Platform.select({
		ios: {
			fontSize: 17,
			fontWeight: '700',
			color: tintColor,
		},
		android: {
			fontSize: 15,
			fontWeight: '500',
			color: tintColor,
		},
	}),
});


export default NavBarItem;
