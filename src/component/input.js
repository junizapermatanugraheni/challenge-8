import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native'
import React from 'react'

const Input = ({onChangeText, value, placeholder, error}) => {
    const win = Dimensions.width
    return (
        <View style={{marginVertical: 10, height: 85, width: win, marginHorizontal: 10}}>
            <TextInput
                style={styles.InputContainer}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
            />
            <Text style={{ color: 'red', marginTop: 5 }}>{error}</Text>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    InputContainer:{
        flex: 1,
        borderColor: 'black',
        borderRadius: 20,
        borderWidth: 2,
        justifyContent: 'center',
        backgroundColor: 'white',
        opacity: .2,
        color: 'black'
    }
})