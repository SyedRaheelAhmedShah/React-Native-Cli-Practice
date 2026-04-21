import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Dimensions,
} from 'react-native';
import React, { useCallback } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
  withSpring,
  withDelay,
} from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import Usecallback from '../HookScreen/Usecallback';

const { width, height } = Dimensions.get('window');

const TapGesturePractice = () => {
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(0);

  const doubleTap = useCallback(() => {
    // Reset
    scale.value = 0;
    opacity.value = 1;
    translateY.value = 0;

    // Scale animation (pop + bounce)
    scale.value = withSequence(withSpring(1.2), withSpring(1));

    // Move up slightly
    translateY.value = withTiming(-120, { duration: 600 });

    // Fade out
    opacity.value = withDelay(300, withTiming(0, { duration: 500 }));
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }, { translateY: translateY.value }],
      opacity: opacity.value,
    };
  });

  const AnimatedImage = Animated.createAnimatedComponent(Image);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TapGestureHandler numberOfTaps={2} onActivated={doubleTap}>
        <View style={{ flex: 1 }}>
          <ImageBackground
            resizeMode="contain"
            style={styles.bg}
            source={require('../assest/Images/nature.jpg')}
          >
            <AnimatedImage
              style={[{ width: 80, height: 80, marginTop: 150 }, animatedStyle]}
              source={require('../assest/Images/Filledheart.png')}
            />
          </ImageBackground>
        </View>
      </TapGestureHandler>
    </GestureHandlerRootView>
  );
};

export default TapGesturePractice;

const styles = StyleSheet.create({
  bg: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heart: {
    width: 110,
    height: 110,
  },
});