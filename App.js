import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Tarot Readings"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    }
});