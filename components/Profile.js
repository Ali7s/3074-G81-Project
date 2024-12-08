import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const Profile = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/Profile.png')}
      style={styles.background}
    >
      {/* Log Out Button */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate('LoginPage')}
      >
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ensures the image covers the entire screen
    justifyContent: 'flex-end', // Aligns the button at the bottom of the screen
    paddingBottom: 30, // Adds some padding to the bottom for spacing
  },
  logoutButton: {
    backgroundColor: '#3f2719',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignSelf: 'center', // Centers the button horizontally
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Profile;

