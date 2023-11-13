import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Account from './components/Account';


import Home from './components/Home';

import BottomNavigation from './components/navigation/BottomNavigation';

import LocationScreen from './components/LocationScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      
      >
        <Stack.Screen name="LandingPage" component={LandingPage} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp}  options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={BottomNavigation} options={{ headerShown: false }} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;