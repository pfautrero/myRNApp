/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Button, View, Text } from 'react-native';
import { RootStack } from './containers/Navigator/Navigator.js'

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
