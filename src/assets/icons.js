import * as React from 'react';
import { I18nManager, Image, Platform } from 'react-native';
import PropTypes from 'prop-types';

import disclosureAndroid from './disclosureAndroid.png';
import detailsAndroid from './detailsAndroid.png';
import checkmarkAndroid from './checkmarkAndroid.png';
import disclosureIos from './disclosureIos.png';
import detailsIos from './detailsIos.png';
import checkmarkIos from './checkmarkIos.png';

const icons = {
	disclosure: Platform.select({ default: disclosureAndroid, ios: disclosureIos }),
	details: Platform.select({ default: detailsAndroid, ios: detailsIos }),
	checkmark: Platform.select({ default: checkmarkAndroid, ios: checkmarkIos }),
};

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
			style={[style, props.style]}
			source={icons[props.name]} />
	);
};

export default Icon;
