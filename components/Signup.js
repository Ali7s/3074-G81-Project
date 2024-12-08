import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Signup = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Removed the Image component */}

      {/* Name Input */}
      <TextInput style={styles.input} placeholder="Name" />
      
      {/* Email Input */}
      <TextInput style={styles.input} placeholder="Email" />
      
      {/* Password Input */}
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      
      {/* Retype Password Input */}
      <TextInput style={styles.input} placeholder="Retype Password" secureTextEntry />
      
      {/* Sign Up Button */}
      <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff', // Keeps the background white
  },
  input: {
    width: '80%',
    padding: 10,
    margin: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#3f2719',
    padding: 15,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Signup;


