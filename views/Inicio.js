import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Inicio = ({ navigation }) => {

    const info = {
        clientId: 20,
        totalpay: 500
    }

    const toUs = () => {
        navigation.navigate('Nosotros', info)
    }

    return (
        <View style={styles.container}>
            <Text>Inicio</Text>
            <Button
                title='Ir a Nosotros'
                onPress={() => toUs()}
            />
        </View>
    )
}

export default Inicio

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
