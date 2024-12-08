import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Home.png')} style={styles.image} />

      {/* Search Bar */}
      <TextInput style={styles.searchBar} placeholder="Search..." />

      {/* Pastries Button */}
      <TouchableOpacity onPress={() => navigation.navigate('PastryRecipesPage')}>
        <View style={styles.categoryButton1}>
          <Text style={styles.buttonText}>See All</Text>
        </View>
      </TouchableOpacity>

      {/* Coffees Button */}
      <TouchableOpacity onPress={() => navigation.navigate('CoffeeRecipesPage')}>
        <View style={styles.categoryButton2}>
          <Text style={styles.buttonText}>See All</Text>
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
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  searchBar: {
    width: '80%',
    padding: 10,
    left: 45,
    bottom: 615,
    borderColor: '#ddd',
    borderWidth: 1,
    marginTop: 20,
  },
  // Pastries Button Style
  categoryButton1: {
    backgroundColor: '#3f2719', 
    padding: 10,
    bottom:470,
    left:125 ,
    marginBottom: 20, // Adds space between buttons
    borderRadius: 5,
    width: '80%', 
  },

  // Coffees Button Style
  categoryButton2: {
    backgroundColor: '#3F2719', 
    padding: 10,
    bottom: 300,
    left:120,
    borderRadius: 5,
    width: '80%', 
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center', // Centers the text inside the button
    fontSize: 16, 
  },
});

export default Home;


