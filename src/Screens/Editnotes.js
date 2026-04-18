import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useContext, useState } from 'react';
import Custombtn from './../Components/Custombtn';
import axios from 'axios';
import BASE_URL from './../Apis/APIS';
import { usecontext } from './Main';
import { useNavigation, useRoute } from '@react-navigation/native';

const Editnotes = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const userdata = useContext(usecontext);

  const [title, settitle] = useState(route.params?.data.title);
  const [content, setcontent] = useState(route.params?.data.content);

  const editForm = async () => {
    try {
      await axios.patch(
        `${BASE_URL}/${route.params.data.id}`,
        {
          title,
          content,
        }
      );

      Alert.alert("Success", "Note Updated ✅");

      navigation.goBack(); // back to home

    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Update failed ❌");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Update Notes Form</Text>

      <TextInput
        style={styles.input}
        placeholder="Change Title"
        value={title}
        onChangeText={settitle}
      />

      <TextInput
        style={styles.input}
        placeholder="Change Content"
        value={content}
        onChangeText={setcontent}
        multiline
      />

      <Custombtn title="Update" onPress={editForm} />

    </View>
  );
};

export default Editnotes;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
  header: {
    fontSize: 28,
    marginTop: 50,
    marginBottom: 40,
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 10,
  },
});