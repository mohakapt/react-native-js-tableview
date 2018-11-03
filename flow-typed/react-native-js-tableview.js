declare module 'react-native-js-tableview' {

	declare export type TableProps = {|
		accentColor?: string,
		underlayColor?: string,

		style?: ?any,
		scrollViewStyle?: ?any,

		children: React$ChildrenArray<React$Element<typeof SectionProps>>,
		scrollable?: boolean,
	|}

	declare export type SectionProps = {|
		accentColor?: string,
		underlayColor?: string,

		children?: React$ChildrenArray<React$Element<typeof CellProps>>,
		style?: any,

		header?: ?string,
		headerStyle?: ?any,
		headerComponent?: ?React$Node,

		footer?: ?string,
		footerStyle?: ?any,
		footerComponent?: ?React$Node,
		hideSeparators?: boolean,
		separatorInsetLeft?: number,
		separatorInsetRight?: number,
		separatorColor?: string,
	|}

	declare export type CellProps = {|
		accentColor?: string,
		underlayColor?: string,

		children: React$Node,
		style?: ?any,

		isEnabled?: boolean,
		onPress?: () => void | false,
		onLongPress?: () => | false,
	|};

	declare export type AccessoryCellProps = {|
		...CellProps,

		accessory?: ?('disclosure' | 'details' | 'checkmark'),
		accessoryTint?: ?string,
		accessoryComponent?: ?React$Node,
		hideAccessorySeparator?: boolean,
		accessorySeparatorColor?: string,

		onAccessoryPress?: () => void | false,
	|};

	declare export type BioCellProps = {|
		...AccessoryCellProps,

		title: string,
		titleStyle?: ?any,

		subtitle?: ?string,
		subtitleStyle?: ?any,

		avatarName?: ?string,
		avatarSize?: ?string | ?number,
		photoUrl?: ?string,
		photoStyle?: ?any,
	|}

	declare export type KeyValueCellProps = {|
		...AccessoryCellProps,

		title: string,
		titleStyle?: ?any,
		value?: ?string,
		valueStyle?: ?any,
		contentComponent?: ?React$Node,

		iconComponent?: ?React$Node,
	|};

	declare export type StaticCellProps = {|
		...AccessoryCellProps,

		title: string,
		titleStyle?: ?any,
		subtitle?: ?string,
		subtitleStyle?: ?any,
		contentComponent?: ?React$Node,

		iconComponent?: ?React$Node,
	|};

	declare export type TouchableCellProps = {|
		...AccessoryCellProps,

		title: string,
		titleStyle?: ?any,
	|}

	declare class Table extends React$Component<TableProps> {
	}

	declare export default typeof Table;

	declare module.exports: {
		Section(props: SectionProps): React$Node,
		Cell(props: CellProps): React$Node,
		AccessoryCell(props: AccessoryCellProps): React$Node,
		BioCell(props: BioCellProps): React$Node,
		KeyValueCell(props: KeyValueCellProps): React$Node,
		StaticCell(props: StaticCellProps): React$Node,
		TouchableCell(props: TouchableCellProps): React$Node,
	}
}
