import * as React from 'react';
import { View, Text, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import AccessoryCell from './AccessoryCell';

import { staticCellStyles as styles } from './styles';

const StaticCell = (props) => {
	const {
		children, title, titleStyle,
		subtitle, subtitleStyle,
		iconComponent,
		contentComponent,
		isEnabled,

		...remainingProps
	} = props;

	const getIcon = () => {
		if (iconComponent) {
			return (
				<View style={styles.iconContainer}>
					{iconComponent}
				</View>
			);
		}
	};

	const getTitle = () => {
		const combinedStyles = [styles.title, titleStyle];
		if (!isEnabled)
			combinedStyles.push(styles.disabledTitle);

		if (title) {
			return <Text key='title' style={combinedStyles}>{title}</Text>;
		}
	};

	const getSubtitle = () => {
		if (subtitle) {
			return <Text key='subtitle' style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>;
		}
	};

	const getContent = () => {
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
		<AccessoryCell isEnabled={isEnabled} {...remainingProps}>
			{getIcon()}
			{getContent()}
		</AccessoryCell>
	);
};

StaticCell.propTypes = Object.assign({
	title: PropTypes.string.isRequired,
	titleStyle: ViewPropTypes.style,
	subtitle: PropTypes.string,
	subtitleStyle: ViewPropTypes.style,
	contentComponent: PropTypes.node,

	iconComponent: PropTypes.element,
}, AccessoryCell.propTypes);

StaticCell.defaultProps = {
	isEnabled: true,
};

delete StaticCell.propTypes.children;
export default StaticCell;
