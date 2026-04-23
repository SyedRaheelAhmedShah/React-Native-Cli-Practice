import { useNavigation } from '@react-navigation/native';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../Slice/UserSlice';

const AllUsersList = () => {
  const navigator = useNavigation();

  const user = useSelector(state => state.users); // data ko ly rahy hain store sy users wo wla name hai jo hum ny slice main name diya tha
  console.log(user);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      {user.length > 0 ? (
        <FlatList
          data={user}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  padding: 15,
                  borderBottomWidth: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <View>
                  <Text style={{ fontSize: 20, fontWeight: '400' }}>
                    Name: {item.name}
                  </Text>
                  <Text style={{ fontSize: 20, fontWeight: '400' }}>
                    Email: {item.email}
                  </Text>
                  <Text style={{ fontSize: 20, fontWeight: '400' }}>
                    Phone: {item.number}
                  </Text>
                </View>
                <View style={{ gap: 10 }}>
                  <Text
                    style={{
                      color: 'blue',
                      borderWidth: 1,
                      borderColor: 'blue',
                      borderRadius: 5,
                      alignSelf: 'center',
                    }}
                    onPress={() =>
                      navigator.navigate('UpdateUser', {
                        item: item,
                        index: index,
                      })
                    }
                  >
                    Edit
                  </Text>
                  <Text
                    style={{
                      color: 'red',
                      borderWidth: 1,
                      borderColor: 'red',
                      borderRadius: 5,
                      alignSelf: 'center',
                    }}
                    onPress={() => dispatch(deleteUser(index))}
                  >
                    Delete
                  </Text>
                </View>
              </View>
            );
          }}
        />
      ) : (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text style={{ fontSize: 20 }}>No user data</Text>
        </View>
      )}

      <TouchableOpacity
        style={styles.roundshape}
        onPress={() => navigator.navigate('AddUser')}
      >
        <Text style={{ color: 'white', fontSize: 40, alignSelf: 'center' }}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AllUsersList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  roundshape: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    right: 30,
    backgroundColor: 'green',
  },
});
