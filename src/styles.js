import { StyleSheet, Platform, PixelRatio } from 'react-native';

export const tableStyles = StyleSheet.create({
	container: (palette) => ({
		backgroundColor: palette.background,
	}),
	table: Platform.select({
		ios: {
			paddingHorizontal: 16,
		},
		android: {
			paddingHorizontal: 16,
			paddingBottom: 10,
		},
	}),
});

export const sectionStyles = StyleSheet.create({
	container: (palette) => Platform.select({
		ios: {
			marginTop: 26,
		},
		android: {
			marginTop: 16,

			backgroundColor: palette.section,
			overflow: 'hidden',
			borderRadius: 3,
			elevation: 3,
		},
	}),
	cellsContainer: (palette) => ({
		...Platform.select({
			ios: {
				borderRadius: 10,
			}
		}),
		backgroundColor: palette.section,
	}),
	separator: (palette, start, end) => ({
		backgroundColor: palette.separator,
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
	header: (palette) => ({
		alignSelf: 'flex-start',
		color: palette.header,
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
	footer: (palette) => ({
		alignSelf: 'flex-start',
		color: palette.footer,
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
	separator: (palette) => ({
		backgroundColor: palette.separator,

		width: 1 / PixelRatio.get(),
		height: 30,
	}),
	accessory: (accessory, palette, disabled) => {
		const style = {};
		style.tintColor = (accessory === 'disclosure' ? palette.accessory : palette.accent);

		if (disabled) {
			style.tintColor = palette.disabled;
		}
		return style;
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
	title: (palette, disabled) => ({
		alignSelf: 'flex-start',

		fontSize: 17,
		color: disabled ? palette.disabled : palette.title,
	}),
	subtitle: (palette, disabled) => ({
		alignSelf: 'flex-start',

		marginStart: 4,
		marginTop: 1,
		fontSize: 15,
		color: disabled ? palette.disabled : palette.subtitle,
	}),
});

export const touchableCellStyles = StyleSheet.create({
	title: (palette, disabled) => ({
		flex: 1,

		fontSize: 17,
		fontWeight: '600',
		textAlign: 'center',

		color: disabled ? palette.disabled : palette.accent,
	}),
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
	title: (palette, disabled) => ({
		alignSelf: 'flex-start',

		fontSize: 18,
		fontWeight: '500',

		color: disabled ? palette.disabled : palette.title,
	}),
	subtitle: (palette, disabled) => ({
		alignSelf: 'flex-start',

		fontSize: 14,
		marginTop: 2,

		color: disabled ? palette.disabled : palette.subtitle,
	}),
});

export const keyValueCellStyles = StyleSheet.create({
	iconContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		minWidth: 30,

		marginStart: 12,
	},
	contentContainer: (hasAccessory) => ({
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',

		marginStart: 15,
		marginVertical: 10,

		paddingEnd: hasAccessory ? 0 : 15,
	}),
	title: (palette, disabled) => ({
		fontSize: 17,
		color: disabled ? palette.disabled : palette.title,
	}),
	value: (palette, disabled) => ({
		fontSize: 15,
		marginStart: 4,

		color: disabled ? palette.disabled : palette.subtitle,
	}),
	space: {
		flex: 1,
	},
});

export const switchCellStyles = StyleSheet.create({
	iconContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		minWidth: 30,

		marginStart: 12,
	},
	contentContainer: (hasAccessory) => ({
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',

		marginStart: 15,
		marginVertical: 10,

		paddingEnd: hasAccessory ? 0 : 15,
	}),
	title: (palette, disabled) => ({
		fontSize: 17,
		color: disabled ? palette.disabled : palette.title,
	}),
	space: {
		flex: 1,
	},
});
