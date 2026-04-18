import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';

const Child = React.memo(({ Handler }) => {
  // pasing function as props to child component
  return (
    <View>
      <Button
        title="count"
        onPress={() => {
          {Handler}
        }}
      />
    </View>
  );
});

const Usecallback = () => {
  // only usecallback hook
  const [count, setcount] = useState(0);

  // const callbackfunc = useCallback(() => {
  //   console.log('re-rendering');
  // }, []);
  // useEffect(() => {
  //   callbackfunc();
  // }, [callbackfunc]);

  const Handler = useCallback(() => {             // pass this function to child component
    setcount(prev => prev + 1);
  }, []);

  return (
    <View
      style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}
    >
      {/* <Text style={{ marginTop: 50, fontSize: 20 }}> Usecallback </Text>
      <Text style={{ marginTop: 50, fontSize: 20 }}> Count: {count} </Text>
      <Button title="count" onPress={() => setcount(prev => prev + 1)} /> */}

      <Text style={{ marginTop: 50, fontSize: 20 }}> Count: {count} </Text>
      <Child Handler={Handler} />
    </View>
  );
};

export default Usecallback;

const styles = StyleSheet.create({});
