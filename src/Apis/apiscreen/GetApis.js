import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from '../../Apis/APIS';

const GetApis = () => {
  const [data, setdata] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setdata(response.data);
    } catch (error) {
      console.log('fetching error', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const noteDelete = async id => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      getData();
    } catch (error) {
      console.log('error detect', error);
    }
  };

  return (
    <View
      style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}
    >
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              width: '100%',
              borderWidth: 1,
              borderRadius: 10,
              marginVertical: 10,
              paddingLeft: 10,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
          >
            <Text style={{ padding: 10 }}>{item.email}</Text>

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
              onPress={() => noteDelete(item.id)}
            >
              <Text style={{ color: 'white' }}>Edit</Text>
            </TouchableOpacity>

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
              onPress={() => noteDelete(item.id)}
            >
              <Text style={{ color: 'white' }}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default GetApis;

const styles = StyleSheet.create({});
