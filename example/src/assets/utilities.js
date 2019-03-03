/* @flow */

import { COLOR_ACCENT } from './colors';

export function getNavAction(ios: string, android: string, onPress: ?() => void, tintColor: string = Platform.OS === 'ios' ? COLOR_ACCENT : 'white') {
	const getContent = (): React.Node => {
		const name = Platform.OS === 'ios' ? ios : android;
		const isIcon = hasIcon(name);

		let component: React.Node;
		if (isIcon) {
			// $FlowExpectedError: name cannot be wrong at this point.
			component = <Icon name={name} tintColor={tintColor} />;
		} else {
			const color = { color: tintColor };
			component =
				<Text style={[styles.navTextAction, color]}>{name}</Text>;
		}

		return (
			<View style={styles.container}>
				{component}
			</View>
		);
	};

	if (Platform.OS === 'ios') {
		return (
			<TouchableOpacity onPress={onPress}>
				{getContent()}
			</TouchableOpacity>
		);
	}

	const ripple = TouchableNativeFeedback.Ripple('rgba(0, 0, 0, .32)', true);
	return (
		<TouchableNativeFeedback background={ripple} onPress={onPress}>
			{getContent()}
		</TouchableNativeFeedback>
	);
}
