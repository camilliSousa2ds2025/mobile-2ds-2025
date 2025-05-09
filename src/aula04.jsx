import React, { Component }from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class Aula04 extends Component{
    render() {
        return(
            <View>
                <Text>Aula04 - trabalho com imagens!</Text>
               <Image 
                    styles={ styles.img }
                    source={{ uri: 'https://gru.ifsp.edu.br/images/phocagallery/galeria2/image04_grd.png' }}
               /> 
            </View>

        );
    }
}

export default Aula04;  

const styles = StyleSheet.create({
    img: {
        width: 50,
        height: 100,
    }
})