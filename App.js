import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, AppRegistry, Button, Image } from 'react-native';

export default function App() {
  let pic = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
  return (
    <View style={styles.container}>
      <Text>¿Que hara navajas?</Text>
      <View style={styles.buttonContainer}>
          <Button
            title="Ir a comer"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"

          />
          <Button
            title="Estudiar"
          />
      </View>
  
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
      <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      <Image source={pic} style={{width: 193, height: 110}}/>
      <Greeting name='Rexxar' />
      <Greeting name='Jaina' />
      <Greeting name='Valeera' />
    </View>
  );
}

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'

  }
});
