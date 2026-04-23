import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Hook from './Hook';
import Formvalidation from './Screens/Formvalidation';

const Sowcasescreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Hook');
        }}
        style={styles.allbtn}
      >
        <Text style={{ fontSize: 18, fontWeight: '500' }}>Hooks</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ApiList');
        }}
        style={styles.btntxt}
      >
        <Text style={{ fontSize: 18, fontWeight: '500' }}>
          Notes App axios Api
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Formvalidation');
        }}
        style={styles.btntxt}
      >
        <Text style={{ fontSize: 18, fontWeight: '500' }}>Form Validation</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Animation');
        }}
        style={styles.btntxt}
      >
        <Text style={{ fontSize: 18, fontWeight: '500' }}>Animation</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AsynMain');
        }}
        style={styles.btntxt}
      >
        <Text style={{ fontSize: 18, fontWeight: '500' }}>AsynMain</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ReducerPracticeScr');
        }}
        style={styles.btntxt}
      >
        <Text style={{ fontSize: 18, fontWeight: '500' }}>
          Reducer PracticeScr
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Sowcasescreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'flex-start', alignItems: 'center' },
  allbtn: {
    backgroundColor: 'lightblue',
    height: 70,
    width: '70%',
    marginTop: 70,
    borderRadius: 10,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
  },
  btntxt: {
    backgroundColor: 'lightblue',
    height: 70,
    width: '70%',
    marginTop: 30,
    borderRadius: 10,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
  },
});
