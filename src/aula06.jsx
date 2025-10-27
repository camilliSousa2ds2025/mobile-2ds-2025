import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

class Aula06 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      nome2: '',
    };
    this.pegaNome = this.pegaNome.bind(this);
    this.pegaNome2 = this.pegaNome2.bind(this);
  }

  pegaNome(texto) {
    if(texto.length > 0) {
      this.setState ({nome: "Bem vindo: " + texto})
    }else{
      this.setState({nome: ''})
    }
  }

  pegaNome2(texto) {
    if(texto.length > 0) {
      this.setState ({nome2: "Bem vindo: " + texto})
    }else{
      this.setState({nome2: ''})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Primeiro campo de texto */}
        <TextInput
          style={styles.input}
          placeholder='Digite seu nome:'
          underlineColorAndroid="transparent"
          onChangeText={this.pegaNome}
        />

        <Text style={styles.texto}>{this.state.nome}</Text>

        {/* Segundo campo de texto */}
        <TextInput
          style={styles.input}
          placeholder='Digite seu nome:'
          underlineColorAndroid="transparent"
          onChangeText={this.pegaNome2}
        />

        <Text style={styles.texto}>{this.state.nome2}</Text>
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
    width: '80%',
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },

  texto: {
    textAlign: 'center',
    fontSize: 25,
    margin: 5,
  }
});