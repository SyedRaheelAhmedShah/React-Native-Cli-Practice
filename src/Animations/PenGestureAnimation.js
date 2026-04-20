import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const PenGestureAnimation = () => {
  const valueX = useSharedValue(0);
  const valueY = useSharedValue(0);
  const saveX = useSharedValue(0);
  const saveY = useSharedValue(0);

  const animatedstyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: valueX.value }, { translateY: valueY.value }],
    };
  });

  const gesture = Gesture.Pan()
    .onStart(() => {
      console.log('drag pen gesture');
    })
    .onUpdate(e => {
      valueX.value = saveX.value + e.translationX;
      valueY.value = saveY.value + e.translationY;
    })
    .onEnd(() => {
      saveX.value = valueX.value;
      saveY.value = valueY.value;

      //agr hum chaty hain box phir apni jagha wapis aa jye tou

      // saveX.value = 0;
      // saveY.value = 0;
      // valueX.value = 0;
      // valueY.value = 0;
    });

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={[
            {
              alignSelf: 'center',
              width: 100,
              height: 100,
              backgroundColor: 'orange',
              marginTop: 50,
              borderRadius: 5,
            },
            animatedstyle,
          ]}
        ></Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default PenGestureAnimation;

const styles = StyleSheet.create({});
