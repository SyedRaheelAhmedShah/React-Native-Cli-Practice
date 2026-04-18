import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const Hook = () => {
  const navigation = useNavigation();

  const ALLHOOKS = [
    {id:'1', title: 'Usestate', screen: 'Usestate', color: 'lightpink' },
    {id:'2', title: 'UseEffect', screen: 'UseEffect', color: 'lightcoral' },
    {id:'3', title: 'Usereffer', screen: 'Usereffer', color: 'lightblue' },
    {id:'4', title:'Usecontext', screen :'Usecontext', color:'lightgreen'},
    {id:'5', title:'Usecallback', screen :'Usecallback', color:'lightyellow'},
    {id:'6', title:'Usememo', screen :'Usememo', color:'lightgray'},
    {id:'7', title:'Usereducer', screen :'Usereducer', color:'lightcoral'},
  ];

  const renderitem = ({item})=>{
    return(
      <TouchableOpacity onPress={()=>navigation.navigate(item.screen)}>
        <View style={[styles.TouchableOpacity, {backgroundColor: item.color}]}>
          <Text style={{justifyContent: 'center', fontSize: 18, fontWeight: '500'}} >{item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: '500' }}>React Hooks</Text>
      <FlatList
        data={ALLHOOKS}
        renderItem={renderitem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Hook;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
  TouchableOpacity: {
    marginTop: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
});
