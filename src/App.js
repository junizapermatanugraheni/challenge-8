import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Route from './route'
import CodePush from 'react-native-code-push'
import { NavigationContainer } from '@react-navigation/native'

const codePushOptions = { checkFrequency: CodePush.CheckFrequency.ON_APP_START}
const App = () => {
  return (
    <NavigationContainer>
      <Route/>
    </NavigationContainer>
  )
}

export default CodePush(codePushOptions)(App)

const styles = StyleSheet.create({})