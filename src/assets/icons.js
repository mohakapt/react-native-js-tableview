/* @flow */

import * as React from 'react';
import { Image } from 'react-native';

import disclosure from './disclosure.png';
import detail from './details.png';
import checkmark from './checkmark.png';

const icons = {
	disclosure,
	detail,
	checkmark,
};

type Props = {
	name: $Keys<typeof icons>,
	tintColor?: string,
	style?: any,
}

const Icon = (props: Props) => {
	const style = {};
	if (props.tintColor) {
		style.tintColor = props.tintColor
	}
	return (
		<Image
			style={[props.style, style]}
			source={icons[props.name]} />
	);
};

Icon.defaultProps = {};

export default Icon;
