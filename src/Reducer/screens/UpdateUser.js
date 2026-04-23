import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Custombtn from '../../Components/Custombtn';
import { useDispatch } from 'react-redux';
import { updateUser } from '../Slice/UserSlice';
import { useNavigation, useRoute } from '@react-navigation/native';

const UpdateUser = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { item, index } = route.params;

  const [name, setname] = useState(item.name);
  const [email, setemail] = useState(item.email);
  const [number, setnumber] = useState(item.number);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      updateUser({
        index: index,
        data: { name, email, number },
      }),
    );

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Update User</Text>

      <TextInput style={styles.inputtxt} value={name} onChangeText={setname} />
      <TextInput
        style={styles.inputtxt}
        value={email}
        onChangeText={setemail}
      />
      <TextInput
        style={styles.inputtxt}
        value={number}
        onChangeText={setnumber}
      />

      <Custombtn title="Update" onPress={handleSubmit} />
    </View>
  );
};

export default UpdateUser;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
  header: { fontSize: 20, marginTop: 20 },
  inputtxt: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    paddingLeft: 10,
    borderWidth: 1,
    marginTop: 20,
  },
});
