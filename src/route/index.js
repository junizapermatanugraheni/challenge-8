import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SplashScreen, LoginScreen, RegisterScreen, DashboardScreen, DetailScreen, PokeBagScreen } from '../pages'

const Stack = createNativeStackNavigator();
function Route  () {
  return (
      <Stack.Navigator initialRouteName='LoginScreen' >
        <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name='DashboardScreen' component={DashboardScreen} options={{ headerShown: false }} />
        <Stack.Screen name='DetailScreen' component={DetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name='PokeBagScreen' component={PokeBagScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
  );
}

export default Route