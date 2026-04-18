import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const TransformationAnimation = () => {
  const X = useSharedValue(0);
  const Y = useSharedValue(0);
  const rotate = useSharedValue('0deg');
  const scale = useSharedValue(1);
  const skew = useSharedValue('0deg');

  const AnimationsBox = useAnimatedStyle(() => ({
    transform: [
      { translateX: X.value },
      { translateY: Y.value },
      { rotate: rotate.value },
      { scale: scale.value },
      { skewX: skew.value },
    ],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, AnimationsBox]}></Animated.View>
      <Button
        title="rogh to left "
        onPress={() => {
          if (X.value == 0) {
            X.value = withTiming(100, { duration: 500 });
          } else {
            X.value = withTiming(0, { duration: 500 });
          }
        }}
      />
      <Button
        title="Top to Bottom "
        onPress={() => {
          if (Y.value == 0) {
            Y.value = withTiming(150, { duration: 500 });
          } else {
            Y.value = withTiming(0, { duration: 500 });
          }
        }}
      />

      <Button
        title="Rotate"
        onPress={() => {
          if (rotate.value == '0deg') {
            rotate.value = withTiming('180deg', { duration: 500 });
          } else {
            rotate.value = withTiming('0deg', { duration: 500 });
          }
        }}
      />
      <Button
        title="Scale"
        onPress={() => {
          if (scale.value == 1) {
            scale.value = withTiming(1.5, { duration: 500 });
          } else {
            scale.value = withTiming(1, { duration: 500 });
          }
        }}
      />

      <Button
        title="Skew X"
        onPress={() => {
          if (skew.value === '0deg') {
            skew.value = withTiming('30deg', { duration: 500 });
          } else {
            skew.value = withTiming('0deg', { duration: 500 });
          }
        }}
      />

      <Button
        title="rotate & to right & scale"
        onPress={() => {
          if (X.value == 0) {
            X.value = withTiming(100, { duration: 500 });
            rotate.value = withTiming('180deg', { duration: 500 });
            scale.value = withTiming(1.2, { duration: 500 });
          } else {
            X.value = withTiming(0, { duration: 500 });
            rotate.value = withTiming('0deg', { duration: 500 });
            scale.value = withTiming(0.5, { duration: 500 });
          }
        }}
      />
    </View>
  );
};

export default TransformationAnimation;

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
