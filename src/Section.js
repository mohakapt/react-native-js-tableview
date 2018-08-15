/* @flow */

import * as React from 'react';
import { View, Text, Platform } from 'react-native';
import Cell from './Cell';

import { SEPARATOR_COLOR } from './assets/colors';

import { sectionStyles as styles } from './styles';

type Props = {
	style?: any,
	children?: React.ChildrenArray<React.Element<typeof Cell>>,

	header: ?string,
	headerStyle: ?any,
	headerComponent: ?React.Node,

	footer: ?string,
	footerStyle: ?any,
	footerComponent: ?React.Node,

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
		const { header, headerStyle, headerComponent } = props;
		const reVal = [];

		if (Platform.OS === 'ios' || header) {
			reVal.push(getSeparator(112, false));
		}

		if (headerComponent) {
			reVal.unshift(headerComponent);
		} else if (header) {
			const textComponent = (
				<View key='header' style={styles.headerContainer}>
					<Text style={[styles.header, headerStyle]}>{header}</Text>
				</View>
			);
			reVal.unshift(textComponent);
		}

		return reVal;
	};

	const getCells = () => {
		const { children, accentColor, underlayColor } = props;

		const reVal = [];
		const childrenArray = React.Children.map(children, child =>
			React.cloneElement(child, { accentColor, underlayColor }));

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
	separatorColor: SEPARATOR_COLOR,
};

export default Section;
