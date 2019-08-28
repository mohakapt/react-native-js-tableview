import React, { Component } from 'react';
import { Platform, Text, View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { ThemeContext, ThemeProvider } from './ThemeContext';

import { sectionStyles as styles } from './styles';

class Section extends Component {
	static contextType = ThemeContext;

	static propTypes = {
		disabled: PropTypes.bool,

    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.element, PropTypes.node),
      PropTypes.element,
      PropTypes.node
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

	static defaultProps = {
		hideSeparators: false,
		separatorInsetLeft: 20,
		separatorInsetRight: 0,
	};


	render() {
		const { colorPalette } = this.context;
		const disabled = this.props.disabled === undefined ? this.context.disabled : this.props.disabled;

		const renderSeparator = (index, useInsets) => {
			const { hideSeparators, separatorInsetLeft, separatorInsetRight } = this.props;

			if (hideSeparators) {
				return;
			}

			let separatorStyle;
			if (useInsets) {
				separatorStyle = styles.separator(colorPalette, separatorInsetLeft, separatorInsetRight);
			} else {
				separatorStyle = styles.separator(colorPalette, 0, 0);
			}

			return <View key={index} style={separatorStyle} />;
		};

		const renderHeader = () => {
			const { header, headerStyle, headerComponent } = this.props;
			const reVal = [];

			if (Platform.OS === 'ios' || header) {
				reVal.push(renderSeparator(112, false));
			}

			if (headerComponent) {
				reVal.unshift(headerComponent);
			} else if (header) {
				const combinedStyles = [
					styles.header(colorPalette),
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

		const renderCells = () => {
			const { children } = this.props;

			const reVal = [];
			const childrenArray = React.Children.toArray(children);

			for (let x = 0; x < childrenArray.length; x++) {
				reVal.push((childrenArray[x]));
				if (x < childrenArray.length - 1) {
					reVal.push(renderSeparator(x, true));
				}
			}
			return reVal;
		};

		const renderFooter = () => {
			const { footer, footerStyle, footerComponent } = this.props;
			const reVal = [];

			if (Platform.OS === 'ios' || footer) {
				reVal.push(renderSeparator(111, false));
			}

			if (footerComponent) {
				reVal.push(footerComponent);
			} else if (footer) {
				const combinedStyles = [
					styles.footer(colorPalette),
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

		return (
			<ThemeProvider value={{ colorPalette, disabled }}>
				<View style={[styles.container(colorPalette), this.props.style]}>
					{renderHeader()}
					<View style={styles.cellsContainer(colorPalette)}>
						{renderCells()}
					</View>
					{renderFooter()}
				</View>
			</ThemeProvider>
		);
	}
}

export default Section;
