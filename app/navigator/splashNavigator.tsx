import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../container/splash';
import { APP_SCREEN } from '../constants';

const Stack = createStackNavigator();

const SplashNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={APP_SCREEN.SPLASH}
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name={APP_SCREEN.SPLASH} component={Splash} />
        </Stack.Navigator>
    );
};

export default SplashNavigator;
