import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userreducer from '../Slice/UserSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';

// const rootReducer = combineReducers({
//   users: userreducer,
// });
// const persistconfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };

// const persistReducer = persistReducer(persistconfig);

const MyStore = configureStore({
  reducer: userreducer,
});

export default MyStore;
