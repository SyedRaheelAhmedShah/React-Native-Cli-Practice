import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Custombtn from '../Components/Custombtn';

const Formvalidation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Custombtn
        title={'Formik'}
        onPress={() => navigation.navigate('FormikYup')}
      />
      <Custombtn
        title={'DynamicForm'}
        onPress={() => navigation.navigate('DynamicForm')}
      />

      <Custombtn
        title={'DynamicFormField'}
        onPress={() => navigation.navigate('DynamicFormField')}
      />
    </View>
  );
};

export default Formvalidation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
