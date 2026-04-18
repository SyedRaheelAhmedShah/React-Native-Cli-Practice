import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Tabs/Home';
import Post from '../Tabs/Post';
import Profile from '../Tabs/Profile';

const BottomTab = createBottomTabNavigator();

const MainDrawer = () => {

  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={require('../../assest/Icons/home.png')}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={require('../../assest/Icons/upload.png')}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={require('../../assest/Icons/profile.png')}
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default MainDrawer;

const styles = StyleSheet.create({});
