import * as React from 'react';
import { View, Text, Platform } from 'react-native';
import PropTypes from 'prop-types';

import Cell from './Cell';
import { insertProps } from './assets/utilites';
import { COLOR_SEPARATOR } from './assets/colors';

import { sectionStyles as styles } from './styles';

Section.propTypes = {
	accentColor: PropTypes.string,
	underlayColor: PropTypes.string,

	children: PropTypes.arrayOf(PropTypes.instanceOf(Cell)).isRequired,
	style: View.propTypes.style,

	header: PropTypes.string,
	headerStyle: Text.propTypes.style,
	headerComponent: PropTypes.node,

	footer: PropTypes.string,
	footerStyle: Text.propTypes.style,
	footerComponent: PropTypes.node,

	hideSeparators: PropTypes.bool,
	separatorInsetLeft: PropTypes.number,
	separatorInsetRight: PropTypes.number,
	separatorColor: PropTypes.string,
};

Section.defaultProps = {
	hideSeparators: false,
	separatorInsetLeft: 20,
	separatorInsetRight: 0,
	separatorColor: COLOR_SEPARATOR,
};

const Section = (props) => {
	const getSeparator = (index, useInsets) => {
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

	const getHeader = () => {
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
				combinedStyles.push({ color: accentColor });
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

	const getFooter = () => {
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

export default Section;
