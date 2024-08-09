import type { Component, ReactNode, Context, Provider, Consumer } from 'react';
import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

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

	children: ReactNode,
	scrollable?: boolean,
	disabled?: boolean,
	mode?: 'grouped' | 'inset-grouped',
}

export interface SectionProps {
	disabled?: boolean,
	mode?: 'grouped' | 'inset-grouped',

	children: ReactNode,
	style?: ViewStyle,

	header?: string,
	headerCapitalized?: boolean,
	headerStyle?: TextStyle,
	headerComponent?: ReactNode,

	footer?: string,
	footerCapitalized?: boolean,
	footerStyle?: TextStyle,
	footerComponent?: ReactNode,

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
	children: ReactNode,
}

export interface AccessoryCellProps extends CommonCellProps {
	accessory?: 'disclosure' | 'details' | 'checkmark',
	accessoryComponent?: ReactNode,
	hideAccessorySeparator?: boolean,
	loading?: boolean,

	onAccessoryPress?: () => void,
}

export interface IconCellProps extends AccessoryCellProps {
	iconComponent?: ReactNode,
	iconContainerStyle?: ViewStyle,

	children?: ReactNode,
	contentComponent?: ReactNode,
	contentContainerStyle?: ViewStyle,
}

export interface StaticCellProps extends IconCellProps {
	title: string,
	titleStyle?: TextStyle,
	titleNumberOfLines?: number,
	titleEllipsizeMode?: 'head' | 'middle' | 'tail' | 'clip',

	subtitle?: string,
	subtitleStyle?: TextStyle,
	subtitleNumberOfLines?: number,
	subtitleEllipsizeMode?: 'head' | 'middle' | 'tail' | 'clip',
}

export interface KeyValueCellProps extends IconCellProps {
	title: string,
	titleStyle?: TextStyle,
	value?: string,
	valueStyle?: TextStyle,
}

export interface SwitchCellProps extends IconCellProps {
	title: string,
	titleStyle?: TextStyle,
	switchOnCell?: boolean,
	value?: boolean,
	onSwitch?: (value: boolean) => void,
}

export interface BioCellProps extends StaticCellProps {
	avatarName?: string,
	avatarSize?: string | number,

	photoComponent?: ReactNode,
	photoSource?: object,
	photoStyle?: ImageStyle,
}

export interface TouchableCellProps extends AccessoryCellProps {
	title: string,
	titleStyle?: TextStyle,
}

export default class Table extends Component<TableProps> {
}

export { Table };

export class Section extends Component<SectionProps> {
}

export class Cell extends Component<CellProps> {
}

export class AccessoryCell extends Component<AccessoryCellProps> {
}

export class IconCell extends Component<IconCellProps> {
}

export class StaticCell extends Component<StaticCellProps> {
}

export class KeyValueCell extends Component<KeyValueCellProps> {
}

export class SwitchCell extends Component<SwitchCellProps> {
}

export class BioCell extends Component<BioCellProps> {
}

export class TouchableCell extends Component<TouchableCellProps> {
}

declare const ThemeContext: Context<Theme>;
declare const ThemeProvider: Provider<Theme>;
declare const ThemeConsumer: Consumer<Theme>;

export { ThemeContext, ThemeProvider, ThemeConsumer };

declare function blendColors(theme: Theme, color: string, accent: string): string;

declare function getColorPalette(theme: Theme, blend: boolean, accent: string): ColorPalette;

export { blendColors, getColorPalette };
