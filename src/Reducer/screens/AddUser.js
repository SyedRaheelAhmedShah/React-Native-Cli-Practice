import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Custombtn from '../../Components/Custombtn';
import { useDispatch } from 'react-redux';
import { addUser } from '../Slice/UserSlice';
import { useNavigation } from '@react-navigation/native';

const AddUser = () => {
  const navigation = useNavigation();

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [number, setnumber] = useState('');

  const dispatch = useDispatch(); 
// abhi hum ny data store main store krna hai us k liye useDispatch() ka use kiya h. 
// slice ky reducer main jo functions daly hain wo function dispatch main use krty hain 

  const handleSubmit = () => {
    dispatch(addUser({ name, email, number }));

    setname('');
    setemail('');
    setnumber('');

    navigation.goBack(); // go back after adding
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add User</Text>

      <TextInput
        style={styles.inputtxt}
        value={name}
        onChangeText={setname}
        placeholder="Enter Name"
      />

      <TextInput
        style={styles.inputtxt}
        value={email}
        onChangeText={setemail}
        placeholder="Enter Email"
      />

      <TextInput
        style={styles.inputtxt}
        value={number}
        onChangeText={setnumber}
        placeholder="Enter Phone"
      />

      <Custombtn title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default AddUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    marginTop: 20,
  },
  inputtxt: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    paddingLeft: 10,
    borderWidth: 1,
    marginTop: 20,
  },
});
