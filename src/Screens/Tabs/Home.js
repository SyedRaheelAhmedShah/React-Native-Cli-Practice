import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';

import { usecontext } from '../Main';
import { FlatList } from 'react-native-gesture-handler';
import axios from 'axios';
import BASE_URL from '../../Apis/APIS';
import { useIsFocused, useNavigation } from '@react-navigation/native';

const Home = () => {
  const [notes, setnotes] = useState([]);
  const usedata = useContext(usecontext);
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  useEffect(() => {
    getdata();
  }, [isFocused]);

  const getdata = async () => {
    try {
      const response = await axios.get(BASE_URL, {
        headers: { Authorization: 'Bearer ' + usedata.token },
      });
      setnotes(response.data);
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch notes');
    }
  };

  const deleteData = async id => {
    try {
      await axios.delete(`${BASE_URL}/${id}`, {
        headers: {
          Authorization: 'Bearer ' + usedata.token,
        },
      });
      getdata(); // refresh list after delete
    } catch (error) {
      Alert.alert('Error', 'Failed to delete note');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={notes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              width: 400,
              borderWidth: 1,
              borderRadius: 10,
              marginVertical: 10,
              paddingLeft: 10,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
          >
            <Text style={{ padding: 10 }}>{item.title}</Text>
            <Text style={{ padding: 10 }}>{item.content}</Text>
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                width: 300,
                height: 30,
                borderColor: 'blue',
                borderWidth: 1,
                marginBottom: 10,
                borderRadius: 10,
                backgroundColor: 'blue',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                navigation.navigate('Editnotes', { data: item });
              }}
            >
              <Text style={{ color: 'white' }}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                alignSelf: 'center',
                width: 300,
                height: 30,
                borderColor: 'red',
                borderWidth: 1,
                marginBottom: 10,
                borderRadius: 10,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => deleteData(item.id)}
            >
              <Text style={{ color: 'white' }}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
