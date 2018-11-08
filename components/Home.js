import React, { Component } from "react"
import { Text, View, StyleSheet, ScrollView, TouchableHighlight } from "react-native"

export default class Home extends React.Component {
  static navigationOptions = {
    headerTitle: "T A R O T ∙ F Y",
    headerStyle: {
      backgroundColor: '#F8F8F8'
    },
    headerTintColor: '#121827',
    headerTitleStyle: {
      fontFamily: "Bodoni 72 Oldstyle",
      letterSpacing: 1,
      fontSize: 22
    }
  }

  render() {
    return (
      <ScrollView contentContainerStyle="center" style={styles.wholePage}>
        <View style={styles.headerStyle}>
          <Text style={styles.textStyle}>Welcome</Text>
          <View style={{ width: 340, borderWidth: 1, borderColor: '#feea65', marginBottom: 13 }}></View>
          <View style={styles.container}>
            <TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate("ThreeCard")}>
              <Text style={{fontSize: 20, color: '#feea65', fontFamily: "Bodoni 72 Oldstyle", letterSpacing: 1 }}>Ask a Question</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.container}>
            <TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate("Instructions")}>
              <Text style={{fontSize: 20, color: '#feea65', fontFamily: "Bodoni 72 Oldstyle", letterSpacing: 1 }}>Instructions</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.container}>
            <TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate("TarotHistory")}>
              <Text style={{fontSize: 20, color: '#feea65', fontFamily: "Bodoni 72 Oldstyle", letterSpacing: 1 }}>History of Tarot</Text>
            </TouchableHighlight>
          </View> 
          {/* <View style={styles.container}>
            <TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate("CardsList")}>
              <Text style={{fontSize: 20, color: '#feea65', fontFamily: "Bodoni 72 Oldstyle", letterSpacing: 1 }}>Explore Cards</Text>
            </TouchableHighlight>
          </View>  */}
        </View>
      </ScrollView>
    )
  }
}

let styles = StyleSheet.create({
  headerStyle: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 150
  },
  textStyle: {
    fontSize: 75,
    color: "white",
    fontFamily: "Bodoni 72 Oldstyle",
    fontStyle: 'italic',
    letterSpacing: 1.5,
    marginBottom: 13
  },
  wholePage: {
    backgroundColor: '#121827',
    flex: 1
  },
  button: {
    height: 40,
    width: 160,
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
