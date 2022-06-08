import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import Input from '../../component/input'
import { Formik } from 'formik'
import Logo from '../../component/logo';

function LoginScreen ({navigation}) {
  const handleSubmit = value => {

  }
  return (
    // <Formik
    //   initialValues={{ email: '', password: '' }}
    //   onSubmit={handleSubmit}
    // >
    //   {({ handleChange, handleBlur, handleSubmit, values }) => {
    <View style={{ justifyContent: 'center', backgroundColor: '#bfc8ff', flex: 1 }}>
      <View style={{ bottom: 83 }} >
        <Logo style={styles.logo} />
      </View>
      <Text style={styles.fontText}>Email</Text>
      <Input
        placeholder='Enter Email'
      // onChangeText={handleChange('email')}
      // value={values.email}
      // error='input valid email'
      />
      <Text style={styles.fontText}>Password</Text>
      <Input
        // onChangeText={handleChange('password')}
        // value={values.password}
        placeholder='Enter Password'
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.ButtonSubmit}>
        <Text style={{ color: 'black', }}>Submit</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', marginVertical: 10, marginHorizontal: 20, alignSelf: 'center' }}>
        <Text style={{ color: 'black', fontSize: 20 }}>Dont have account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}> Register Now</Text>
        </TouchableOpacity>
      </View>

    </View>

    //   }}
    // </Formik>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  fontStyles: {
    fontWeight: 'bold',
    marginHorizontal: 10,
    fontSize: 25,
    color: 'black'
  },
  ButtonSubmit: {
    padding: 22,
    backgroundColor: '#8394ff',
    alignItems: 'center',
    borderRadius: 25,
    marginHorizontal: 10,
  },
  fontText: {
    marginHorizontal: 15,
    color: 'black',
    fontSize: 17
  }
})