import React, { Component } from "react"
import { Text, ScrollView, View, StyleSheet } from "react-native"

export default class ThreeCard extends Component {
  static navigationOptions = {
    headerTitle: "T A R O T ∙ F Y",
    headerStyle: {
      backgroundColor: '#F8F8F8'
    },
    headerTintColor: '#121827',
    headerTitleStyle: {
      fontFamily: "Bodoni 72 Oldstyle",
      fontSize: 22
    }
  }

  render() {
    return (
      <ScrollView contentContainerStyle="center" style={styles.wholePage}>
        <View style={styles.headerStyle}>
          <Text style={styles.textStyle}>Instructions</Text>
          <Text style={styles.questionStyle}>1. Think of a question or problem that has been weighing on you</Text>
          <Text style={styles.questionStyle}>2. Enter question into input box, then click "Ask"</Text>
          <Text style={styles.questionStyle}>3. Reveal cards one-by-one, going from left to right</Text>
        </View>
      </ScrollView>
    )
  }
}

let styles = StyleSheet.create ({
    wholePage: {
      backgroundColor: '#121827',
      flex: 1
    },
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    headerStyle: {
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 150,
      paddingBottom: 30
    },
    textStyle: {
      fontSize: 70,
      color: "white",
      fontFamily: "Bodoni 72 Oldstyle",
      fontStyle: 'italic',
      letterSpacing: 1.5,
      marginBottom: 13
    },
    questionStyle: {
      color: 'white',
      textAlign: 'left',
      fontSize: 22,
      fontFamily: "Bodoni 72 Oldstyle",
      letterSpacing: 1,
      paddingTop: 10,
      marginHorizontal: 32,
      textAlign: "justify",
      paddingBottom: 5
    }
})