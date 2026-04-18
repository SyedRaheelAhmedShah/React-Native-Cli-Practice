import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

const DynamicForm = () => {
  
  const [checked, setChecked] = useState(false);

  const User = [
    {
      field: 'TEXTINPUT',
      data: { placeholder: 'Enter Name', maxLength: 30 },
    },
    {
      field: 'TEXTINPUT',
      data: { placeholder: 'Enter Email', maxLength: 30 },
    },
    {
      field: 'TEXT',
      data: { value: 'xysj12d' },
    },
    {
      field: 'TEXTINPUT',
      data: { placeholder: 'Enter Phone', maxLength: 15 },
    },
    {
      field: 'CHECKBOX',
      data: { title: 'I accept all conditions' },
    },
    {
      field: 'BUTTON',
      data: { backgroundColor: '#4CAF50', title: 'Submit' },
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Dynamic Form</Text>

      <FlatList
        data={User}
        renderItem={({ item }) => (
          <View>
            {item.field == 'TEXTINPUT' ? (
              <TextInput
                style={styles.input}
                placeholder={item.data.placeholder}
                placeholderTextColor="#888"
              />
            ) : item.field == 'TEXT' ? (
              <Text style={styles.text}>{item.data.value}</Text>
            ) : item.field == 'CHECKBOX' ? (
              <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={() => setChecked(!checked)}
              >
                <View style={styles.checkbox}>
                  {checked && <View style={styles.checked} />}
                </View>
                <Text style={styles.checkboxText}>{item.data.title}</Text>
              </TouchableOpacity>
            ) : item.field == 'BUTTON' ? (
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: item.data.backgroundColor },
                ]}
                onPress={() => alert('Form Submitted')}
              >
                <Text style={styles.buttonText}>{item.data.title}</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default DynamicForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F7FA',
  },

  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 2, // Android shadow
  },

  text: {
    fontSize: 16,
    marginVertical: 10,
    color: '#555',
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },

  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: '#4CAF50',
    borderRadius: 5,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  checked: {
    width: 12,
    height: 12,
    backgroundColor: '#4CAF50',
    borderRadius: 2,
  },

  checkboxText: {
    fontSize: 14,
    color: '#333',
  },

  button: {
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 10,
    elevation: 3,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
