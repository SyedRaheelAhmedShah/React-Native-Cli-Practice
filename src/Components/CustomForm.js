import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

export const CustomForm = ({ value, onchange, placehoder , secureTextEntry}) => {
  return (
    <View style={{ flex: 1 }}>
      <TextInput
        style={{
          width: '90%',
          borderRadius: 5,
          borderWidth: 1,
          marginBottom: 10,
          alignSelf: 'center',
          paddingLeft: 10,
          height: 45,
        }}
        placeholder={placehoder}
        value={value}
        onChangeText={onchange}
        secureTextEntry
      />
    </View>
  );
};
