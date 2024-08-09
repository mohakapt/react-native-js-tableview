import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import UserAvatar from 'react-native-user-avatar';

import StaticCell from './StaticCell';
import { ThemeContext } from './ThemeContext';

import { bioCellStyles as styles } from './styles';

class BioCell extends Component {
	static contextType = ThemeContext;

	static propTypes = Object.assign({
		avatarName: PropTypes.string,
		avatarSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

		photoComponent: PropTypes.node,
		photoSource: PropTypes.any,
		photoStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
	}, StaticCell.propTypes);


	render() {
		const {
			children,
			avatarName, avatarSize,
			photoComponent, photoSource, photoStyle,
			contentComponent, contentContainerStyle,

			...remainingProps
		} = this.props;
		const { colorPalette } = this.context;
		const disabled = this.props.disabled === undefined ? this.context.disabled : this.props.disabled;

		const renderPhoto = () => {
			if (photoComponent) {
				return photoComponent;
			}

			if (avatarName || (!photoSource && this.props.title)) {
				return (
					<View style={[styles.image, photoStyle]}>
						<UserAvatar
							size={avatarSize || styles.image.height}
							name={avatarName || this.props.title}
							color={colorPalette.accent} />
					</View>
				);
			} else {
				return (
					<Image
						style={[styles.image, photoStyle]}
						source={photoSource} />
				);
			}
		};

		return (
			<StaticCell
				hideAccessorySeparator
				disabled={disabled}
				iconComponent={renderPhoto()}
				iconContainerStyle={[styles.imageContainer, contentContainerStyle]}
				{...remainingProps} />
		);
	}
}

delete BioCell.propTypes.children;
export default BioCell;
