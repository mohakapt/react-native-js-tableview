import React, { Component } from 'react';
import { Linking, Platform, TouchableHighlight, TouchableNativeFeedback, View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { ThemeContext } from './ThemeContext';

class Cell extends Component {
	static contextType = ThemeContext;

	static propTypes = {
		children: PropTypes.node.isRequired,
		style: ViewPropTypes.style,

		disabled: PropTypes.bool,
		onPress: PropTypes.func,
		onLongPress: PropTypes.func,

		customAction: PropTypes.string,
		customActionType: PropTypes.oneOf(['call', 'compose', 'openUrl']),
		customActionTrigger: PropTypes.oneOf(['onPress', 'onLongPress']),
	};

	static defaultProps = {
		customActionType: 'openUrl',
		customActionTrigger: 'onPress',
	};

	render() {
		const {
			style, children,
			onPress, onLongPress,
			customAction, customActionType, customActionTrigger,
		} = this.props;
		const { colorPalette } = this.context;
		const disabled = this.props.disabled === undefined ? this.context.disable : this.props.disabled;

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
			android: {
				background: TouchableNativeFeedback.Ripple(colorPalette.ripple, false),
			},
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
	}
}

export default Cell;
