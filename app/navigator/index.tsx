import React, {memo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {APP_SCREEN} from '../constants';
import HomeTabbar from './bottomNavigator';
import AuthStack from './authenNavigator';
import {OrderScreen, DeliveryInfoScreen} from '../container/cart';
import Shopping from '../container/shopping';
import TermAndCondition from '../container/profile/TermAndCondition';
import EditProfile from '../container/profile/EditProfile';
import StoreList from '../container/profile/StoreList';
import StoreDetail from '../container/profile/StoreDetail';

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
    component: HomeTabbar,
  },
  {
    name: APP_SCREEN.SHOPPING,
    component: Shopping,
  },
  {
    name: APP_SCREEN.EDIT_PROFILE,
    component: EditProfile,
  },
  {
    name: APP_SCREEN.STORE_LIST,
    component: StoreList,
  },
  {
    name: APP_SCREEN.STORE_DETAIL,
    component: StoreDetail,
  },
  {
    name: APP_SCREEN.TERM_CONDITION,
    component: TermAndCondition,
  },
];

const authScreens: ScreenConfig[] = [
  {
    name: APP_SCREEN.AUTHEN,
    component: AuthStack,
  },
];

const cartScreens: ScreenConfig[] = [
  {
    name: APP_SCREEN.ORDER_SCREEN,
    component: OrderScreen,
  },
  {
    name: APP_SCREEN.DELIVERY_INFO_SCREEN,
    component: DeliveryInfoScreen,
  },
];

const MainNavigator = memo(() => {
  return (
    <RootStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={APP_SCREEN.HOME_TAB}>
      <RootStack.Group>
        {mainScreens.map(screen => (
          <RootStack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </RootStack.Group>

      <RootStack.Group>
        {authScreens.map(screen => (
          <RootStack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </RootStack.Group>

      <RootStack.Group>
        {cartScreens.map(screen => (
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
