import { Theme as EmotionTheme } from "@emotion/react";

interface ResponsiveSize<TString = string> {
	mobile: TString;
	desktop: TString;
}

interface RowColSize<TString = string> {
	default: TString;
	medium: TString;
	big: TString;
}

export interface Breakpoints<TNumber = number> {
	xs: TNumber;
	sm: TNumber;
	md: TNumber;
	lg: TNumber;
	xl: TNumber;
	xxl: TNumber;
	xxxl: TNumber;
}

export interface Spacing<TString = string> {
	maxWidth: TString;
	maxWidthLimit: TString;
	paddingTopBody: ResponsiveSize<TString>;
	marginContainer: ResponsiveSize<TString>;
	marginRow: RowColSize<TString>;
	gutterCol: RowColSize<TString>;
	breakpoints: [number, number, number, number, number, number, number];
}

export interface Colors<TString = string> {
	primaryLight: TString;
	primary: TString;
	primaryDark: TString;

	secondaryLight: TString;
	secondary: TString;
	secondaryDark: TString;

	tertiaryLight: TString;
	tertiary: TString;
	tertiaryDark: TString;

	dark: TString;
	light: TString;

	grayLight: TString;
	gray: TString;
	grayDark: TString;

	success: TString;
	error: TString;
	warning: TString;
	info: TString;
}

export interface Fonts<TString = string> {
	text: TString;
	head: TString;
	special: TString;
	mono: TString;
}

export interface FontSizes<TString = string> {
	hero1: {
		size: ResponsiveSize<TString>;
		lineheight: ResponsiveSize<TString>;
	};
	hero2: {
		size: ResponsiveSize<TString>;
		lineheight: ResponsiveSize<TString>;
	};
	hero3: {
		size: ResponsiveSize<TString>;
		lineheight: ResponsiveSize<TString>;
	};
	h1: {
		size: ResponsiveSize<TString>;
		lineheight: ResponsiveSize<TString>;
	};
	h2: {
		size: ResponsiveSize<TString>;
		lineheight: ResponsiveSize<TString>;
	};
	h3: {
		size: ResponsiveSize<TString>;
		lineheight: ResponsiveSize<TString>;
	};
	h4: {
		size: ResponsiveSize<TString>;
		lineheight: ResponsiveSize<TString>;
	};
	h5: {
		size: ResponsiveSize<TString>;
		lineheight: ResponsiveSize<TString>;
	};
	h6: {
		size: ResponsiveSize<TString>;
		lineheight: ResponsiveSize<TString>;
	};
	eyebrow: {
		size: ResponsiveSize<TString>;
		lineheight: ResponsiveSize<TString>;
	};
	subtitle: {
		size: ResponsiveSize<TString>;
		lineheight: ResponsiveSize<TString>;
	};
	button: {
		size: ResponsiveSize<TString>;
		lineheight: ResponsiveSize<TString>;
	};
	buttonBig: {
		size: ResponsiveSize<TString>;
		lineheight: ResponsiveSize<TString>;
	};
	lead: {
		size: ResponsiveSize<TString>;
		lineheight: ResponsiveSize<TString>;
	};
	input: {
		size: ResponsiveSize<TString>;
		lineheight: ResponsiveSize<TString>;
	};
	inputBig: {
		size: ResponsiveSize<TString>;
		lineheight: ResponsiveSize<TString>;
	};
	strong: {
		size: ResponsiveSize<TString>;
		lineheight: ResponsiveSize<TString>;
	};
	text: {
		size: ResponsiveSize<TString>;
		lineheight: ResponsiveSize<TString>;
	};
	small: {
		size: ResponsiveSize<TString>;
		lineheight: ResponsiveSize<TString>;
	};
	blockquote: {
		size: ResponsiveSize<TString>;
		lineheight: ResponsiveSize<TString>;
	};
}

export interface Theme extends EmotionTheme {
	isDark?: boolean;
	spacing?: Spacing;
	colors?: Colors;
	fonts?: Fonts;
	sizes?: FontSizes;
}

export interface ThemeProps {
	theme: Theme;
}

export interface ThemeProviderProps {
	children: React.ReactNode;
	theme: Theme;
}
