import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import ThreeCard from './components/ThreeCard';
import Footer from './components/Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  
  componentDidMount() {
    this.getData()
  }

  getData = () => {
    return fetch("https://tarot-card-information.herokuapp.com/")
    .then(result => result.json())
    .then(result =>
      this.setState({
        data: result.data
      }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Tarot Readings"/>
        <ThreeCard />
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