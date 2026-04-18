import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const AnimationMethods = () => {
  const animation = useSharedValue(0);

  const animationStyle = useAnimatedStyle(() => {
    return { transform: [{ translateX: animation.value }] };
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>AnimationMethods</Text>
      <Animated.View style={[styles.box, animationStyle]}></Animated.View>

      <Button
        title="Use WithTiming"
        onPress={() => {
          if (animation.value == 0) {
            animation.value = withTiming(100, { duration: 500 });
          } else {
            animation.value = withTiming(0, { duration: 500 });
          }
        }}
      />
      <Button
        title="Use Withspring"
        onPress={() => {
          if (animation.value == 0) {
            animation.value = withSpring(100);
          } else {
            animation.value = withSpring(0);
          }
        }}
      />
      <Button
        title="Use Withdelay"
        onPress={() => {
          if (animation.value == 0) {
            animation.value = withDelay(500, withSpring(100));
          } else {
            animation.value = withDelay(500, withSpring(0));
          }
        }}
      />
      <Button
        title="Use WithRepeat"
        onPress={() => {
          if (animation.value == 0) {
            animation.value = withRepeat(
              withTiming(100, { duration: 500 }),
              5,
              false,
            );
          } else {
            animation.value = withRepeat(
              withTiming(0, { duration: 500 }),
              5,
              false,
            ); //infinite ky lie -1 add kr dain r true kr dyn
          }
        }}
      />
      <Button
        title="Use WithSequence"
        onPress={() => {
          if (animation.value == 0) {
            animation.value = withSequence(
              withTiming(30, { duration: 300 }),
              withTiming(50, { duration: 350 }),
              withTiming(80, { duration: 400 }),
              withTiming(100, { duration: 700 }),
            );
          } else {
            animation.value = withSequence(
              withTiming(100, { duration: 300 }),
              withTiming(70, { duration: 350 }),
              withTiming(50, { duration: 400 }),
              withTiming(0, { duration: 700 }),
            );
          }
        }}
      />
    </View>
  );
};

export default AnimationMethods;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
    alignItems: 'center',
  },
  header: { fontSize: 18, fontWeight: '500', alignSelf: 'center', padding: 10 },
  box: {
    width: 100,
    height: 150,
    backgroundColor: 'red',
    alignSelf: 'center',
    borderRadius: 5,
  },
});
