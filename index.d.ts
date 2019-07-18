import React from 'react';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export type Theme = 'light' | 'dark' | 'midnight';

export interface ColorPalette {
	background: string,
	section: string,
	separator: string,
	header: string,
	footer: string,
	accessory: string,
	title: string,
	subtitle: string,
	disabled: string,
	progress: string,

	underlay: string,
	ripple: string,
}

export interface TableProps {
	accentColor?: string,
	theme?: Theme,
	blendAccent?: boolean,
	disabled?: boolean,

	style?: ViewStyle,
	scrollViewStyle?: ViewStyle,

	children: React.ReactNode,
	scrollable?: boolean,
}

export interface SectionProps {
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

export interface CommonCellProps {
	style?: ViewStyle,

	disabled?: boolean,
	onPress?: () => void,
	onLongPress?: () => void,

	customAction?: string,
	customActionType?: 'call' | 'compose' | 'openUrl',
	customActionTrigger?: 'onPress' | 'onLongPress',
}

export interface CellProps extends CommonCellProps {
	children: React.ReactNode,
}

export interface AccessoryCellProps extends CommonCellProps {
	accessory?: 'disclosure' | 'details' | 'checkmark',
	accessoryComponent?: React.ReactNode,
	hideAccessorySeparator?: boolean,
	loading?: boolean,

	onAccessoryPress?: () => void,
}

export interface StaticCellProps extends AccessoryCellProps {
	title: string,
	titleStyle?: TextStyle,
	subtitle?: string,
	subtitleStyle?: TextStyle,
	contentComponent?: React.ReactNode,

	iconComponent?: React.ReactNode,
}

export interface TouchableCellProps extends AccessoryCellProps {
	title: string,
	titleStyle?: TextStyle,
}

export interface BioCellProps extends AccessoryCellProps {
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

export interface KeyValueCellProps extends AccessoryCellProps {
	title: string,
	titleStyle?: TextStyle,
	value?: string,
	valueStyle?: TextStyle,
	contentComponent?: React.ReactNode,

	iconComponent?: React.ReactNode,
}

export interface SwitchCellProps extends AccessoryCellProps {
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

declare const ThemeContext: React.Context<Theme>;
declare const ThemeProvider: React.Provider<Theme>;
declare const ThemeConsumer: React.Consumer<Theme>;

export { ThemeContext, ThemeProvider, ThemeConsumer };
