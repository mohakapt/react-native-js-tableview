import * as React from 'react';
import {
	View,
	Platform,
	TouchableHighlight,
	TouchableNativeFeedback,
} from 'react-native';
import PropTypes from 'prop-types';

Cell.propTypes = {
	accentColor: PropTypes.string,
	underlayColor: PropTypes.string,

	children: PropTypes.node.isRequired,
	style: View.propTypes.style,

	isEnabled: PropTypes.bool,
	onPress: PropTypes.func,
	onLongPress: PropTypes.func,
};

Cell.defaultProps = {
	isEnabled: true,
};

const Cell = ({ children, style, isEnabled, onPress, onLongPress, underlayColor }) => {
	const renderCell = () => (
		<View style={style}>
			{children}
		</View>
	);

	if (!onPress) {
		return renderCell();
	}

	const Touchable = Platform.OS === 'ios' ? TouchableHighlight : TouchableNativeFeedback;
	const touchableProps = Platform.select({
		ios: {
			underlayColor,
		},
		android: {},
	});

	return (
		<Touchable {...touchableProps} disabled={!isEnabled} onPress={onPress} onLongPress={onLongPress}>
			{renderCell()}
		</Touchable>
	);
};

export default Cell;
