import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Dimensions,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Usestate from './Usestate';

const UseEffect = () => {
  
  const [count1, setcount1] = useState(0);
  const [count2, setcount2] = useState(0);

  useEffect(() => {
    console.log('UseEffect for every time');
  });
  useEffect(() => {
    console.log('UseEffect for one time');
  }, []);
  useEffect(() => {
    console.log('UseEffect for conditional time');
  }, [count1]);

  const Count1 = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 20,
          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Count 1: {count1}
        </Text>
        <Button title="increment" onPress={() => setcount1(count1 + 1)} />
        <Button
          title="decrement"
          onPress={() => setcount1(count1 === 0 ? 0 : count1 - 1)}
        />
      </View>
    );
  };

  const Count2 = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 20,
          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Count 2: {count2}
        </Text>
        <Button title="increment" onPress={() => setcount2(count2 + 1)} />
        <Button
          title="decrement"
          onPress={() => setcount2(count2 === 0 ? 0 : count2 - 1)}
        />
      </View>
    );
  };

  const OrientationListener = () => {
    const [orientation, setorientation] = useState('PORTRAIT');
    useEffect(() => {
      const handleDimentions = () => {
        const { width, height } = Dimensions.get('window');
        setorientation(width > height ? 'LANDSCAPE' : 'PORTRAIT');
      };
      const subscription = Dimensions.addEventListener(
        'change',
        handleDimentions,
      );

      return () => {
        subscription?.remove();
      };
    }, []);

    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}
      >
        <Text>Current Orientation: {orientation}</Text>
      </View>
    );
  };

  const TimersDemo = () => {
    const [countdown, setcountdown] = useState(10);
    const [stopwatch, setstopwatch] = useState(0);
    const [isRunning, setisRunning] = useState(false);
    useEffect(() => {
      let countdowntimer;
      if (countdown > 0) {
        countdowntimer = setInterval(() => {
          setcountdown(prev => prev - 1);
        }, 1000);
      } else {
        clearInterval(countdowntimer);
      }
      return () => {
        clearInterval(countdowntimer);
      };
    }, [countdown]);

    useEffect(() => {
      let stopwatchtimer;
      if (isRunning) {
        stopwatchtimer = setInterval(() => {
          setstopwatch(prev => prev + 1);
        }, 1000);
      } else {
        clearInterval(stopwatchtimer);
      }
      return () => {
        clearInterval(stopwatchtimer);
      };
    }, [isRunning]);
    return (
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 20,
        }}
      >
        <Text>CountDown: {countdown}</Text>
        <Text>StopWatch: {stopwatch}</Text>
        <View style={{ gap: 10, marginTop: 20 }}>
          <Button title="Start stopwatch" onPress={() => setisRunning(true)} />
          <Button title="Stop stopwatch" onPress={() => setisRunning(false)} />
          <Button title="Reset stopwatch" onPress={() => setstopwatch(0)} />
          <Button title="Reset countdown" onPress={() => setcountdown(10)} />
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {/* <Count1 />
      <Count2 />
      <OrientationListener />
      <TimersDemo /> */}
    </View>
  );
};

export default UseEffect;

const styles = StyleSheet.create({});
