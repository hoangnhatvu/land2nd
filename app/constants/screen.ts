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
};

export const APP_SCREEN = {
    ...AUTH_STACK,
    ...MAIN_STACK
};
