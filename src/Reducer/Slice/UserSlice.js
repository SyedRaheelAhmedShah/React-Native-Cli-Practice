import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],                    //  yahan es array main data store ho ga
};

const userSlice = createSlice({
  name: 'user',                     // ye humri slide ka name hai 
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);

      // state main abhi empty array aye ga jesa ky initial state main hum ny user[] ka array bnaya hai
      // ab state main es arrray ki sab values hoon gi. esko hum current global state bolain gy
      // dusra action ky andar type or payload atah hai. patload jo humry data ko carry kr k rakhta hai. agr hum ny ko data change krna hai
      // tou hum action main id and data bhejain gy phir ye data state main change ho jye ga

      // state.User=[]                                                                     sab sy phely state aisy hoo gi, mean user ka array empty hoga
      // state.User.push = []                                                              jab hum data ko user k array main add kryn gy
      // action.payload {name, age, email, password, number ect like all data of user}     es action.payload ko state.user.push main daal dyn gy
    },

    updateUser: (state, action) => {
      state.users[action.payload.index] = action.payload.data; //ya aisy likh saqty hain

      //   const [index, data] = action.payload;    ya aisy likh saqty hain, ye desturing ka tarika hai
      //   state.users[index] = data;
    },

    deleteUser: (state, action) => {
      state.users.splice(action.payload, 1);
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
