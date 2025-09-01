import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Aula05  extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={ styles.caixa1 }>1</View>
        <View style={ styles.caixa2 }>
          <Image />
        </View>
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
    height: 100,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 20,
  },

  caixa2: {
   flex: 1,
   backgroundColor: 'green',
   color: 'white',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
},
  caixa3: {
   backgroundColor: 'blue',
   height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 20
}
})

