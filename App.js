import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
// import ThreeCard from './components/ThreeCard';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Tarot Readings"/>
        {/* <ThreeCard threeText="testing"/> */}
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