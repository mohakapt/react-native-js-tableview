import React from 'react';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export type TableProps = {
	accentColor?: string,
	theme?: 'light' | 'dark' | 'midnight',
	blendAccent?: boolean,
	disabled?: boolean,

	style?: ViewStyle,
	scrollViewStyle?: ViewStyle,

	children: React.ReactNode,
	scrollable?: boolean,
}
export type SectionProps = {
	disabled?: boolean,

	children: React.ReactNode,
	style?: ViewStyle,

	header?: string,
	headerStyle?: TextStyle,
	headerComponent?: React.ReactNode,

	footer?: string,
	footerStyle?: TextStyle,
	footerComponent?: React.ReactNode,

	hideSeparators?: boolean,
	separatorInsetLeft?: number,
	separatorInsetRight?: number,
}
export type CommonCellProps = {
	style?: ViewStyle,

	disabled?: boolean,
	onPress?: () => void,
	onLongPress?: () => void,

	customAction?: string,
	customActionType?: 'call' | 'compose' | 'openUrl',
	customActionTrigger?: 'onPress' | 'onLongPress',
}
export type CellProps = CommonCellProps & {
	children: React.ReactNode,
}
export type AccessoryCellProps = CommonCellProps & {
	accessory?: 'disclosure' | 'details' | 'checkmark',
	accessoryComponent?: React.ReactNode,
	hideAccessorySeparator?: boolean,
	loading?: boolean,

	onAccessoryPress?: () => void,
}
export type StaticCellProps = AccessoryCellProps & {
	title: string,
	titleStyle?: TextStyle,
	subtitle?: string,
	subtitleStyle?: TextStyle,
	contentComponent?: React.ReactNode,

	iconComponent?: React.ReactNode,
}
export type TouchableCellProps = AccessoryCellProps | {
	title: string,
	titleStyle?: TextStyle,
}
export type BioCellProps = AccessoryCellProps & {
	title: string,
	titleStyle?: TextStyle,

	subtitle?: string,
	subtitleStyle?: TextStyle,

	avatarName?: string,
	avatarSize?: string | number,
	photoComponent?: React.ReactNode,
	photoSource?: object,
	photoStyle?: ImageStyle,
}
export type KeyValueCellProps = AccessoryCellProps & {
	title: string,
	titleStyle?: TextStyle,
	value?: string,
	valueStyle?: TextStyle,
	contentComponent?: React.ReactNode,

	iconComponent?: React.ReactNode,
}
export type SwitchCellProps = AccessoryCellProps & {
	title: string,
	titleStyle?: TextStyle,
	value?: boolean,
	onSwitch?: () => void,

	iconComponent?: React.ReactNode,
}

export default class Table extends React.Component<TableProps> {
}

export { Table };

export class Section extends React.Component<SectionProps> {
}

export class Cell extends React.Component<CellProps> {
}

export class AccessoryCell extends React.Component<AccessoryCellProps> {
}

export class StaticCell extends React.Component<StaticCellProps> {
}

export class TouchableCell extends React.Component<TouchableCellProps> {
}

export class BioCell extends React.Component<BioCellProps> {
}

export class KeyValueCell extends React.Component<KeyValueCellProps> {
}

export class SwitchCell extends React.Component<SwitchCellProps> {
}
