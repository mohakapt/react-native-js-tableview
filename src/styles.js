import { StyleSheet, Platform, PixelRatio } from 'react-native';
import {
	COLOR_BACKGROUND,
	COLOR_HEADER,
	COLOR_TITLE,
	COLOR_DISABLED,
	COLOR_SUBTITLE,
	getColorBackground,
	getColorSection,
	getColorSeparator, getColorHeader, getColorFooter,
} from './assets/colors';

export const tableStyles = StyleSheet.create({
	container: (theme, blend, accent) => ({
		backgroundColor: getColorBackground(theme, blend, accent),
	}),
	table: Platform.select({
		android: {
			paddingHorizontal: 16,
			paddingBottom: 10,
		},
	}),
});

export const sectionStyles = StyleSheet.create({
	container: (theme, blend, accent) => Platform.select({
		ios: {
			marginTop: 26,
		},
		android: {
			marginTop: 16,

			backgroundColor: getColorSection(theme, blend, accent),
			overflow: 'hidden',
			borderRadius: 3,
			elevation: 3,
		},
	}),
	cellsContainer: (theme, blend, accent) => ({
		backgroundColor: getColorSection(theme, blend, accent),
	}),
	separator: (theme, start, end) => ({
		backgroundColor: getColorSeparator(theme),
		height: 1 / PixelRatio.get(),

		marginStart: start,
		marginEnd: end,
	}),
	headerContainer: {
		paddingStart: 16,
		...Platform.select({
			ios: {
				paddingTop: 2,
				paddingBottom: 6,
			},
			android: {
				paddingVertical: 11,
			},
		}),
	},
	header: (theme, accent) => ({
		color: getColorHeader(theme, accent),
		fontSize: Platform.OS === 'ios' ? 13 : 15,
	}),
	footerContainer: {
		paddingStart: 16,
		...Platform.select({
			ios: {
				paddingTop: 6,
			},
			android: {
				paddingVertical: 7,
			},
		}),
	},
	footer: (theme) => ({
		color: getColorFooter(theme),
		fontSize: 13,
	}),
});

export const accessoryCellStyles = StyleSheet.create({
	cell: {
		flexDirection: 'row',
		alignItems: 'center',
		minHeight: 44,
	},
	container: {
		...Platform.select({
			ios: {
				marginEnd: 10,

				paddingStart: 12,
				paddingEnd: 6,
				paddingVertical: 8,
			},
			android: {
				marginHorizontal: 4,
				padding: 8,

				overflow: 'hidden',
				borderRadius: 5,
			},
		}),
	},
	separator: {
		width: 1 / PixelRatio.get(),
		height: 30,
	},
});

export const staticCellStyles = StyleSheet.create({
	iconContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		minWidth: 30,

		marginStart: 12,
	},
	contentContainer: {
		flex: 1,
		justifyContent: 'center',

		marginStart: 15,
		marginEnd: 6,

		marginVertical: 10,
	},
	title: {
		fontSize: 17,
	},
	disabledTitle: {
		color: COLOR_DISABLED,
	},
	subtitle: {
		marginStart: 4,
		marginTop: 1,
		fontSize: 15,
		color: COLOR_SUBTITLE,
	},
});

export const touchableCellStyles = StyleSheet.create({
	title: {
		flex: 1,

		fontSize: 17,
		fontWeight: '600',
		textAlign: 'center',
	},
	disabledTitle: {
		color: COLOR_DISABLED,
	},
});

export const bioCellStyles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	image: {
		width: 68,
		height: 68,

		borderRadius: Platform.OS === 'ios' ? 20 : 34,
		marginVertical: 16,
		marginStart: 16,
	},
	infoContainer: {
		flex: 1,
		marginStart: 16,
	},
	title: {
		fontSize: 18,
		fontWeight: '500',
		color: COLOR_TITLE,
	},
	subtitle: {
		fontSize: 14,
		color: COLOR_SUBTITLE,
		marginTop: 2,
	},
});

export const keyValueCellStyles = StyleSheet.create({
	iconContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		minWidth: 30,

		marginStart: 12,
	},
	contentContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',

		marginStart: 15,
		marginVertical: 10,
	},
	title: {
		fontSize: 17,
	},
	value: {
		fontSize: 15,
		color: COLOR_SUBTITLE,

		marginStart: 4,
	},
	space: {
		flex: 1,
	},
});
