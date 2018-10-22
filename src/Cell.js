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

const Cell = ({ colorPalette, children, style, disabled, onPress, onLongPress, customAction, customActionType, customActionTrigger }) => {
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
			underlayColor: colorPalette.underlay,
		},
		android: {},
	});
	const onPressAction = (customAction && customActionTrigger === 'onPress') ? onCustomAction : onPress;
	const onLongPressAction = (customAction && customActionTrigger === 'onLongPress') ? onCustomAction : onLongPress;

	return (
		<Touchable
			{...touchableProps}
			disabled={disabled}
			onPress={onPressAction}
			onLongPress={onLongPressAction}>

			{renderCell()}
		</Touchable>
	);
};

Cell.propTypes = {
	children: PropTypes.node.isRequired,
	style: ViewPropTypes.style,

	disabled: PropTypes.bool,
	onPress: PropTypes.func,
	onLongPress: PropTypes.func,

	customAction: PropTypes.string,
	customActionType: PropTypes.oneOf(['call', 'compose', 'openUrl']),
	customActionTrigger: PropTypes.oneOf(['onPress', 'onLongPress']),
};

Cell.defaultProps = {
	customActionType: 'openUrl',
	customActionTrigger: 'onPress',
};

export default Cell;
