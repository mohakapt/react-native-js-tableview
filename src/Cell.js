import * as React from 'react';
import {
	View,
	Platform,
	TouchableHighlight,
	TouchableNativeFeedback,
	ViewPropTypes,
	Linking,
} from 'react-native';
import PropTypes from 'prop-types';

const Cell = ({ children, style, isEnabled, onPress, onLongPress, underlayColor, customAction, customActionType, customActionTrigger }) => {
	const renderCell = () => (
		<View style={style}>
			{children}
		</View>
	);

	if (!onPress && !customAction) {
		return renderCell();
	}

	const onCustomAction = () => {
		let url;
		switch (customActionType) {
			case 'call':
				url = `tel: ${customAction}`;
				break;
			case 'compose':
				url = `mailto: ${customAction}`;
				break;
			case 'openUrl':
				url = customAction;
				break;
		}

		if (url) {
			Linking.canOpenURL(url).then(canOpen => canOpen && Linking.openURL(url));
		}

		if (customActionTrigger === 'onPress') {
			onPress && onPress();
		} else if (customActionTrigger === 'onLongPress') {
			onLongPress && onLongPress();
		}
	};

	const Touchable = Platform.OS === 'ios' ? TouchableHighlight : TouchableNativeFeedback;
	const touchableProps = Platform.select({
		ios: {
			underlayColor,
		},
		android: {},
	});
	const onPressAction = (customAction && customActionTrigger === 'onPress') ? onCustomAction : onPress;
	const onLongPressAction = (customAction && customActionTrigger === 'onLongPress') ? onCustomAction : onLongPress;

	return (
		<Touchable
			{...touchableProps}
			disabled={!isEnabled}
			onPress={onPressAction}
			onLongPress={onLongPressAction}>

			{renderCell()}
		</Touchable>
	);
};

Cell.propTypes = {
	accentColor: PropTypes.string,
	underlayColor: PropTypes.string,
	theme: PropTypes.oneOf(['light', 'dark']),
	blendAccent: PropTypes.bool,

	children: PropTypes.node.isRequired,
	style: ViewPropTypes.style,

	isEnabled: PropTypes.bool,
	onPress: PropTypes.func,
	onLongPress: PropTypes.func,

	customAction: PropTypes.string,
	customActionType: PropTypes.oneOf(['call', 'compose', 'openUrl']),
	customActionTrigger: PropTypes.oneOf(['onPress', 'onLongPress']),
};

Cell.defaultProps = {
	isEnabled: true,

	customActionType: 'openUrl',
	customActionTrigger: 'onPress',
};

export default Cell;
