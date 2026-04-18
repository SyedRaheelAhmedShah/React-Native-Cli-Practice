import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const BasicAnimation = () => {
  const X = useSharedValue(0);
  const Y = useSharedValue(0);

  const wid = useSharedValue(100);
  const hig = useSharedValue(50);

  const opacity = useSharedValue(1);

  const R = useSharedValue(0);
  const T = useSharedValue(0);

  const scale = useSharedValue(1);

  const BoxAnimation = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: X.value }, { translateY: Y.value }],
    };
  });

  const BoxsizeAnimation = useAnimatedStyle(() => ({
    width: wid.value,
    height: hig.value,
  }));

  const BoxOpacity = useAnimatedStyle(() => ({ opacity: opacity.value }));

  const BoxAnimationRightTop = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: R.value }, { translateY: T.value }],
    };
  });

  const Boxscalezooming = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={styles.container}>
      <ScrollView
        style={{ gap: 1, width: '100%' }}
        contentContainerStyle={{
          alignItems: 'center',
          paddingBottom: 50,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={{
            padding: 20,
            fontSize: 18,
            fontWeight: '500',
            alignSelf: 'center',
          }}
        >
          Basic Animations using UsesharedValue & useAnimatedstyles
        </Text>
        {/* animation scale X,Y */}
        <Animated.View style={[styles.box, BoxAnimation]}></Animated.View>
        <Button
          title="Animation X"
          onPress={() => {
            if (X.value == 200) {
              X.value = withTiming(0, { duration: 500 });
            } else {
              X.value = withTiming(200, { duration: 500 });
            }
          }}
        />
        <Button
          title="Animation Y"
          onPress={() => {
            if (Y.value == 400) {
              Y.value = withTiming(0, { duration: 500 });
            } else {
              Y.value = withTiming(400, { duration: 500 });
            }
          }}
        />

        {/* Animation ResizeBox width, height */}
        <Animated.View style={[styles.box, BoxsizeAnimation]}> </Animated.View>
        <Button
          title="Resize width"
          onPress={() => {
            if (wid.value === 100) {
              wid.value = withTiming(250, { duration: 500 });
            } else {
              wid.value = withTiming(100, { duration: 500 });
            }
          }}
        />
        <Button
          title="Resize Height"
          onPress={() => {
            if (hig.value === 50) {
              hig.value = withTiming(150, { duration: 500 });
            } else {
              hig.value = withTiming(50, { duration: 500 });
            }
          }}
        />

        {/* Animation box opacity */}
        <Animated.View style={[styles.box, BoxOpacity]}></Animated.View>
        <Button
          title="Opacity"
          onPress={() => {
            if (opacity.value === 1) {
              opacity.value = withTiming(0.4, { duration: 500 });
            } else {
              opacity.value = withTiming(1, { duration: 500 });
            }
          }}
        />

        {/* Animation Right TOP */}
        <Animated.View
          style={[styles.box, BoxAnimationRightTop, { alignSelf: 'center' }]}
        ></Animated.View>
        <Button
          title="top and right"
          onPress={() => {
            if (R.value === 0 || T.value === 0) {
              {
                (R.value = withTiming(80, { duration: 500 })),
                  (T.value = withTiming(-120, { duration: 500 }));
              }
            } else {
              (R.value = withTiming(0, { duration: 500 })),
                (T.value = withTiming(0, { duration: 500 }));
            }
          }}
        />

        {/* Animation Box scaling zoom in zoonm out */}
        <Animated.View style={[styles.box, Boxscalezooming]}></Animated.View>
        <TouchableOpacity
          style={{
            width: 200,
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
          }}
          onPressIn={() => {
            scale.value = withSpring(1.3);
          }}
          onPressOut={() => {
            scale.value = withSpring(0.5);
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: '500', color: 'white' }}>
            Box Scale
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default BasicAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 5,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    margin: 20,
    borderRadius: 10,
  },
});
