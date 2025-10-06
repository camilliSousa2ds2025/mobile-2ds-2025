import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

class Aula06 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
    };
    this.pegaNome = this.pegaNome.bind(this);
  }

  pegaNome(texto) {
    if(texto.length > 0) {
      this.setState ({nome: "Bem vindo: " + texto})
    }else{
      this.setState({nome: ''})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder='Digite seu nome:'
        underlineColorAndroid="tranparent"
        onChangeText={this.pegaNome}
        />


         <Text style={styles.texto}>{this.state.nome}</Text>
      </View>
    );
  }
}

export default Aula06;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: { 
  heigth: 45,
  borderWidth: 1,
  borderColor: '#222',
  margin: 10,
  fontSize: 20,
  paddding: 10,
  },

  texto: {
    textAling: 'center',
    fontSize: 25,
  }
});


