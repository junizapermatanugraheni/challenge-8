import React from "react"
import { Text, View, Button } from "react-native"

export default function PokeBagScreen({ navigation }) {
    return (
        <View>
            <Text>Pokebag page</Text>
            <Button title='To Home' color="lightcoral" onPress={() => navigation.navigate('DashboardScreen')} />
        </View>
    )
}