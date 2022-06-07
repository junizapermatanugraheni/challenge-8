import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SplashScreen, LoginScreen, RegisterScreen, DashboardScreen, DetailScreen, PokeBagScreen } from '../pages'

const Stack = createNativeStackNavigator();
function Route  () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen' >
        <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name='DashboardScreen' component={DashboardScreen} options={{ headerShown: false }} />
        <Stack.Screen name='DetailScreen' component={DetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name='PokeBagScreen' component={PokeBagScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route