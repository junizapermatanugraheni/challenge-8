import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import Input from '../../component/input'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Logo from '../../component/logo';
import auth from '@react-native-firebase/auth'
import { reference } from '../../database/firebase'

function RegisterScreen({ navigation }) {

  const validationSchema = Yup.object({
    fullName: Yup
      .string()
      .matches(/(\w.+\s).+/, 'Enter at least 2 names')
      .required('Full name is required'),
    bio: Yup
      .string()
      .matches(/(\w).+/, 'Enter at least 1 names')
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
  const handleSubmit = ({ email, password, fullName, bio }) => {
    auth().createUserWithEmailAndPassword(email, password).then((response) => {
      const data = {
        fullName, email, bio, uid: response.user.uid
      }
      reference().ref(`users/${response.user.uid}/`).set(data);
      navigation.navigate('LoginScreen')
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      console.error(error);
    });
  }
  return (
    <View style={{ justifyContent: 'center', backgroundColor: '#bfc8ff', flex: 1 }}>
      <Formik
        validateOnMount={true}
        initialValues={{ email: '', password: '', fullName: '', bio: '' }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => {
          return <>
            <Text style={styles.fontText}>FullName</Text>
            <Input
              placeholder='Enter FullName'
              onChangeText={handleChange('fullName')}
              value={values.fullName}
              onBlur={handleBlur('fullName')}
            />
            {errors.fullName &&
              <Text style={styles.errorText}>{errors.fullName}</Text>
            }
            <Text style={styles.fontText}>Bio</Text>
            <Input
              placeholder='Enter bio'
              onChangeText={handleChange('bio')}
              value={values.bio}
              onBlur={handleBlur('bio')}
            />
            {errors.bio &&
              <Text style={styles.errorText}>{errors.bio}</Text>
            }

            <Text style={styles.fontText}>Email</Text>
            <Input
              placeholder='Enter Email'
              onChangeText={handleChange('email')}
              value={values.email}
              onBlur={handleBlur('email')}
            />
            {errors.email &&
              <Text style={styles.errorText}>{errors.email}</Text>
            }

            <Text style={styles.fontText}>Password</Text>
            <Input
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
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
  errorText: {
    fontSize: 15,
    color: 'red',
    marginHorizontal: 10,
    alignSelf: 'center',
    marginVertical: 2
  }
})