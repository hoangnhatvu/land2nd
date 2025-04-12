import { Dimensions, PixelRatio } from 'react-native';

export const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375; // iPhone 6 width

export const scaleSize = (size: number) => (width / guidelineBaseWidth) * size;
export const scaleFont = (size: number) => {
    return size;
};

const scale = (size: number) =>
    PixelRatio.roundToNearestPixel((width / guidelineBaseWidth) * size);

const moderateScale = (size: number, factor = 0.5) =>
    size + (scale(size) - size) * factor;

export { scale, moderateScale };
