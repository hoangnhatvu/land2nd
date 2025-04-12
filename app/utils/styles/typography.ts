import { scaleFont } from './mixins';
// FONT FAMILY
export const FONT_FAMILY_BLACK = 'Inter-Black';
export const FONT_FAMILY_BOLD = 'Inter-Bold';
export const FONT_FAMILY_EXTRABOLD = 'Inter-ExtraBold';
export const FONT_FAMILY_EXTRALIGHT = 'Inter-ExtraLight';
export const FONT_FAMILY_LIGHT = 'Inter-Light';
export const FONT_FAMILY_MEDIUM = 'Inter-Medium';
export const FONT_FAMILY_REGULAR = 'Inter-Regular';
export const FONT_FAMILY_SEMIBOLD = 'Inter-SemiBold';
export const FONT_FAMILY_THIN = 'Inter-Thin';

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_BOLD = '700';

// FONT SIZE
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);
export const FONT_SIZE_18 = scaleFont(18);
export const FONT_SIZE_20 = scaleFont(20);
export const FONT_SIZE_22 = scaleFont(22);
export const FONT_SIZE_24 = scaleFont(24);

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_18 = scaleFont(18);
export const LINE_HEIGHT_16 = scaleFont(16);

// FONT STYLE
export const FONT_REGULAR = {
    fontFamily: FONT_FAMILY_REGULAR,
    fontWeight: FONT_WEIGHT_REGULAR
};

const calLineHeight = (fontSize = 14) => {
    return fontSize;
    // return Math.round(fontSize * (DEFAULT_LINEHEIGHT / DEFAULT_FONTSIZE));
};
// label bold
export const SUB_TITLE = {
    fontSize: scaleFont(14),
    lineHeight: calLineHeight(scaleFont(20)),
    letterSpacing: 0.1,
    fontWeight: '400',
};

export const LARGE_TITLE = {
    fontSize: scaleFont(25),
    lineHeight: calLineHeight(scaleFont(24)),
    letterSpacing: 0.1,
    fontWeight: '700',
};

export const MAIN_TITLE = {
    fontSize: scaleFont(16),
    lineHeight: calLineHeight(scaleFont(20)),
    letterSpacing: 0.2,
    fontWeight: '500',
};

export const MEDIUM_TEXT = {
    fontSize: scaleFont(14),
    lineHeight: calLineHeight(scaleFont(16)),
    letterSpacing: 0,
    fontWeight: '500',
};

export const BUTTON_TEXT = {
    fontSize: scaleFont(16),
    lineHeight: calLineHeight(scaleFont(20)),
    letterSpacing: 0,
    fontWeight: '500',
};

export const MEDIUM_TITLE = {
    fontSize: scaleFont(18),
    lineHeight: calLineHeight(scaleFont(24)),
    letterSpacing: 0,
    fontWeight: '700',
};

export const SMALL_TITLE = {
    fontSize: scaleFont(12),
    lineHeight: calLineHeight(scaleFont(22)),
    letterSpacing: 0.4,
    fontWeight: '500',
};

export const SMALL_TEXT = {
    fontSize: scaleFont(10),
    lineHeight: calLineHeight(scaleFont(13)),
    letterSpacing: 0.2,
    fontWeight: '300',
};

export const HIGH_TEXT = {
    fontSize: scaleFont(12),
    lineHeight: calLineHeight(scaleFont(16)),
    letterSpacing: 0.2,
    fontWeight: '700',
};

export const LARGE_TEXT = {
    fontSize: scaleFont(20),
    lineHeight: calLineHeight(scaleFont(30)),
    letterSpacing: 0,
    fontWeight: '700',
};

export const NORMAL_TEXT = {
    fontSize: scaleFont(12),
    lineHeight: calLineHeight(scaleFont(20)),
    letterSpacing: 0,
    fontWeight: '400',
};

export const CATEGORY_TEXT = {
    fontSize: scaleFont(11),
    lineHeight: calLineHeight(scaleFont(20)),
    letterSpacing: 0.2,
    fontWeight: '400',
};

export const PRODUCT_NAME_TEXT = {
    fontSize: scaleFont(24),
    lineHeight: calLineHeight(scaleFont(32)),
    letterSpacing: 0.2,
    fontWeight: '700',
};

export const CONTENT_TEXT = {
    fontSize: scaleFont(14),
    lineHeight: calLineHeight(scaleFont(18)),
    letterSpacing: 0.2,
    fontWeight: '400',
};
