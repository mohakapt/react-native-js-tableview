/* @flow */

import { StyleSheet, Platform, PixelRatio } from 'react-native';
import {
	ACCENT_COLOR,
	BACKGROUND_COLOR,
	HEADER_COLOR,
	TITLE_COLOR,
	DISABLED_COLOR,
	SUBTITLE_COLOR,
} from './assets/colors';

export const tableStyles = StyleSheet.create({
	container: {
		backgroundColor: BACKGROUND_COLOR,
		...Platform.select({
			android: {
				marginHorizontal: 6,
				marginBottom: 6,
				paddingHorizontal: 10,
				paddingBottom: 4,
			},
		}),
	},
});

export const sectionStyles = StyleSheet.create({
	container: {
		...Platform.select({
			ios: {
				marginTop: 26,
			},
			android: {
				marginTop: 16,

				backgroundColor: 'white',
				overflow: 'hidden',
				borderRadius: 3,
				elevation: 3,
			},
		}),
	},
	separator: {
		height: 1 / PixelRatio.get(),
	},
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
	header: {
		color: HEADER_COLOR,
		fontSize: Platform.OS === 'ios' ? 13 : 15,
	},
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
	footer: {
		color: HEADER_COLOR,
		fontSize: 13,
	},
	cellsContainer: {
		backgroundColor: 'white',
	},
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
		color: DISABLED_COLOR,
	},
	subtitle: {
		marginStart: 4,
		marginTop: 1,
		fontSize: 15,
		color: SUBTITLE_COLOR,
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
		color: DISABLED_COLOR,
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
		color: TITLE_COLOR,
	},
	subtitle: {
		fontSize: 14,
		color: SUBTITLE_COLOR,
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
		color: SUBTITLE_COLOR,

		marginStart: 4,
	},
	space: {
		flex: 1,
	},
});
