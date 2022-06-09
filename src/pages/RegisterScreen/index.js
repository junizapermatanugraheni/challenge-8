import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import Input from '../../component/input'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Logo from '../../component/logo';

function RegisterScreen({ navigation }) {

  const validationSchema = Yup.object({
    fullName: Yup
      .string()
      .matches(/(\w.+\s).+/, 'Enter at least 2 names')
      .required('Full name is required'),
    email: Yup
      .string()
      .email("Please enter valid email")
      .required('Email Address is Required'),
    password: Yup
      .string()
      .matches(/\w*[a-z]\w*/, "Password must have a small letter")
      .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
      .matches(/\d/, "Password must have a number")
      .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
      .min(8, ({ min }) => `Passowrd must be at least ${min} characters`)
      .required('Password is required'),
  })
  const userInfo = {
    fullname: '',
    email: '',
    password: ''
  }
  const handleSubmit = () => {
    const data = { email: email, password: password, fullname: fullname }
  }
  return (
    <View style={{ justifyContent: 'center', backgroundColor: '#bfc8ff', flex: 1 }}>
      <Formik
        validateOnMount={true}
        initialValues={ userInfo }
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => {
          const { fullName, email, password } = values
          return <>
            <Text style={styles.fontText}>FullName</Text>
            <Input
              placeholder='Enter FullName'
              onChangeText={handleChange('fullName')}
              value={fullName}
              onBlur={handleBlur('fullName')}
            />
            {errors.fullName &&
              <Text style={styles.errorText}>{errors.fullName}</Text>
            }

            <Text style={styles.fontText}>Email</Text>
            <Input
              placeholder='Enter Email'
              onChangeText={handleChange('email')}
              value={email}
              onBlur={handleBlur('email')}
            />
            {errors.email &&
              <Text style={styles.errorText}>{errors.email}</Text>
            }

            <Text style={styles.fontText}>Password</Text>
            <Input
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={password}
              placeholder='Enter Password'
              secureTextEntry
            />
            {errors.password &&
              <Text style={styles.errorText}>{errors.password}</Text>
            }
            <TouchableOpacity onPress={handleSubmit} style={styles.ButtonSubmit} disabled={!isValid || values.email === ''}>
              <Text style={{ color: 'black', }}>Submit</Text>
            </TouchableOpacity>
          </>
        }}
      </Formik>
      <View style={{ flexDirection: 'row', marginVertical: 10, marginHorizontal: 20, alignSelf: 'center' }}>
        <Text style={{ color: 'black', fontSize: 20 }}>Have account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}> Login Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default RegisterScreen

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
    marginVertical: 15,
  },
  fontText: {
    marginHorizontal: 15,
    color: 'black',
    fontSize: 17
  },
  errorText:{
    fontSize: 15, 
    color: 'red', 
    marginHorizontal: 10, 
    alignSelf: 'center', 
    marginVertical: 2
  }
})