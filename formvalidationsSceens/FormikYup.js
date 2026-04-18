import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

const educationData = [
  { label: 'Matric', value: 'matric' },
  { label: 'Intermediate', value: 'intermediate' },
  { label: 'Bachelor', value: 'bachelor' },
];

const FormikYup = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          education: '',
          ageGroup: '',
          isStudent: false,
          terms: false,
        }}
        validationSchema={Yup.object({
          name: Yup.string().min(3).required('Name is required'),
          email: Yup.string().email().required('Email is required'),
          password: Yup.string().min(6).required('Password is required'),
          education: Yup.string().required('Education is required'),
          ageGroup: Yup.string().required('Age group is required'),
          terms: Yup.boolean().oneOf([true], 'Accept terms first'),
        })}
        onSubmit={values => console.log(values)}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          setFieldValue,
          errors,
          touched,
          
        }) => (
          <ScrollView>
            <Text style={styles.headerTxt}>Form Validation</Text>

            {/* NAME */}
            <TextInput
              style={styles.inputField}
              placeholder="Enter Name"
              value={values.name}
              onChangeText={handleChange('name')}
            />
            {touched.name && errors.name && (
              <Text style={styles.error}>{errors.name}</Text>
            )}

            {/* EMAIL */}
            <TextInput
              style={styles.inputField}
              placeholder="Enter Email"
              value={values.email}
              onChangeText={handleChange('email')}
            />
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}

            {/* PASSWORD */}
            <TextInput
              style={styles.inputField}
              placeholder="Enter Password"
              secureTextEntry
              value={values.password}
              onChangeText={handleChange('password')}
            />
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}

            {/* AGE GROUP */}
            <TextInput
              style={styles.inputField}
              placeholder="Enter Age Group"
              value={values.ageGroup}
              onChangeText={handleChange('ageGroup')}
            />
            {touched.ageGroup && errors.ageGroup && (
              <Text style={styles.error}>{errors.ageGroup}</Text>
            )}

            {/* DROPDOWN */}
            <Dropdown
              style={styles.dropDownMenu}
              data={educationData}
              labelField="label"
              valueField="value"
              placeholder="Select Education"
              value={values.education}
              onChange={item => setFieldValue('education', item.value)}
            />
            {touched.education && errors.education && (
              <Text style={styles.error}>{errors.education}</Text>
            )}

            {/* SWITCH */}
            <View style={styles.row}>
              <Text>Are you a student?</Text>
              <Switch
                value={values.isStudent}
                onValueChange={val => setFieldValue('isStudent', val)}
              />
            </View>

            {/* TERMS */}
            <View style={styles.row}>
              <Text>Accept Terms</Text>
              <Switch
                value={values.terms}
                onValueChange={val => setFieldValue('terms', val)}
              />
            </View>
            {touched.terms && errors.terms && (
              <Text style={styles.error}>{errors.terms}</Text>
            )}

            {/* BUTTON */}
            <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
              <Text style={styles.textSubmitBtn}>Submit</Text>
            </TouchableOpacity>
          </ScrollView>
        )}
      </Formik>
    </View>
  );
};

export default FormikYup;

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
    marginBottom: 15,
    alignSelf: 'center',
    paddingLeft: 10,
    height: 45,
  },
  dropDownMenu: {
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  submitBtn: {
    width: '80%',
    height: 50,
    backgroundColor: 'blue',
    marginTop: 30,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSubmitBtn: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
  },
  error: {
    color: 'red',
    marginLeft: 20,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginTop: 15,
  },
});
