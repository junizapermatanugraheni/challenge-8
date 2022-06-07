import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import Input from '../../component/input'
import { Formik } from 'formik'

const LoginScreen = () => {
  const handleSubmit = value => {
    
  }
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => {
        <SafeAreaView>
          <Text style={styles.fontStyles}>Welcome to Formik Form</Text>
          <Input
            placeholder={'Username'}
            onChangeText={handleChange('email')}
            value={values.email}
            error='input valid email'
          />
          <Input
            onChangeText={handleChange('password')}
            value={values.password}
            placeholder={'Password'}
          />
          <TouchableOpacity onPress={handleSubmit} style={styles.ButtonSubmit}>
            <Text style={{ color: 'white' }}>Submit</Text>
          </TouchableOpacity>
        </SafeAreaView>
      }}

    </Formik>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  fontStyles: {
    fontWeight: 'bold'
  },
  ButtonSubmit: {
    padding: 4,
    color: 'green'
  }
})