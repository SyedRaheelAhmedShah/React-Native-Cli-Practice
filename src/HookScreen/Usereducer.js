import React, { act, useReducer, useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

// Reducer function
const ToDoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now().toString(), text: action.payload }];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    case 'UPDATE_TODO':
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo,
      );
    default:
      return state;
  }
};

const redu = (state, action) => {
  switch (action.type) {
    case 'Add':
      return [...state, { id: Date.now().toString(), text: action.payload }];
    case 'Remove':
      return state.filter(todo => todo.id !== action.payload);
    case 'Update':
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo,
      );
    default:
      return state;
  }
};

const Usereducer = () => {

  const [todoss, dispatched] = useReducer(redu, [])
  const [taskk, settaskk] = useState('');
  const [editid, seteditid] = useState('')

  const [todos, dispatch] = useReducer(ToDoReducer, []);
  const [task, settask] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleAddOrUpdate = () => {
    if (task.trim()) {
      if (editingId) {
        dispatch({
          type: 'UPDATE_TODO',
          payload: { id: editingId, text: task },
        });
        setEditingId(null); // ✅ reset after update
      } else {
        dispatch({ type: 'ADD_TODO', payload: task });
      }
      settask('');
    }
  };

  const handleit = ()=>{
    if(task.trim()){
      if(editid){
        dispatched({type:"Update", payload:{id: editid, text: taskk}})
        seteditid(null)

      }
      else {
        dispatched({type: 'Add', payload:taskk})
      }
      settaskk('')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo list app</Text>

      <TextInput
        style={styles.input}
        value={task}
        onChangeText={settask}
        placeholder={editingId ? 'Update Task' : 'Add Task'}
      />

      <Button
        title={editingId ? 'Update' : 'Add'}
        onPress={handleAddOrUpdate}
      />

      <FlatList
        data={todos}
        extraData={todos} // ✅ ensures re-render when state changes
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.text}</Text>
            <Button
              title="Edit"
              onPress={() => {
                setEditingId(item.id);
                settask(item.text); // ✅ load text into input
              }}
            />
            <Button
              title="Delete"
              color="red"
              onPress={() =>
                dispatch({ type: 'REMOVE_TODO', payload: item.id })
              }
            />
          </View>
        )}
      />
    </View>
  );
};

export default Usereducer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 250,
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
  todoText: {
    fontSize: 16,
  },
});
