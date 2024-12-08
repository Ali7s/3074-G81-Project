import React from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <Image source={require('../assets/Login.png')} style={styles.image} />
      
      <TouchableOpacity style={styles.emailInput} onPress={() => {/* Handle email input press */}} >
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.passwordInput} onPress={() => {/* Handle password input press */}} >
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
        />
      </TouchableOpacity>
      
      {/* Login Button */}
      <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </View>
      </TouchableOpacity>

      {/* Sign Up Button */}
      <TouchableOpacity onPress={() => navigation.navigate('SignupPage')}>
        <View style={styles.signupButton}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </View>
      </TouchableOpacity>

      {/* Sign Up Text Link */}
      <TouchableOpacity onPress={() => navigation.navigate('SignupPage')}>
        <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // Keeps the aspect ratio intact
  },
  emailInput: {
    position: 'absolute',
    top: 155, 
    left: 40,  
    width: '80%',
    height: '70%',
    padding: 10,
    margin: 10,
  },
  passwordInput: {
    position: 'absolute',
    top: 250, 
    left: 40,  
    width: '80%',
    padding: 10,
    margin: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#3f2719',
    padding: 15,
    right: 60 ,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  signupButton: {
    backgroundColor: '#3F2719',
    padding: 15,
    bottom: 70, 
    left: 60 ,
    margin: 10,
    borderRadius: 5,
  },
  signupButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  signupText: {
    marginTop: 20,
    color: '#3f2719',
  },
});

export default Login;


