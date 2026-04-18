import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Custombtn = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity  style={styles.loginbtn} onPress= {onPress}>
        <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Custombtn;

const styles = StyleSheet.create({
  container: {  width: '100%' },
  loginbtn: {
    height: 45,
    width: '70%',
    backgroundColor: 'blue',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
});
