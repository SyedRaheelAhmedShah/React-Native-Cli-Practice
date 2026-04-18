import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const InterpolateAnimation = () => {
  const X = useSharedValue(0);

  const animationBox = useAnimatedStyle(() => {
    const opacity = interpolate(
      //interpolate ko useAnimationStyle ky ander use kiya jata hai
      X.value,
      [0, 50, 100],
      [1, 0.5, 0],
      Extrapolation.CLAMP,
    );
    const height = interpolate(
      X.value,
      [0, 50, 100],
      [100, 50, 0],
      Extrapolation.CLAMP,
    );

    const scale = interpolate(
      X.value,
      [0, 50, 100],
      [1, 0.5, 0.2],
      Extrapolation.CLAMP,
    );
    const rotatevalue = interpolate(
      X.value,
      [0, 50, 100],
      ['0deg', '30deg', '45deg'],
      Extrapolation.CLAMP,
    );
    const rotate = `${rotatevalue}deg`;
    return {
      transform: [{ translateX: X.value }, { scale }, { rotate }],
      opacity,
      height,
    };
  });
  return (
    <View style={styles.container}>
      <Text>InterpolateAnimation</Text>
      <Animated.View style={[styles.box, animationBox]}></Animated.View>
      <Button
        title="InterPolate Animation"
        onPress={() => {
          if (X.value === 0) {
            X.value = withTiming(150, { duration: 500 });
          } else {
            X.value = withTiming(0, { duration: 500 });
          }
        }}
      />
    </View>
  );
};

export default InterpolateAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 15,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    marginTop: 50,
    borderRadius: 5,
    alignSelf: 'center',
  },
});
