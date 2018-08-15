/* @flow */

import * as React from 'react';
import { View, Text } from 'react-native';
import AccessoryCell from './AccessoryCell';

import type { Props as AccessoryCellProps } from './AccessoryCell';
import { staticCellStyles as styles } from './styles';

export type Props = {
	...AccessoryCellProps,

	title: string,
	titleStyle?: ?any,
	subtitle?: ?string,
	subtitleStyle?: ?any,
	contentComponent?: ?React.Node,

	iconComponent?: ?React.Node,
};

const StaticCell = (props: Props) => {
	const getIcon = (): React.Node => {
		const { iconComponent } = props;

		if (iconComponent) {
			return (
				<View style={styles.iconContainer}>
					{iconComponent}
				</View>
			);
		}
	};

	const getTitle = (): React.Node => {
		const { title, titleStyle, isEnabled } = props;

		const combinedStyles = [styles.title, titleStyle];
		if (!isEnabled)
			combinedStyles.push(styles.disabledTitle);

		if (title) {
			return <Text key='title' style={combinedStyles}>{title}</Text>;
		}
	};

	const getSubtitle = (): React.Node => {
		const { subtitle, subtitleStyle } = props;

		if (subtitle) {
			return <Text key='subtitle' style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>;
		}
	};

	const getContent = (): React.Node => {
		const { contentComponent } = props;

		let component;
		if (contentComponent) {
			component = contentComponent;
		} else {
			component = [getTitle(), getSubtitle()];
		}

		return (
			<View style={styles.contentContainer}>
				{component}
			</View>
		);
	};

	return (
		<AccessoryCell {...props}>
			{getIcon()}
			{getContent()}
		</AccessoryCell>
	);
};

StaticCell.defaultProps = {
	isEnabled: true,
};

export default StaticCell;
