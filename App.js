import { Text, SafeAreaView, StyleSheet } from 'react-native';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashPage from './components/Splash';
import LoginPage from './components/Login';
import SignupPage from './components/Signup';
import HomePage from './components/Home';
import PastryRecipesPage from './components/Pastry';
import CoffeeRecipesPage from './components/Coffee';
import ProfilePage from './components/Profile';
import OrdersPage from './components/MyOrders';
import ProductPage from './components/Product';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashPage">
        <Stack.Screen name="SplashPage" component={SplashPage} options={{ headerShown: false }} />
        <Stack.Screen name="LoginPage" component={LoginPage} options={{ title: 'Login' }} />
        <Stack.Screen name="SignupPage" component={SignupPage} options={{ title: 'Sign Up' }} />
        <Stack.Screen name="HomePage" component={HomePage} options={{ title: 'Home' }} />
        <Stack.Screen name="PastryRecipesPage" component={PastryRecipesPage} options={{ title: 'Pastry Recipes' }} />
        <Stack.Screen name="CoffeeRecipesPage" component={CoffeeRecipesPage} options={{ title: 'Coffee Recipes' }} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} options={{ title: 'Profile' }} />
        <Stack.Screen name="OrdersPage" component={OrdersPage} options={{ title: 'My Orders' }} />
        <Stack.Screen name="ProductPage" component={ProductPage} options={{ title: 'Product' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

