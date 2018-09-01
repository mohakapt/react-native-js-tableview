/* @flow */

declare module 'react-native-js-tableview' {

	declare type Table = {
		accentColor?: string,
		underlayColor?: string,

		style?: ?any,
		scrollViewStyle?: ?any,

		children: React.ChildrenArray<React.Element<typeof Section>>,
		isScrollable?: boolean,
	}

	declare type Section = {
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

	declare type Cell = {
		accentColor?: string,
		underlayColor?: string,

		children: React.Node,
		style?: ?any,

		isEnabled?: boolean,
		onPress?: () => void | false,
		onLongPress?: () => | false,
	};

	declare type AccessoryCell = {
		...Cell,

		accessory?: ?('disclosure' | 'details' | 'checkmark'),
		accessoryTint?: ?string,
		accessoryComponent?: ?React.Node,
		hideAccessorySeparator?: boolean,
		accessorySeparatorColor?: string,

		onAccessoryPress?: () => void | false,
	};

	declare type BioCell = {
		...AccessoryCell,

		title: string,
		titleStyle?: ?any,

		subtitle?: ?string,
		subtitleStyle?: ?any,

		avatarName?: ?string,
		avatarSize?: ?string | ?number,
		photoUrl?: ?string,
		photoStyle?: ?any,
	}

	declare type KeyValueCell = {
		...AccessoryCell,

		title: string,
		titleStyle?: ?any,
		value?: ?string,
		valueStyle?: ?any,
		contentComponent?: ?React.Node,

		iconComponent?: ?React.Node,
	};

	declare type StaticCell = {
		...AccessoryCell,

		title: string,
		titleStyle?: ?any,
		subtitle?: ?string,
		subtitleStyle?: ?any,
		contentComponent?: ?React.Node,

		iconComponent?: ?React.Node,
	};

	declare type TouchableCell = {
		...AccessoryCell,

		title: string,
		titleStyle?: ?any,
	}
}
