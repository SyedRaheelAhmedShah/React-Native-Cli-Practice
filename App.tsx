import {} from 'react-native';
import React from 'react';
import StackNaviga from './src/StackNaviga';
import { Provider } from 'react-redux';
import MyStore from './src/Reducer/Store/MyStore';

const App = () => {
  return (
    <Provider store={MyStore}>
      <StackNaviga />
    </Provider>
  );
};

export default App;
