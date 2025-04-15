import { Dimensions, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
export const DEFAULT_STORE_ID = 9961;
export const width = Dimensions.get('screen').width;
export const height = Dimensions.get('screen').height;
export const designWidth = 375;
export const designHeight = 812;
export const widthRatio = width / designWidth;

const THE_NUMBER_OF_ITEM_TAB = 4;
const PADDING_HOR = 32;
export const TAB_BAR_WIDTH = (width - PADDING_HOR) / THE_NUMBER_OF_ITEM_TAB;
export const TAB_BAR_HEIGHT = 64;

export const EMAIL_REGEX =
    /^([a-zA-Z0-9]+(?:[._-][a-zA-Z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum|vn))$/;

export const FULLNAME_CRM_REGEX =
    /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳýỵỷỹ\s\-0-9\&\.\,\+\-\/_\@\'\(\)]+$/;

export const PHONE_REGEX = /^0\d*$/;

export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[A-Z]).{8,}$/;

export const PASSWORD_REQUIRE_REGEX = [
    /^.{8,}$/,
    /^(?=.*[A-Za-z])(?=.*\d).+$/,
    /.*[A-Z].*/
];