import * as React from 'react';
import { View, Text, Platform, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import { insertProps } from './assets/utilites';
import { COLOR_SEPARATOR, getColorSection } from './assets/colors';

import { sectionStyles as styles } from './styles';

const Section = (props) => {
	const getSeparator = (index, useInsets) => {
		const { hideSeparators, separatorInsetLeft, separatorInsetRight, theme } = props;

		if (hideSeparators) {
			return;
		}

		let separatorStyle;
		if (useInsets) {
			separatorStyle = styles.separator(theme, separatorInsetLeft, separatorInsetRight);
		} else {
			separatorStyle = styles.separator(theme, 0, 0);
		}

		return <View key={index} style={separatorStyle} />;
	};

	const getHeader = () => {
		const { header, headerStyle, headerComponent, theme, accentColor } = props;
		const reVal = [];

		if (Platform.OS === 'ios' || header) {
			reVal.push(getSeparator(112, false));
		}

		if (headerComponent) {
			reVal.unshift(headerComponent);
		} else if (header) {
			const combinedStyles = [
				styles.header(theme, accentColor),
				headerStyle,
			];

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
		const { children, accentColor, underlayColor, theme, blendAccent } = props;

		const reVal = [];
		const childrenArray = insertProps(children, { accentColor, underlayColor, theme, blendAccent });

		for (let x = 0; x < childrenArray.length; x++) {
			reVal.push((childrenArray[x]));
			if (x < childrenArray.length - 1) {
				reVal.push(getSeparator(x, true));
			}
		}
		return reVal;
	};

	const getFooter = () => {
		const { footer, footerStyle, footerComponent, theme } = props;
		const reVal = [];

		if (Platform.OS === 'ios' || footer) {
			reVal.push(getSeparator(111, false));
		}

		if (footerComponent) {
			reVal.push(footerComponent);
		} else if (footer) {
			const combinedStyles = [
				styles.footer(theme),
				footerStyle,
			];

			const textComponent = (
				<View key='footer' style={styles.footerContainer}>
					<Text style={combinedStyles}>{footer}</Text>
				</View>
			);
			reVal.push(textComponent);
		}

		return reVal;
	};

	const { accentColor, theme, blendAccent } = props;
	return (
		<View style={[styles.container(theme, blendAccent, accentColor), props.style]}>
			{getHeader()}
			<View style={styles.cellsContainer(theme, blendAccent, accentColor)}>
				{getCells()}
			</View>
			{getFooter()}
		</View>
	);
};

Section.propTypes = {
	accentColor: PropTypes.string,
	underlayColor: PropTypes.string,
	theme: PropTypes.oneOf(['light', 'dark']),
	blendAccent: PropTypes.bool,

	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.PropTypes.element,
	]),
	style: ViewPropTypes.style,

	header: PropTypes.string,
	headerStyle: Text.propTypes.style,
	headerComponent: PropTypes.node,

	footer: PropTypes.string,
	footerStyle: Text.propTypes.style,
	footerComponent: PropTypes.node,

	hideSeparators: PropTypes.bool,
	separatorInsetLeft: PropTypes.number,
	separatorInsetRight: PropTypes.number,
};

Section.defaultProps = {
	hideSeparators: false,
	separatorInsetLeft: 20,
	separatorInsetRight: 0,
};

export default Section;
