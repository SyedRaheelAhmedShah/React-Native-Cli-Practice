import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import BASE_URL from './../Apis/APIS';
import Custombtn from '../Components/Custombtn';
import { useNavigation } from '@react-navigation/native';
import Main from './Main';

const Login = () => {
  const navigation = useNavigation();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const LoginUser = async () => {
    const data = { email, password };

    try {
      const response = await axios.post(`${BASE_URL}`, data);
      Alert.alert('Success', JSON.stringify(response.data));
      navigation.navigate('Main', { data: response.data });
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logintxt}>Login</Text>
      <TextInput
        style={styles.inputfeildtxt}
        placeholder="Email"
        value={email}
        onChangeText={txt => setemail(txt)}
      />
      <TextInput
        style={styles.inputfeildtxt}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={txt => setpassword(txt)}
      />

      <Custombtn
        onPress={() => {
          LoginUser();
        }}
        title="LogIn"
      />

      <Text style={styles.signupText}>
        Or create new account
        <Text
          style={{ color: 'blue', textDecorationLine: 'underline' }}
          onPress={() => navigation.navigate('Signup')}
        >
          Signup
        </Text>
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logintxt: {
    fontSize: 30,
    fontWeight: '600',
    alignSelf: 'center',
    marginBottom: 30,
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
  signupText: {
    marginTop: 20,
    fontSize: 16,
  },
});
