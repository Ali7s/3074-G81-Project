import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MyOrders = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/MyOrders.png')} style={styles.image} />
      
      <Text style={styles.header}>My Orders</Text>

      <View style={styles.ordersContainer}>
        {/* Example order details */}
        <Text style={styles.orderText}>Order #1: Coffee Beans - $20.00</Text>
        <Text style={styles.orderText}>Order #2: Carrot Cake - $15.00</Text>
        {/* Add more orders as needed */}
      </View>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  ordersContainer: {
    marginTop: 30,
    width: '80%',
  },
  orderText: {
    fontSize: 16,
    marginVertical: 10,
  },
  backButton: {
    marginTop: 20,
    color: '#4CAF50',
  },
});

export default MyOrders;

