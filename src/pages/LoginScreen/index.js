import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import Input from '../../component/input'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Logo from '../../component/logo';
import auth from '@react-native-firebase/auth';


function LoginScreen({ navigation }) {
  const validationSchema = Yup.object({
    email: Yup
      .string()
      .email("Please enter valid email")
      .required('Email Address is Required'),
    password: Yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  })
  const handleSubmit = ({email, password}) => {
    auth().signInWithEmailAndPassword(email, password).then((response) => {
      navigation.navigate('DashboardScreen')
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
      <View style={{ bottom: 83 }} >
        <Logo style={styles.logo} />
      </View>
      <Text style={styles.fontText}>Email</Text>
      <Formik
        validateOnMount={true}
        initialValues={{ email: '', password: ''}}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => {
          const {email, password} = values
          return <>
            <Input
              placeholder='Enter Email'
              onChangeText={handleChange('email')}
              value={values.email}
              onBlur={handleBlur('email')}
            />
            {errors.email  && 
              <Text style={{ fontSize: 15, color: 'red', marginHorizontal: 10, alignSelf: 'center' }}>{errors.email}</Text>
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
              <Text style={{ fontSize: 15, color: 'red', marginHorizontal: 10, alignSelf: 'center', marginVertical: 5}}>{errors.password}</Text>
            }
            <TouchableOpacity onPress={handleSubmit} style={styles.ButtonSubmit} disabled={!isValid || values.email === ''}>
              <Text style={{ color: 'black', }}>Submit</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', marginVertical: 10, marginHorizontal: 20, alignSelf: 'center' }}>
              <Text style={{ color: 'black', fontSize: 20 }}>Dont have account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}> Register Now</Text>
              </TouchableOpacity>
            </View>
          </>
        }}
      </Formik>
    </View>
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
    marginVertical: 10,
  },
  fontText: {
    marginHorizontal: 15,
    color: 'black',
    fontSize: 17
  }
})