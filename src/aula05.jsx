import React, { Component }from "react";
import { View, Text, StyleSheet } from "react-native";

class Aula05 extends Component{
    render() {
        return(
            <View style={ styles.container }>
                <Text style={ styles.texto}>Estrutura Padrão!</Text>
            </View>

        );
    }
}

export default Aula05;  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },

    texto: {
        color: 'white',
        fontSize: 50,
    }
})