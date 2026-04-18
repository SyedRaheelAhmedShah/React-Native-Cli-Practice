import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, { useState } from 'react';

const Usestate = () => {
  const [color, setColor] = useState('red');
  const [user, setUser] = useState({
    name: 'haider',
    fatherName: 'munir',
    age: 23,
  });
  const [data, setData] = useState([1, 2]);
  const [ON, setOn] = useState(false);
  const [name, setName] = useState('Raheel');
  const [todo, settodo] = useState([]);
  const [randomnum, setRandomnum] = useState(1);
  const [selected, setSelected] = useState('');
  const [imageSize, setImageSize] = useState(100);

  const ChangeColor = () => {
    return (
      <View>
        <TouchableOpacity
          style={{
            height: 100,
            width: 100,
            backgroundColor: color,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
          }}
          onPress={() => {
            setColor(color === 'red' ? 'blue' : 'red');
          }}
        />
        <Button
          title="Change color"
          onPress={() => {
            setColor(color === 'red' ? 'blue' : 'red');
          }}
        />
      </View>
    );
  };

  const ObjectComponent = () => {
    return (
      <View>
        <TouchableOpacity>
          <View
            style={{
              marginTop: 20,
              height: 100,
              width: 200,
              backgroundColor: 'lightgray',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              marginBottom: 20,
            }}
          >
            <Text>Name: {user.name}</Text>
            <Text>Father's Name: {user.fatherName}</Text>
            <Text>Age: {user.age}</Text>
          </View>
        </TouchableOpacity>
        <Button
          title="Click it"
          onPress={() => setUser({ ...user, age: user.age + 1 })}
        />
      </View>
    );
  };

  const ArrayComponent = () => {
    return (
      <View>
        <TouchableOpacity>
          <View
            style={{
              marginTop: 20,
              height: 100,
              width: 200,
              backgroundColor: 'lightgreen',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              marginBottom: 20,
            }}
          >
            <Text>Data: {data.join(', ')}</Text>
          </View>
        </TouchableOpacity>
        <Button
          title="Add"
          onPress={() => setData([...data, data.length + 1])}
        />
      </View>
    );
  };

  const ToggleOnOff = () => {
    return (
      <View>
        <Text
          style={{
            marginTop: 20,
            fontSize: 20,
            marginBottom: 20,
            fontWeight: '500',
          }}
        >
          on/off : {ON ? 'on' : 'off'}
        </Text>
        <Button title="on/off" onPress={() => setOn(!ON)} />
      </View>
    );
  };

  const Inputfield = () => {
    return (
      <View>
        <TextInput
          placeholder="Enter Some thing"
          onChangeText={text => setName(text)}
        />
        <Text>Name:{name}</Text>
      </View>
    );
  };

  const Todos = () => {
    return (
      <View>
        <Text>Todo:{todo}</Text>
        <Button
          title="add"
          onPress={() => settodo([...todo, todo.length + 1])}
        />
        <Button title="remove" onPress={() => settodo(todo.slice(0, -1))} />
      </View>
    );
  };

  const Randomnum = () => {
    return (
      <View>
        <Text>Random:{randomnum}</Text>
        <Button
          title="generate"
          onPress={() => setRandomnum(Math.floor(Math.random() * 6) + 1)}
        />
      </View>
    );
  };

  // const Dropdownshow = () => {
  //   return (
  //     <View>
  //       <Picker
  //         selectedValue={selected}
  //         onValueChange={val => setSelected(val)}
  //       >
  //         <Picker.Item label="React" value="React" />
  //         <Picker.Item label="Vue" value="Vue" />
  //       </Picker>
  //       <Text>{selected}</Text>
  //     </View>
  //   );
  // };


  return (
    <View
      style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}
    >
      {/* <ChangeColor />
      <ObjectComponent />
      <ArrayComponent />
      <ToggleOnOff />
      <Inputfield />
      <Todos />
      <Randomnum />
      <Dropdownshow /> */}

    </View>
  );
};

export default Usestate;
