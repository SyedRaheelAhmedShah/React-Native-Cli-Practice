import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Custombtn from '../Components/Custombtn';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import BASE_URL from './../Apis/APIS';

const Signup = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const registerUser = async () => {
    const data = { name, email, password };
    try { 
      const response = await axios.post(`${BASE_URL}`, data);
      Alert.alert('Success', JSON.stringify(response.data));
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.signuptxt}>Create New Account</Text>

      <TextInput
        style={styles.inputfeildtxt}
        placeholder="Name"
        value={name}
        onChangeText={txt => setName(txt)}
      />
      <TextInput
        style={styles.inputfeildtxt}
        placeholder="Email"
        value={email}
        onChangeText={txt => setEmail(txt)}
      />
      <TextInput
        style={styles.inputfeildtxt}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={txt => setPassword(txt)}
      />

      <Custombtn title="Sign Up" onPress={registerUser} />

      <Text style={{ marginTop: 20 }}>
        Or Already have an Account{' '}
        <Text
          style={{ textDecorationLine: 'underline', color: 'blue' }}
          onPress={() => navigation.navigate('Login')}
        >
          Log in
        </Text>
      </Text>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputfeildtxt: {
    height: 45,
    width: '70%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 15,
    paddingHorizontal: 10,
  },
  signuptxt: {
    fontSize: 30,
    fontWeight: '600',
    alignSelf: 'center',
  },
});
