/* @flow */

import { StyleSheet, Platform, PixelRatio } from 'react-native';
import { COLOR_GREY_LIGHT } from '../../config/colors';

export const tableStyles = StyleSheet.create({
	container: {
		marginHorizontal: Platform.OS === 'ios' ? 0 : 16,
		paddingBottom: Platform.OS === 'ios' ? 0 : 10,
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

				backgroundColor: '#fff',
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
		color: '#6D6D72',
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
		color: '#6D6D72',
		fontSize: 13,
	},
	cellsContainer: {
		backgroundColor: '#fff',
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
		color: COLOR_GREY_LIGHT,
	},
	subtitle: {
		marginStart: 4,
		marginTop: 1,
		fontSize: 15,
		color: '#8E8E93',
	},
});

export const touchableCellStyles = StyleSheet.create({
	title: {
		flex: 1,

		fontSize: 17,
		fontWeight: '600',
		textAlign: 'center',

		color: '#4DB6AC',
	},
	disabledTitle: {
		color: COLOR_GREY_LIGHT,
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
		color: '#253545',
	},
	subtitle: {
		fontSize: 14,
		color: '#A9A9A9',
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
		color: '#8E8E93',

		marginStart: 4,
	},
	space: {
		flex: 1,
	},
});
