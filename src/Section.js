/* @flow */

import * as React from 'react';
import { View, Text, Platform } from 'react-native';
import Cell from './Cell';

import { insertProps } from './assets/utilites';
import { COLOR_SEPARATOR } from './assets/colors';

import { sectionStyles as styles } from './styles';

type Props = {
	accentColor?: string,
	underlayColor?: string,

	children?: React.ChildrenArray<React.Element<typeof Cell>>,
	style?: any,

	header?: ?string,
	headerStyle?: ?any,
	headerComponent?: ?React.Node,

	footer?: ?string,
	footerStyle?: ?any,
	footerComponent?: ?React.Node,

	hideSeparators?: boolean,
	separatorInsetLeft?: number,
	separatorInsetRight?: number,
	separatorColor?: string,
}

const Section = (props: Props) => {
	const getSeparator = (index: number, useInsets: boolean): React.Element<typeof View> => {
		const { hideSeparators, separatorInsetLeft, separatorInsetRight, separatorColor } = props;
		let separator = {
			backgroundColor: separatorColor,
		};
		if (useInsets) {
			separator = {
				...separator,
				marginStart: separatorInsetLeft,
				marginEnd: separatorInsetRight,
			};
		}

		if (!hideSeparators) {
			return <View key={index} style={[styles.separator, separator]} />;
		}
	};

	const getHeader = (): React.Node => {
		const { header, headerStyle, headerComponent, accentColor } = props;
		const reVal = [];

		if (Platform.OS === 'ios' || header) {
			reVal.push(getSeparator(112, false));
		}

		if (headerComponent) {
			reVal.unshift(headerComponent);
		} else if (header) {
			const combinedStyles = [styles.header];
			if (Platform.OS === 'android') {
				combinedStyles.push({ color: accentColor })
			}
			combinedStyles.push(headerStyle);

			const textComponent = (
				<View key='header' style={styles.headerContainer}>
					<Text style={combinedStyles}>{header}</Text>
				</View>
			);
			reVal.unshift(textComponent);
		}

		return reVal;
	};

	const getCells = () => {
		const { children, accentColor, underlayColor } = props;

		const reVal = [];
		const childrenArray = insertProps(children, { accentColor, underlayColor });

		for (let x = 0; x < childrenArray.length; x++) {
			reVal.push((childrenArray[x]));
			if (x < childrenArray.length - 1) {
				reVal.push(getSeparator(x, true));
			}
		}
		return reVal;
	};

	const getFooter = (): React.Node => {
		const { footer, footerStyle, footerComponent } = props;
		const reVal = [];

		if (Platform.OS === 'ios' || footer) {
			reVal.push(getSeparator(111, false));
		}

		if (footerComponent) {
			reVal.push(footerComponent);
		} else if (footer) {
			const textComponent = (
				<View key='footer' style={styles.footerContainer}>
					<Text style={[styles.footer, footerStyle]}>{footer}</Text>
				</View>
			);
			reVal.push(textComponent);
		}

		return reVal;
	};

	return (
		<View style={[styles.container, props.style]}>
			{getHeader()}
			<View style={styles.cellsContainer}>
				{getCells()}
			</View>
			{getFooter()}
		</View>
	);
};

Section.defaultProps = {
	hideSeparators: false,
	separatorInsetLeft: 20,
	separatorInsetRight: 0,
	separatorColor: COLOR_SEPARATOR,
};

export default Section;
