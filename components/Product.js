import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-ratings'; // Import the Rating component

const Product = ({ navigation }) => {
  const [rating, setRating] = useState(3); // Initial rating value

  const onStarRatingPress = (rating) => {
    setRating(rating); // Update the rating when a star is pressed
  };

  return (
    <View style={styles.container}>
      {/* Background Image (Mockup Image) */}
      <Image source={require('../assets/Product.png')} style={styles.backgroundImage} />
      
      {/* Product Info */}
      <View style={styles.content}>
        

        <Rating
          imageSize={30}
          startingValue={rating}
          onFinishRating={onStarRatingPress}
          style={styles.rating}
        />

        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Rate</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute', // Make the image fill the background
    top: 0,
    left: 0,
    resizeMode: 'cover', // Cover the whole screen with the image
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', // Position content on top of the background image
    zIndex: 1, // Ensure the content is above the background
    padding: 20,
  },
  
  rating: {
    marginTop: 360,
    left:90,
  },
  button: {
    backgroundColor: '#3f2719',
    padding: 10,
    borderRadius: 5,
    bottom:40,
    right:87,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Product;


