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
	colorPalette?: (ColorPalette) | ((colorPalette: ColorPalette) => ColorPalette),

	style?: ViewStyle,
	scrollViewStyle?: ViewStyle,

	children: React.ReactNode,
	scrollable?: boolean,
	disabled?: boolean,
	mode?: 'grouped' | 'inset-grouped',
}

export interface SectionProps {
	disabled?: boolean,
	mode?: 'grouped' | 'inset-grouped',

	children: React.ReactNode,
	style?: ViewStyle,

	header?: string,
	headerCapitalized?: boolean,
	headerStyle?: TextStyle,
	headerComponent?: React.ReactNode,

	footer?: string,
	footerCapitalized?: boolean,
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
	titleNumberOfLines?: number,
	titleEllipsizeMode?: 'head' | 'middle' | 'tail' | 'clip',

	subtitle?: string,
	subtitleStyle?: TextStyle,
	subtitleNumberOfLines?: number,
	subtitleEllipsizeMode?: 'head' | 'middle' | 'tail' | 'clip',

	iconComponent?: React.ReactNode,
	iconContainerStyle?: ViewStyle,

	contentComponent?: React.ReactNode,
	contentContainerStyle?: ViewStyle,
}

export interface TouchableCellProps extends AccessoryCellProps {
	title: string,
	titleStyle?: TextStyle,
}

export interface BioCellProps extends StaticCellProps {
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
	switchOnCell?: boolean,
	value?: boolean,
	onSwitch?: (value: boolean) => void,

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

declare function blendColors(theme: Theme, color: string, accent: string): string;

declare function getColorPalette(theme: Theme, blend: boolean, accent: string): ColorPalette;

export { blendColors, getColorPalette };
