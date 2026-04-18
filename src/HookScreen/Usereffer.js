import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  TextInput,
} from 'react-native';
import React, { use, useEffect, useRef, useState } from 'react';

const Usereffer = () => {

const inputRef = useRef(null);
console.log(inputRef);              // checking the useRef 

  const CounterDemo = () => {
    // Previous value storing with using useRef Hook
    const [count, setcount] = useState(0);
    const previousCountRef = useRef(0);
    useEffect(() => { 
      previousCountRef.current = count;
    }, [count]);

    return (
      <View>
        <Text style={{ fontSize: 20, fontWeight: '500', marginTop: 100 }}>
          Current Count : {count}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: '500', marginTop: 10 }}>
          Previous Count : {previousCountRef.current}
        </Text>
        <Button title="Increment" onPress={() => setcount(count + 1)} />
      </View>
    );
  };

  const AutoFocusField = () => {
    const autofocus = useRef(null);
    const autofocus1 = useRef(null);
    const autofocus2 = useRef(null);

    return (
      <View
        style={{
          width: '100%',
          marginTop: 50,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <TextInput
          ref={autofocus}
          style={{
            height: 40,
            width: '80%',
            borderColor: 'gray',
            borderWidth: 1,
          }}
        />
        <TextInput
          ref={autofocus1}
          style={{
            height: 40,
            width: '80%',
            borderColor: 'gray',
            borderWidth: 1,
          }}
        />
        <TextInput
          ref={autofocus2}
          style={{
            height: 40,
            width: '80%',
            borderColor: 'gray',
            borderWidth: 1,
          }}
        />
        <Button
          title="Auto Focus"
          onPress={() => {
            if (autofocus.current.isFocused()) {
              autofocus1.current.focus();
            } else if (autofocus1.current.isFocused()) {
              autofocus2.current.focus();
            } else {
              autofocus.current.focus();
            }
          }}
        />
      </View>
    );
  };

  const TimerRef = () => {
    const [timer, settimer] = useState(0);
    const timerRef = useRef(null);
    useEffect(() => {
      timerRef.current = setInterval(() => {
        settimer(prev => prev + 1);
      }, 1000);

      return () => clearInterval(timerRef.current);
    }, []);

    return (
      <View>
        <Text style={{ fontSize: 20, fontWeight: '500', marginTop: 50 }}>
          Timer : {timer}
        </Text>
        <Button title="Stop" onPress={() => clearInterval(timerRef.current)} />
      </View>
    );
  };

  return (
    <View
      style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}
    >
      {/* <CounterDemo />
      <AutoFocusField />
      <TimerRef /> */}
    </View>
  );
};

export default Usereffer;

const styles = StyleSheet.create({});
