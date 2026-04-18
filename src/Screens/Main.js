import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { createContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainDrawer from './Drawer/MainDrawer';
import { useRoute } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
export const usecontext = createContext();

const Main = () => {
  const routes = useRoute();

  return (
    <usecontext.Provider value={routes.params?.data}>
      // params ky sath '?' es liye lgaya k ager data undefined ho tou app crash
      nah kry
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="BottomTab" component={MainDrawer} />
      </Drawer.Navigator>
    </usecontext.Provider>
  );
};

export default Main;

const styles = StyleSheet.create({});
