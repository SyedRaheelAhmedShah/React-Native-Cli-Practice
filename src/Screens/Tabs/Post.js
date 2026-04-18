import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useContext, useState } from 'react';
import Custombtn from '../../Components/Custombtn';
import axios from 'axios';
import BASE_URL from '../../Apis/APIS';
import { usecontext } from '../Main';

const Post = () => {
  const [title, settitle] = useState('');
  const [content, setcontent] = useState('');
  const userdata = useContext(usecontext);

  const addForm = async () => {
    const data = { title, content };
    try {
      const response = await axios.post(`${BASE_URL}`, data, {
        headers: { Authorization: 'Bearer' + userdata.token }, //axios.post main sy sy phely URL hota hai, second main data, third main tiken
      });
      Alert.alert('Succes', JSON.stringify(response.data));
      settitle('');
      setcontent('');
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Notes Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Title"
        value={title}
        onChangeText={txt => settitle(txt)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Title"
        value={content}
        onChangeText={txt => setcontent(txt)}
        multiline
      />
      <Custombtn title={'Add'} onPress={addForm} />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'flex-start', alignItems: 'center' },
  header: {
    fontSize: 30,
    fontWeight: '400',
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
  input: {
    width: '90%',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 10,
  },
});
