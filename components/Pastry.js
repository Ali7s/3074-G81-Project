import React from 'react';
import { View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Pastry = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/Pastry.png')} // Replace with your mockup image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {/* Profile Button */}
        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => navigation.navigate('ProfilePage')}
        >
          <Icon name="person-circle-outline" size={40} color="#3f2719" />
        </TouchableOpacity>

        {/* Cart Button */}
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => navigation.navigate('ProductPage')}
        >
          <Icon name="cart-outline" size={40} color="#3f2719" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Ensures the image covers the whole screen
  },
  container: {
    flex: 1,
  },
  profileButton: {
    position: 'absolute',
    top: 50,  // Adjust as per your mockup design
    left: 20, // Adjust as per your mockup design
  },
  cartButton: {
    position: 'absolute',
    top: 50,  // Adjust as per your mockup design
    right: 20, // Adjust as per your mockup design
  },
});

export default Pastry;




