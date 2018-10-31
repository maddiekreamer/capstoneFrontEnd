import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import ThreeCard from './components/ThreeCardSpread';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Tarot Readings"/>
        <ThreeCard threeText="testing"/>
        <Footer footerText="Copyright 2018"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    }
});