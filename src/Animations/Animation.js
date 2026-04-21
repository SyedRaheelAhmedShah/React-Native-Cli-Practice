import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Custombtn from '../Components/Custombtn';

const Animation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Custombtn
        title={'Basic Animation'}
        onPress={() => navigation.navigate('BasicAnimation')}
      />
      <Custombtn
        title={'Transformation Animation'}
        onPress={() => navigation.navigate('TransformationAnimation')}
      />
      <Custombtn
        title={'Animation Methods'}
        onPress={() => navigation.navigate('AnimationMethods')}
      />
      <Custombtn
        title={'Interpolate Animation'}
        onPress={() => navigation.navigate('InterpolateAnimation')}
      />
      <Custombtn
        title={'TapGesture Animation'}
        onPress={() => navigation.navigate('TapGestureAnimation')}
      />
      <Custombtn
        title={'PenGesture Animation'}
        onPress={() => navigation.navigate('PenGestureAnimation')}
      />

      <Custombtn
        title={'TapGesture Practice'}
        onPress={() => navigation.navigate('TapGesturePractice')}
      />
      <Custombtn
        title={'PanGesture Practice'}
        onPress={() => navigation.navigate('PanGesturePractice')}
      />
    </View>
  );
};

export default Animation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 5,
  },
});
