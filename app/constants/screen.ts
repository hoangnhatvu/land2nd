export const AUTH_STACK = {
  LOGIN: 'LoginScreen',
};

export const MAIN_STACK = {
  SPLASH: 'Splash',
  AUTHEN: 'Authen',
  HOME_TAB: 'HomeTabbar',
  HOME: 'Home',
  NOTIFICATION: 'Notification',
  CART: 'Cart',
  PROFILE: 'Profile',
  SHOPPING: 'Shopping',
};

export const PROFILE_STACK = {
  EDIT_PROFILE: 'EditProfile',
  STORE_LIST: 'StoreList',
  STORE_DETAIL: 'StoreDetail',
  TERM_CONDITION: 'TermCondition',
  CHECK_ORDER: 'CheckOrder',
  CHECK_WARRANTY: 'CheckWarranty',
  CHECK_REWARD_POINT: 'CheckRewardPoint',
};

export const CART_STACK = {
  CART_SCREEN: 'CartScreen',
  ORDER_SCREEN: 'OrderScreen',
  DELIVERY_INFO_SCREEN: 'DeliveryInfoScreen',
};

export const APP_SCREEN = {
  ...AUTH_STACK,
  ...MAIN_STACK,
  ...PROFILE_STACK,
  ...CART_STACK,
};
