import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import React from 'react';
import { Formik, FieldArray } from 'formik';

const DynamicFormField = () => {
  return (
    <Formik
      initialValues={{ users: [''] }}
      onSubmit={values => console.log(values)}
    >
      {({ values, handleChange, handleSubmit }) => (
        <View>
          <FieldArray name="users">
            {({ push, remove }) => (
              <View>
                {values.users.map((item, index) => (
                  <View
                    key={index}
                    style={{ flexDirection: 'row', margin: 10 }}
                  >
                    <TextInput
                      style={{
                        borderWidth: 1,
                        flex: 1,
                        marginRight: 10,
                        padding: 10,
                      }}
                      placeholder={`User ${index + 1}`}
                      value={item}
                      onChangeText={handleChange(`users[${index}]`)}
                    />

                    <TouchableOpacity onPress={() => remove(index)}>
                      <Text style={{ color: 'red' }}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                ))}

                <TouchableOpacity style={{marginBottom:40}} onPress={() => push('')}>
                  <Text
                    style={{
                      color: 'blue',
                      margin: 10,
                      alignSelf: 'center',
                      fontWeight: '500',
                    }}
                  >
                    + Add Field
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </FieldArray>

          <TouchableOpacity
            style={{
              width: '90%',
              backgroundColor: 'blue',
              borderRadius: 10,
              alignSelf: 'center',
            }}
            onPress={handleSubmit}
          >
            <Text
              style={{
                color: 'white',
                margin: 10,
                alignSelf: 'center',
                fontWeight: '500',
                alignSelf: 'center',
              }}
            >
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default DynamicFormField;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTxt: {
    fontSize: 24,
    fontWeight: '500',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  inputField: {
    width: '90%',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 10,
    alignSelf: 'center',
    paddingLeft: 10,
    height: 45,
  },
});
