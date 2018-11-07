import React, { Component } from "react"
import { Text, ScrollView, TextInput, TouchableHighlight, View, StyleSheet } from "react-native"

export default class ThreeCard extends Component {
  static navigationOptions = {
    headerTitle: "T A R O T ∙ F Y",
    headerStyle: {
      backgroundColor: '#F8F8F8',
    },
    headerTintColor: '#121827',
    headerTitleStyle: {
      fontFamily: "Bodoni 72 Oldstyle",
      fontSize: 22
    },
  };

  render() {
    return (
      <ScrollView contentContainerStyle="center" style={styles.wholePage}>
        <View style={{marginTop: 80}}>
        <Text style={styles.questionStyle}>Think of a question...</Text>
        <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
        <Text style={styles.past}>PAST</Text>
        <Text style={styles.present}>PRESENT</Text>
        <Text style={styles.future}>FUTURE</Text>
        </View>
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
    questionStyle: {
      marginTop: 40,
      color: 'white',
      textAlign: 'center',
      fontSize: 30,
      fontFamily: "Bodoni 72 Oldstyle",
      letterSpacing: 1
    },
    past: {
      color: 'white',
      textAlign: 'center',
      fontSize: 20,
      marginTop: 20,
      flexDirection: "column",
      marginLeft: 15,
      paddingLeft: 2,
      fontFamily: "Bodoni 72 Oldstyle"
    },
    present: {
      color: 'white',
      textAlign: 'center',
      fontSize: 20,
      marginTop: 20,
      flexDirection: "column",
      marginLeft: 55,
      paddingLeft: 8,
      fontFamily: "Bodoni 72 Oldstyle"
    },
    future: {
      color: 'white',
      textAlign: 'center',
      fontSize: 20,
      marginTop: 20,
      marginLeft: 40,
      paddingLeft: 4,
      flexDirection: "column",
      fontFamily: "Bodoni 72 Oldstyle"
    },
    button: {
      height: 40,
      width: 100,
      marginTop: 15,
      marginBottom: 10,
      backgroundColor:'#121827',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'white',
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center"
    }
})