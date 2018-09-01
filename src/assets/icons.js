import * as React from 'react';
import { Image, I18nManager } from 'react-native';
import PropTypes from 'prop-types';

import disclosure from './disclosure.png';
import details from './details.png';
import checkmark from './checkmark.png';

const icons = {
	disclosure,
	details,
	checkmark,
};

Icon.propTypes = {
	name: PropTypes.oneOf(Object.keys(icons)).isRequired,
	tintColor: PropTypes.string,
	style: Image.propTypes.style,
};

Icon.defaultProps = {};

const Icon = (props) => {
	const style = {};
	if (props.tintColor) {
		style.tintColor = props.tintColor;
	}
	if (props.name === 'disclosure' && I18nManager.isRTL) {
		style.transform = [{ rotateY: '180deg' }];
	}

	return (
		<Image
			style={[props.style, style]}
			source={icons[props.name]} />
	);
};

export default Icon;
