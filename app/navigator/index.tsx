import React, { memo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { APP_SCREEN } from '../constants';
import HomeTabbar from './bottomNavigator';
import AuthStack from './authenNavigator';

type RootStackParamList = {
  [APP_SCREEN.HOME_TAB]: undefined;
  [APP_SCREEN.AUTHEN]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

interface ScreenConfig {
  name: keyof RootStackParamList;
  component: React.ComponentType<any>;
}

const mainScreens: ScreenConfig[] = [
  {
    name: APP_SCREEN.HOME_TAB,
    component: HomeTabbar
  }
];

const authScreens: ScreenConfig[] = [
  {
    name: APP_SCREEN.AUTHEN,
    component: AuthStack
  }
];

const MainNavigator = memo(() => {
  return (
    <RootStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={APP_SCREEN.HOME_TAB}>
      
      <RootStack.Group>
        {mainScreens.map((screen) => (
          <RootStack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </RootStack.Group>
      
      <RootStack.Group>
        {authScreens.map((screen) => (
          <RootStack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </RootStack.Group>
    </RootStack.Navigator>
  );
});

export default MainNavigator;
