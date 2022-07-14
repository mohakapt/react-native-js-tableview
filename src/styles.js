import { Platform, StyleSheet } from 'react-native';

export const tableStyles = StyleSheet.create({
	container: (palette) => ({
		backgroundColor: palette.background,
	}),
	table: Platform.select({
		default: {
			paddingBottom: 10,
		},
	}),
});

export const sectionStyles = StyleSheet.create({
	container: (palette, inset) => Platform.select({
		ios: {
			marginTop: 26,
			marginHorizontal: inset ? 16 : 0,
		},
		default: {
			marginTop: 16,
			marginHorizontal: inset ? 16 : 0,

			backgroundColor: palette.section,
			overflow: 'hidden',
			borderRadius: inset ? 3 : 0,
			elevation: inset ? 3 : 1,
		},
	}),
	cellsContainer: (palette, inset) => ({
		backgroundColor: palette.section,
		overflow: 'hidden',

		...Platform.select({
			ios: {
				borderRadius: inset ? 10 : 0,
			},
		}),
	}),
	separator: (palette, start, end) => ({
		backgroundColor: palette.separator,
		height: StyleSheet.hairlineWidth,

		marginVertical: -StyleSheet.hairlineWidth,
		marginStart: start,
		marginEnd: end,

		zIndex: 1000,
	}),
	sectionSeparator: (palette) => ({
		backgroundColor: palette.separator,
		height: StyleSheet.hairlineWidth,

		zIndex: 1000,
	}),
	headerContainer: (inset) => Platform.select({
		ios: {
			paddingHorizontal: inset ? 20 : 16,
			paddingTop: 2,
			paddingBottom: inset ? 7 : 6,
		},
		default: {
			paddingHorizontal: 16,
			paddingVertical: 11,
		},
	}),
	header: (palette) => ({
		alignSelf: 'flex-start',
		color: palette.header,
		fontSize: Platform.OS === 'ios' ? 13 : 15,
	}),
	footerContainer: (inset) => Platform.select({
		ios: {
			paddingHorizontal: inset ? 20 : 16,
			paddingTop: inset ? 7 : 6,
		},
		default: {
			paddingHorizontal: 16,
			paddingVertical: 7,
		},
	}),
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
	container: Platform.select({
		ios: {
			marginEnd: 10,

			paddingStart: 12,
			paddingEnd: 6,
			paddingVertical: 8,
		},
		default: {
			marginHorizontal: 4,
			padding: 8,

			overflow: 'hidden',
			borderRadius: 5,
		},
	}),
	separator: (palette) => ({
		backgroundColor: palette.separator,

		width: StyleSheet.hairlineWidth,
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
