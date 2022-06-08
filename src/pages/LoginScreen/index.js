import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import Input from '../../component/input'
import { Formik } from 'formik'
import Logo from '../../component/logo';

const LoginScreen = () => {
  const handleSubmit = value => {

  }
  return (
    // <Formik
    //   initialValues={{ email: '', password: '' }}
    //   onSubmit={handleSubmit}
    // >
    //   {({ handleChange, handleBlur, handleSubmit, values }) => {
    <View style={{ justifyContent: 'center', backgroundColor: '#bfc8ff', flex: 1 }}>
      <View style={{ bottom: 100 }} >
        <Logo style={styles.logo} />
      </View>
      {/* <Text style={styles.fontStyles}>Welcome to Formik Form</Text> */}
      <Input
        placeholder='Email'
        // onChangeText={handleChange('email')}
        // value={values.email}
        error='input valid email'
      />
      <Input
        // onChangeText={handleChange('password')}
        // value={values.password}
        placeholder='Password'
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.ButtonSubmit}>
        <Text style={{ color: 'black', }}>Submit</Text>
      </TouchableOpacity>
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
})