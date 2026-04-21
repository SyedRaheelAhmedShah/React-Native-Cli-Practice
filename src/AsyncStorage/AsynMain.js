import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { use, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Custombtn from '../Components/Custombtn';
import { EasingNameSymbol } from 'react-native-reanimated/lib/typescript/Easing';

const AsynMain = () => {
  const [userData, setData] = useState();
  const [showDta, setshowData] = useState();

//   const names = []; // storing name in array

  const saveData = async () => {

    // names.push(userData); // idr usedata wali state main jo name aye ga wo names waly array main push ho jye ga
    // await AsyncStorage.setItem('name', JSON.stringify(names)); // idr array ko set kr dyn gy
    
    await AsyncStorage.setItem('name', userData);
    setData('');
    console.log('data is stored : ' + names);
  };

  const getData = async () => {
    const name = await AsyncStorage.getItem('name');
    if (name) {

      setshowData(name);
      console.log('data is getted');
    } else {
      Alert.alert('no data found');
      console.log('No data in the stack');
    }
  };

  const removeData = async () => {
    await AsyncStorage.removeItem('name');
    setshowData('');
    console.log('data is deleted');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter The Data"
        value={userData}
        onChangeText={text => setData(text)}
        style={styles.input}
      />
      <Custombtn title={'Save Data'} onPress={() => saveData()} />
      <Custombtn title={'Get Data'} onPress={() => getData()} />
      <Custombtn
        title={'Delete Data'}
        onPress={() => {
          removeData();
        }}
      />
      <Text> Store data is :{showDta}</Text>
    </View>
  );
};

export default AsynMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
  input: {
    width: '90%',
    height: 50,
    paddingLeft: 10,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 50,
    alignSelf: 'center',
  },
});
