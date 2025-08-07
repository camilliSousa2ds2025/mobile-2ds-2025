import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Aula05 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nome:"Camilli"
    };
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>My Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyComponent;
