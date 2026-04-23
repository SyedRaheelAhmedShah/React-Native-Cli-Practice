import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddUser from './AddUser';
import UpdateUser from './UpdateUser';
import AllUsersList from './AllUsersList';

const stack = createNativeStackNavigator();

const ReducerPracticeScr = () => {
  return <AllUsersList />;
};

export default ReducerPracticeScr;

const styles = StyleSheet.create({});
