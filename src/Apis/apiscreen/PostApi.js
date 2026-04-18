import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import React, { useContext, useState } from 'react';
import axios from 'axios';
import BASE_URL from '../APIS';
import Custombtn from '../../Components/Custombtn';
import { usecontext } from '../../Screens/Main';
import { useRoute } from '@react-navigation/native';

const PostApi = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const userdata = useContext(usecontext);
  const route = useRoute();

  const postData = async () => {
    const data = { name, email, password };
    try {
      const response = await axios.post(`${BASE_URL}`, data, {
        headers: { Authorization: 'Bearer' + userdata?.token }, //axios.post main sy sy phely URL hota hai, second main data, third main tiken
      });
      Alert.alert('Success', JSON.stringify(response.data));
      setname('');
      setemail('');
      setpassword('');
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={txt => setname(txt)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={txt => setemail(txt)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        value={password}
        onChangeText={txt => setpassword(txt)}
      />

      <Custombtn title={'Post data'} onPress={postData} />
    </View>
  );
};

export default PostApi;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'flex-start', alignItems: 'center' },
  input: {
    width: 350,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 10,
  },
});
