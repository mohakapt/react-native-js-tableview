/* @flow */

import * as React from 'react';

export function insertProps(children: any, props: any): Array<React.Node> {
	const childrenArray = React.Children.toArray(children);

	if (!childrenArray) {
		return children;
	}

	return childrenArray.map(child => {
		const childProps = child.props;
		const newProps = {};

		Object.entries(props).forEach(entry => {
			const [key, value] = entry;

			if (!(key in childProps)) {
				newProps[key] = value;
			}
		});

		return React.cloneElement(child, newProps);
	});
}
