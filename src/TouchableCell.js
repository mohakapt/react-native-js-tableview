/* @flow */

import * as React from 'react';
import { Text } from 'react-native';
import AccessoryCell from './AccessoryCell';

import type { Props as AccessoryCellProps } from './AccessoryCell';

import { touchableCellStyles as styles } from './styles';

type Props = {
	...AccessoryCellProps,

	title: string,
	titleStyle?: any,
}

const TouchableCell = (props: Props) => {
	const { title, titleStyle, isEnabled } = props;

	const combinedStyles = [styles.title, titleStyle];
	if (!isEnabled)
		combinedStyles.push(styles.disabledTitle);

	return (
		<AccessoryCell {...props}>
			<Text style={combinedStyles}>{title}</Text>
		</AccessoryCell>
	);
};

TouchableCell.defaultProps = {
	isEnabled: true,
};

export default TouchableCell;
