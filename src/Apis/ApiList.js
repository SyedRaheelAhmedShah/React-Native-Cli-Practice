import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Login from '../Screens/Login';

const ApiList = () => {
  const navigation = useNavigation(); // <-- move inside component

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
      }}
    >
         <Text
        style={{
          fontSize: 20,
          fontWeight: '500',
          marginTop: 50,
        }}
      >
        Log in for Notes App with Apis
      </Text>

      <Button
        title="Login app"
        onPress={() => {
          navigation.navigate(Login);
        }}
      />

      <Text
        style={{
          fontSize: 20,
          fontWeight: '500',
          marginTop: 50,
          marginBottom: 50,
        }}
      >
        Api Practice{' '}
      </Text>

      <Button title="PostApi" onPress={() => navigation.navigate('PostApi')} />
      <Button
        title="GetApi"
        onPress={() => navigation.navigate('GetApis')} // <-- use string
      />
      <Button title="PutApi" onPress={() => navigation.navigate('PutApi')} />
      <Button
        title="PatchApi"
        onPress={() => navigation.navigate('PatchApi')}
      />
      <Button
        title="DeleteApi"
        onPress={() => navigation.navigate('DeleteApi')}
      />
    </View>
  );
};

export default ApiList;

const styles = StyleSheet.create({});
