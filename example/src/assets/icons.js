import * as React from 'react';
import { COLOR_ACCENT } from './colors';

import email from './email';
import phone from './phone';
import book from './book';
import article from './article';
import project from './project';
import theme from './theme';

const svgs = {
	email,
	phone,
	book,
	article,
	project,
	theme,
};

const Icon = ({ tintColor = COLOR_ACCENT, ...props }) => {
	const Target = svgs[props.name];
	return <Target tintColor={tintColor} {...props} />;
};

export default Icon;

export const hasIcon = (name) => name in svgs;
