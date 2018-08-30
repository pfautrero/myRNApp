import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection : 'row',
    backgroundColor: '#f6e8d7'
  },
  container2: {
    height: '100%',
    backgroundColor: '#f6e8a0'
  },
  welcome: {
    alignSelf: 'center',
    fontSize: 20,

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Image source={require('../../assets/dragon.png')}  style={{width: 289, height: 165}}/>
          <Text style={styles.welcome}>Home Screen</Text>
        </View>
        <View style={styles.container2}>
        </View>
      </View>
    );
  }
}
