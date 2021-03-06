import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import Route from './route'
import CodePush from 'react-native-code-push'
import { NavigationContainer } from '@react-navigation/native'
import styles from './assets/styles';
import store from './store';
import { Provider } from 'react-redux';

const codePushOptions = { checkFrequency: CodePush.CheckFrequency.ON_APP_START }
const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar animated={true} backgroundColor="transparent" barStyle="dark-content" />
        <NavigationContainer>
          <Route />
        </NavigationContainer>
      </View>
    </Provider >
  )
}

export default CodePush(codePushOptions)(App)
