import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Aula05  extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={ styles.caixa1 }>1</View>
        <View style={ styles.caixa2 }>
          <Image 
          style={ styles.img1 }
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH3Zn3yjeyCM1g3FjNXh7DMTRgiT6OGHjh5g&s' }}
          />
          <Image 
          source={ require('../img/teste.webp')}
          style={ styles.img2 }
          />
        </View>
        <View style={ styles.caixa3 }>
         < Image/>
        </View>
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
},

img1: {
  width: 50,
  height: 50,
},
img2: {
  width: 100,
  height: 100,
},

})

