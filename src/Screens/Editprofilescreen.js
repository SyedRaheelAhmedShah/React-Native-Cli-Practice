import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Editprofilescreen = () => {
  const navigation = useNavigation();
  const [name, setname] = useState('');
  const [bio, setbio] = useState('');

  const updateProfile = async () => {
    const data = { name, bio };
    const response = await axios.post('http://10.0.2.2:3000/profile', data);
    Alert.alert('success', JSON.stringify(response.data));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Change Name"
        maxLength={20}
        value={name}
        onChangeText={txt => setname(txt)}
      />

      <TextInput
        style={styles.input}
        placeholder="Change Bio"
        multiline
        maxLength={80}
        value={bio}
        onChangeText={txt => setbio(txt)}
      />

      <Button title="Update" onPress={updateProfile} />
    </View>
  );
};

export default Editprofilescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontSize: 14,
  },
});
