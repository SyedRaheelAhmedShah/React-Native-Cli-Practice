import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Profile = () => {
  const navigation = useNavigation();
  const [mydata, setdata] = useState([]);

  useEffect(() => {
    axios
      .get('http://10.0.2.2:3000/profile')
      .then(result => {
        setmydata(result.data);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        {/* Profile Image */}
        <Image
          source={require('../../assest/Images/random.png')}
          style={styles.profileImage}
        />
        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>50</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>4</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>15</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>

      {/* Bio Section */}
      <View style={styles.bioSection}>
        {mydata.map((item, index) => (
          <View>
            <Text key={index} style={styles.username}>
              {item.name}
              
            </Text>
          </View>
        ))}
        <Text style={styles.bio}>
          Alhumdulillah for everything. Passionate about Android development
          with React Native CLI technology.
        </Text>
        <Text style={styles.link}>http://sssd.sdw</Text>
        <Text style={styles.reference}>Reference ID</Text>
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => {
          navigation.navigate('Editprofilescreen');
        }}
      >
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Body Section */}
      <View style={styles.body}>
        <Text style={styles.sectionTitle}>Posts Grid Coming Soon...</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topSection: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  statsContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    marginLeft: 20,
  },
  statBox: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#555',
  },
  bioSection: {
    paddingHorizontal: 20,
  },
  username: {
    fontSize: 16,
    fontWeight: '600',
  },
  bio: {
    fontSize: 14,
    marginTop: 5,
    color: '#333',
  },
  link: {
    fontSize: 14,
    color: 'blue',
    marginTop: 5,
  },
  reference: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  editButton: {
    marginTop: 15,
    marginHorizontal: 20,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    alignItems: 'center',
  },
  editButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  body: {
    marginTop: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});
