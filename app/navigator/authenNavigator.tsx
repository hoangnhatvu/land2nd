import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { APP_SCREEN } from '../constants';
import Login from '../container/login';

type AuthStackParamList = {
  [APP_SCREEN.LOGIN]: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();
interface AuthScreenConfig {
  name: keyof AuthStackParamList;
  component: React.ComponentType<any>;
}

const authScreens: AuthScreenConfig[] = [
  {
    name: APP_SCREEN.LOGIN,
    component: Login
  },
];

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={APP_SCREEN.LOGIN}>
      {authScreens.map((screen) => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AuthStack;