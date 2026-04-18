import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';

export const UserContext = React.createContext();

const Usecontext = () => {
  return (
    <UserContext.Provider value={{ name: 'John', age: 30 }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 50,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Usecontext</Text>
        {/* <ComponantA user={{ name: 'John', age: 30 }} />                         using props drilling we have to pass the data from one componant to another componant and it is not a good practice because it is not efficient and it is not easy to maintain but using useContext hook we can pass the data from one componant to another componant without passing the data through props drilling and it is a good practice because it is efficient and it is easy to maintain */}
        <ComponantA />
      </View>
    </UserContext.Provider>
  );
};

export default Usecontext;

const styles = StyleSheet.create({});
// USING PROPS DRILLING
// export const ComponantA = ({ user }) => {
//   return (
//     <View style={{ marginTop: 20 }}>
//       <Text>ComponantA</Text>
//       <ComponantB user={user} />
//     </View>
//   );
// };
// export const ComponantB = ({ user }) => {
//   return (
//     <View style={{ marginTop: 20 }}>
//       <Text>ComponantB</Text>
//       <ComponantC user={user} />
//     </View>
//   );
// };
// export const ComponantC = ({ user }) => {
//   return (
//     <View style={{ marginTop: 20 }}>
//       <Text>ComponantC</Text>
//       <ComponantD user={user} />
//     </View>
//   );
// };
// export const ComponantD = ({ user }) => {
//   return (
//     <View style={{ marginTop: 20 }}>
//       <Text>ComponantD: {user.name}</Text>
//     </View>
//   );
// };

// Using useContext Hook
export const ComponantA = ({ user }) => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text>ComponantA</Text>
      <ComponantB user={user} />
    </View>
  );
};
export const ComponantB = () => {
  const user = useContext(UserContext);
  return (
    <View style={{ marginTop: 20 }}>
      <Text>ComponantB: {user.name}</Text>
      <ComponantC />
    </View>
  );
};
export const ComponantC = () => {
  const { name, age } = useContext(UserContext);
  return (
    <View style={{ marginTop: 20 }}>
      <Text>ComponantC: {age} </Text>
      <ComponantD />
    </View>
  );
};
export const ComponantD = () => {
  const UseContext = useContext(UserContext);
  return (
    <View style={{ marginTop: 20 }}>
      <Text>ComponantD: {UseContext.name}</Text>
    </View>
  );
};
