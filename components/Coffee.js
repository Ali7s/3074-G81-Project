import React from 'react';
import { View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Coffee = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/Coffee.png')} // Replace with your mockup image
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
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
  },
  profileButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  cartButton: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
});

export default Coffee;




