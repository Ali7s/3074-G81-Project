import React, { useEffect } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Splash = ({ navigation }) => {

  // Navigate to LoginPage after 3 seconds (optional automatic navigation)
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('LoginPage');
    }, 3000); // 3 seconds timer
    return () => clearTimeout(timer);
  }, [navigation]);

  const handlePress = () => {
    navigation.navigate('LoginPage');  // Navigate on tap
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Splash.png')} style={styles.image} />

      {/* Touchable element to make the whole screen interactive */}
      <TouchableOpacity style={styles.overlay} onPress={handlePress}>
        <View style={styles.overlayContent}></View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',  // You can set any background color here
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',  // Adjust based on your mockup
  },
  
  overlay: {
    ...StyleSheet.absoluteFillObject,  // Covers the entire screen
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayContent: {
    width: '100%',
    height: '100%',
  },
});

export default Splash;

