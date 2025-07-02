import React,{Component} from "react";
import { View, Text, StyleSheet  } from "react-native";

class Aula05 extends Component{
    render(){
        return(
            <View style={ styles.container }>
                <View style={ styles.caixa1 }>
                    <Text style={{ color:'white'}}>Joice acompanhe a aula!</Text>
                </View>
                <View style={ styles.caixa2 }>2</View>
                <View style={ styles.caixa3 }>3</View>
            </View>
                
        );
    }
}
export default Aula05;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
       
    },
    caixa1: {
        backgroundColor: 'red',
        height: 50
    },
    caixa2: {
        backgroundColor: 'green',
        flex: 1
    },
    caixa3: {
        backgroundColor: 'blue',
        height: 50
    },



})