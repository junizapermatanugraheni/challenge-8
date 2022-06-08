import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

const Logo = () => {
    return (
        <View>
            <ImageBackground source={require('../assets/icons/iconLogo.png')} style={styles.logo} />
            <Text style={styles.title}>Pokemon App</Text>
        </View>
    )
}

export default Logo

const styles = StyleSheet.create({
    logo: {
        height: 106,
        width: 106,
        alignSelf: 'center'
    },
    title: {
        marginTop: 10,
        fontSize: 25,
        color: 'black',
        fontFamily: 'Helvetica-Bold',
        alignSelf: 'center'
    },
})