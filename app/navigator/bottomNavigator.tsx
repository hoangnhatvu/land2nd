import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import TabBar from './Tabbar';
import Notification from '../container/notification';
import { APP_SCREEN } from '../constants';
import Home from '../container/home';
import Cart from '../container/cart';
import Profile from '../container/profile';

type TabParamList = {
    [APP_SCREEN.HOME]: undefined;
    [APP_SCREEN.NOTIFICATION]: undefined;
    [APP_SCREEN.CART]: undefined;
    [APP_SCREEN.PROFILE]: undefined;
};

const Stack = createBottomTabNavigator<TabParamList>();
interface TabItemConfig {
    name: keyof TabParamList;
    label: string;
    component: React.ComponentType<any>;
    icon: string;
    badgeNumber: number;
}

const tabItems: TabItemConfig[] = [
    {
        name: APP_SCREEN.HOME,
        label: 'TRANG CHỦ',
        component: Home,
        icon: 'ic_home',
        badgeNumber: 0
    },
    {
        name: APP_SCREEN.NOTIFICATION,
        label: 'THÔNG BÁO',
        component: Notification,
        icon: 'ic_notification',
        badgeNumber: 0
    },
    {
        name: APP_SCREEN.CART,
        label: 'GIỎ HÀNG',
        component: Cart,
        icon: 'ic_cart',
        badgeNumber: 0
    },
    {
        name: APP_SCREEN.PROFILE,
        label: 'CÁ NHÂN',
        component: Profile,
        icon: 'ic_user',
        badgeNumber: 0
    }
];

const HomeTabbar: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}>
            {tabItems.map((tab) => (
                <Stack.Screen
                    key={tab.name}
                    name={tab.name}
                    component={tab.component}
                    options={(_route) =>
                    ({
                        icon: tab.icon,
                        badgeNumber: tab.badgeNumber,
                        tabLabel: tab.label
                    } as any)
                    }
                />
            ))}
        </Stack.Navigator>
    );
};

export default HomeTabbar;