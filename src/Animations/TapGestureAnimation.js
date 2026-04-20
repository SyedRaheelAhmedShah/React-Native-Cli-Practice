import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { runOnJS } from 'react-native-worklets';

const TapGestureAnimation = () => {


  const [likes, setlikes] = useState(false);
  const valueY = useSharedValue(0);
  const scale = useSharedValue(0.5);
  const rotate = useSharedValue('0deg');

  const animatedStyle = useAnimatedStyle(() => {

    return {

      transform: [
        { translateY: valueY.value },
        { scale: scale.value },
        { rotate: rotate.value },
      ],
    };
  });
  const updatesetlikes = () => {

    if (!likes) {
      setlikes(prev => !prev);
    } else {
      setlikes(prev => prev);
    }
  };

  const gesture = Gesture.Tap()
    .numberOfTaps(1)
    .onEnd(() => {
      valueY.value = withSequence(
        withTiming(-150, { duration: 500 }),
        withTiming(0, { duration: 500 }),
      );
      scale.value = withSequence(
        withTiming(1, { duration: 200 }),
        withTiming(0.5, { duration: 500 }),
      );
      rotate.value = withSequence(
        withTiming('-45deg', { duration: 80 }),
        withTiming('45deg', { duration: 80 }),
        withTiming('0deg', { duration: 80 }),
      );

      runOnJS(updatesetlikes)();
    });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GestureDetector gesture={gesture}>
        <Animated.Image
          style={[styles.animateImage, animatedStyle]}
          source={
            likes
              ? require('../assest/Images/Filledheart.png')
              : require('../assest/Images/blankheart.png')
          }
        />
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default TapGestureAnimation;

const styles = StyleSheet.create({
  animateImage: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginTop: 200,
  },
});



                      //heart animation


// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withTiming,
//   withDelay,
//   runOnJS,
// } from 'react-native-reanimated';

// // ─── Single burst heart ───────────────────────────────────────────────────────
// const Heart = ({ delay, trigger }) => {
//   // Each heart gets a fixed random direction on first render
//   const randomX = React.useRef(Math.random() * 120 - 60).current;

//   const translateY = useSharedValue(0);
//   const translateX = useSharedValue(0);
//   const opacity = useSharedValue(0);

//   useEffect(() => {
//     if (trigger === 0) return; // skip initial mount

//     // Reset to center
//     translateY.value = 0;
//     translateX.value = 0;
//     opacity.value = 1;

//     // Burst outward
//     translateY.value = withDelay(delay, withTiming(-150, { duration: 800 }));
//     translateX.value = withDelay(delay, withTiming(randomX, { duration: 800 }));
//     opacity.value = withDelay(delay, withTiming(0, { duration: 800 }));
//   }, [trigger]);

//   const animatedStyle = useAnimatedStyle(() => ({
//     transform: [
//       { translateY: translateY.value },
//       { translateX: translateX.value },
//     ],
//     opacity: opacity.value,
//   }));

//   return (
//     <Animated.View style={[styles.burstHeart, animatedStyle]}>
//       {/* Replace with your own heart image or use emoji text */}
//       <Animated.Text style={styles.heartEmoji}>❤️</Animated.Text>
//     </Animated.View>
//   );
// };

// // ─── Main Component ───────────────────────────────────────────────────────────
// const TapGestureAnimation = () => {
//   const [trigger, setTrigger] = useState(0);

//   const mainScale = useSharedValue(1);

//   const mainStyle = useAnimatedStyle(() => ({
//     transform: [{ scale: mainScale.value }],
//   }));

//   const handlePress = () => {
//     // Pulse the main heart
//     mainScale.value = withTiming(1.3, { duration: 100 }, () => {
//       mainScale.value = withTiming(1, { duration: 150 });
//     });

//     // Trigger burst
//     setTrigger(prev => prev + 1);
//   };

//   const hearts = Array.from({ length: 10 });

//   return (
//     <View style={styles.container}>
//       {/* Burst hearts rendered behind the main heart */}
//       {hearts.map((_, i) => (
//         <Heart key={i} delay={i * 80} trigger={trigger} />
//       ))}

//       {/* Main tappable heart */}
//       <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
//         <Animated.Text style={[styles.mainHeart, mainStyle]}>❤️</Animated.Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default TapGestureAnimation;

// // ─── Styles ───────────────────────────────────────────────────────────────────
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   mainHeart: {
//     fontSize: 64,
//   },
//   burstHeart: {
//     position: 'absolute',
//   },
//   heartEmoji: {
//     fontSize: 26,
//   },
// });
