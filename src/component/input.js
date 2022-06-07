import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native'
import React from 'react'

const Input = ({onChangeText, value, placeholder, error}) => {
    const win = Dimensions.width
    return (
        <View style={{marginVertical: 10, height: 50, width: win}}>
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
        borderColor: 'grey',
        borderRadius: 6,
        borderWidth: 1,
        justifyContent: 'center'
    }
})