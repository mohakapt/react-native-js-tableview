import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import IconCell from './IconCell';

import { keyValueCellStyles as styles } from './styles';
import { ThemeContext } from './ThemeContext';

class KeyValueCell extends Component {
	static contextType = ThemeContext;

	static propTypes = Object.assign({
		title: PropTypes.string.isRequired,
		titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
		value: PropTypes.string,
		valueStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
	}, IconCell.propTypes);


	render() {
		const {
			children, // don't pass children to IconCell
			contentContainerStyle,  // will be combined with other styles and sent to IconCell

			title, titleStyle,
			value, valueStyle,

			...remainingProps
		} = this.props;
		const { colorPalette } = this.context;
		const disabled = this.props.disabled === undefined ? this.context.disabled : this.props.disabled;

		const getTitle = () => {
			if (title) {
				const combinedStyles = [styles.title(colorPalette, disabled), titleStyle];
				return <Text key='title' style={combinedStyles}>{title}</Text>;
			}
		};

		const getValue = () => {
			if (value) {
				const combinedStyles = [styles.value(colorPalette, disabled), valueStyle];
				return <Text key='value' style={combinedStyles}>{value}</Text>;
			}
		};

		const combinedStyles = [styles.contentContainer(!!this.props.accessory), contentContainerStyle];
		return (
			<IconCell
				hideAccessorySeparator
				disabled={disabled}
				contentContainerStyle={combinedStyles}
				{...remainingProps}>

				{getTitle()}
				<View key='space' style={styles.space} />
				{getValue()}
			</IconCell>
		);
	}
}

delete KeyValueCell.propTypes.children;
delete KeyValueCell.propTypes.contentComponent;
export default KeyValueCell;
