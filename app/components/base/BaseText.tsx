import React from 'react';
import {
    GestureResponderEvent,
    StyleSheet,
    Text,
    TextStyle
} from 'react-native';
import { Mixins, Typography } from '../../utils';

export const TextVariant = {
    SUB_TITLE: 'sub.title',
    LARGE_TITLE: 'large.title',
    MAIN_TITLE: 'main.title',
    MEDIUM_TEXT: 'medium.text',
    BUTTON_TEXT: 'button.text',
    MEDIUM_TITLE: 'medium.title',
    SMALL_TITLE: 'small.title',
    SMALL_TEXT: 'small.text',
    HIGH_TEXT: 'high.text',
    LARGE_TEXT: 'large.text',
    NORMAL_TEXT: 'normal.text',
    CATEGORY_TEXT: 'category.text',
    PRODUCT_NAME_TEXT: 'product.name.text',
    CONTENT_TEXT: 'content.text',
} as const;

export type TextCategoryVariant =
    | typeof TextVariant.SUB_TITLE
    | typeof TextVariant.LARGE_TITLE
    | typeof TextVariant.MAIN_TITLE
    | typeof TextVariant.MEDIUM_TEXT
    | typeof TextVariant.BUTTON_TEXT
    | typeof TextVariant.MEDIUM_TITLE
    | typeof TextVariant.SMALL_TITLE
    | typeof TextVariant.SMALL_TEXT
    | typeof TextVariant.HIGH_TEXT
    | typeof TextVariant.LARGE_TEXT
    | typeof TextVariant.NORMAL_TEXT
    | typeof TextVariant.CATEGORY_TEXT
    | typeof TextVariant.PRODUCT_NAME_TEXT
    | typeof TextVariant.CONTENT_TEXT;

interface Props {
    text?: string | number;
    addSize?: number;
    onLayout?: any;
    styleBold?: TextStyle;
    numberOfLines?: number;
    ellipsizeMode?: 'middle' | 'head' | 'tail' | 'clip' | undefined;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
    selectable?: boolean;
    category: TextCategoryVariant;
    typeFont?: string;
    style?: TextStyle;
    children?: React.ReactNode;
}

const changeDefaultCategoryStyle = (categoryType = '') => {
    switch (categoryType.toLowerCase()) {
        case TextVariant.SUB_TITLE:
            return Typography.SUB_TITLE;
        case TextVariant.LARGE_TITLE:
            return Typography.LARGE_TITLE;
        case TextVariant.MAIN_TITLE:
            return Typography.MAIN_TITLE;
        case TextVariant.MEDIUM_TEXT:
            return Typography.MEDIUM_TEXT;
        case TextVariant.BUTTON_TEXT:
            return Typography.BUTTON_TEXT;
        case TextVariant.MEDIUM_TITLE:
            return Typography.MEDIUM_TITLE;
        case TextVariant.SMALL_TITLE:
            return Typography.SMALL_TITLE;
        case TextVariant.SMALL_TEXT:
            return Typography.SMALL_TEXT;
        case TextVariant.HIGH_TEXT:
            return Typography.HIGH_TEXT;
        case TextVariant.LARGE_TEXT:
            return Typography.LARGE_TEXT;
        case TextVariant.NORMAL_TEXT:
            return Typography.NORMAL_TEXT;
        case TextVariant.CATEGORY_TEXT:
            return Typography.CATEGORY_TEXT;
        case TextVariant.PRODUCT_NAME_TEXT:
            return Typography.PRODUCT_NAME_TEXT;
        case TextVariant.CONTENT_TEXT:
            return Typography.CONTENT_TEXT;
        default:
            return Typography.CONTENT_TEXT;
    }
};

const MyText = (props: Props) => {
    let fontSize = Typography.FONT_SIZE_14;
    let lineHeight = Typography.LINE_HEIGHT_18;
    if (props.addSize !== null && props.addSize !== undefined) {
        fontSize += Mixins.scaleFont(props.addSize);
        lineHeight =
            fontSize *
            (Typography.LINE_HEIGHT_18 / Typography.FONT_SIZE_14);
    }

    return (
        <Text
            numberOfLines={props.numberOfLines}
            ellipsizeMode={props.ellipsizeMode}
            onPress={props.onPress}
            allowFontScaling={false}
            selectable={props.selectable}
            style={
                StyleSheet.flatten([
                    {
                        color: '#000',
                        fontFamily: 'Inter-Regular',
                        fontSize,
                        lineHeight
                    },
                    props.category
                        ? changeDefaultCategoryStyle(
                            props.category
                        )
                        : {
                            includeFontPadding: false,
                            fontFamily: Typography.FONT_FAMILY_REGULAR,
                            fontWeight: 'normal',
                            backgroundColor: 'transparent'
                        },
                    props.style
                ]) as any
            }>
            {props.text}
            {props.children}
        </Text>
    );
};

export default React.memo(MyText);
