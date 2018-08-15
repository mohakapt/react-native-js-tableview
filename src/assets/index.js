/* @flow */

import * as React from 'react';

import disclosure from './disclosure';
import detail from './details';
import checkmark from './checkmark';

const svgs = {
	disclosure,
	detail,
	checkmark,
};

type Props = {
	name: $Keys<typeof svgs>,
	tintColor?: string,

	opacity?: number | string,
	width?: number | string,
	height?: number | string,

	viewBox?: string,
	preserveAspectRatio?: string,
}

const Icon = (props: Props) => {
	const Target = svgs[props.name];
	return <Target {...props} />;
};

Icon.defaultProps = {};

export default Icon;
