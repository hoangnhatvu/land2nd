import React, { useState } from 'react';
import {
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    useAnimatedReaction,
    withTiming
} from 'react-native-reanimated';
import { BottomTabBarProps, BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs';
declare module '@react-navigation/native' {
    export interface BottomTabNavigationEventMap {
        doubleTabPress: {
            canPreventDefault: true;
        };
    }
}
import { NavigationHelpers, ParamListBase, TabNavigationState } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, Mixins } from '../utils';
import { MyText } from '../components';
import { TAB_BAR_HEIGHT, TAB_BAR_WIDTH } from '../constants/constants';

interface TabOptions {
  icon?: string;
  tabLabel: string;
  badgeNumber?: number;
}
interface TabBarProps extends BottomTabBarProps {
  state: TabNavigationState<ParamListBase>;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const TabBar = React.memo((props: TabBarProps) => {
    const { state, descriptors, navigation } = props;
    const [lastPress, setLastTimePress] = useState(0);
    const animationHorizontalValue = useSharedValue(0);

    const insets = useSafeAreaInsets();
    const BOTTOM_INSETS = 56 + insets.bottom;
    const maxHeightAnim = useSharedValue(BOTTOM_INSETS);

    useAnimatedReaction(
        () => state.index,
        (index) => {
            animationHorizontalValue.value = withTiming(index * TAB_BAR_WIDTH, {
                duration: 265,
                easing: Easing.linear
            });
        },
        [state.index]
    );

    const animatedHorizontalStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: animationHorizontalValue.value }]
    }));

    const animatedMaxHeightStyle = useAnimatedStyle(() => ({
        maxHeight: maxHeightAnim.value
    }));

    return (
        <Animated.View
            style={[
                styles.container,
                { paddingBottom: insets.bottom },
                animatedMaxHeightStyle
            ]}>
            <View style={styles.animatedWrapper}>
                <Animated.View
                    style={[styles.animatedView, animatedHorizontalStyle]}
                />
            </View>

            <View style={styles.tabContainer}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const tabOptions = options as unknown as TabOptions;
                    const isFocused = state.index === index;
                    
                    const onPress = () => {
                        const delta = new Date().getTime() - lastPress;
                        if (delta < 200) {
                            navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true
                            });
                            return;
                        }
                        
                        setLastTimePress(new Date().getTime());

                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key
                        });
                    };

                    return (
                        <TouchableWithoutFeedback
                            hitSlop={{
                                bottom: 15,
                                top: 0,
                                left: 15,
                                right: 15
                            }}
                            accessibilityRole="button"
                            accessibilityState={
                                isFocused ? { selected: true } : {}
                            }
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={styles.tabButton}
                            key={`${index}--${route.key}`}>
                            <View style={styles.tabButtonContent}>
                                <Image
                                    style={[
                                        styles.tabIcon,
                                        { 
                                            tintColor: isFocused
                                                ? Colors.PRIMARY
                                                : Colors.PRIMARY_TEXT
                                        }
                                    ]}
                                    source={{ uri: tabOptions.icon }}
                                />
                                <View style={styles.labelContainer}>
                                    <MyText
                                        category={'small.text'}
                                        style={{
                                            color: isFocused
                                                ? Colors.PRIMARY
                                                : Colors.PRIMARY_TEXT,
                                            fontWeight: isFocused ? '400' : '300',
                                        }}
                                        text={tabOptions.tabLabel}
                                    />
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    );
                })}
            </View>
        </Animated.View>
    );
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE
    },
    tabContainer: {
        flexDirection: 'row',
        paddingLeft: 16,
        paddingRight: 16
    },
    tabButton: {
        flex: 1
    },
    tabButtonContent: {
        flex: 1,
        width: TAB_BAR_WIDTH,
        height: TAB_BAR_HEIGHT,
        justifyContent: 'center',
        backgroundColor: 'red',
        paddingTop: 12
    },
    tabIcon: {
        width: Mixins.scale(16),
        height: Mixins.scale(16),
        resizeMode: 'contain'
    },
    labelContainer: {
        flex: 1,
        marginTop: 6
    },
    animatedView: {
        width: Mixins.scale(20),
        height: 2,
        backgroundColor: Colors.PRIMARY,
        left: 16
    },
    animatedWrapper: {
        flex: 1,
        width: TAB_BAR_WIDTH,
        alignItems: 'center'
    }
});

export default TabBar;
