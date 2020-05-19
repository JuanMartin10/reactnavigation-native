import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Nosotros = ({ navigation, route }) => {

    const { clientId } = route.params

    const back = () => {
        // navigation.navigate('Inicio')
        navigation.goBack()
        // navigation.push('Inicio')
    }


    return (
        <View style={styles.container}>
            <Text>{clientId}</Text>
            <Button
                title='Ir a Inicio'
                onPress={() => back()}
            />
        </View>
    )
}

export default Nosotros

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
