import React from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import { Colors } from '../../utils';

interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  style?: any;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = 20,
  borderRadius = 4,
  style,
}) => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1500,
        easing: Easing.bezier(0.4, 0.0, 0.6, 1),
        useNativeDriver: false,
      })
    ).start();
  }, [animatedValue]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-350, 350],
  });

  return (
    <View
      style={[
        styles.container,
        {
          width,
          height,
          borderRadius,
        },
        style,
      ]}
    >
      <Animated.View
        style={[
          styles.shimmer,
          {
            transform: [{ translateX }],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.LIGHT_GRAY,
    overflow: 'hidden',
  },
  shimmer: {
    width: '100%',
    height: '100%',
    opacity: 0.3,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default Skeleton;