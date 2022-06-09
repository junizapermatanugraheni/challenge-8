import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import Logo from '../../component/logo';

function SplashScreen({ navigation }) {
  
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.bg}>
      <Logo/>
      <Text style={styles.name}>Juniza Permata Nugaraheni</Text>
    </View>
  );
}

export default SplashScreen
const styles = StyleSheet.create({
  bg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#33D3B7'
  },
  name:{
    fontSize: 14,
    color: 'black',
    fontFamily: 'Helvetica-Bold',
    position: 'absolute',
    bottom: 19,
  }

})