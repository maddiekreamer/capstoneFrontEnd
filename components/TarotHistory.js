import React, { Component } from "react"
import { Text, ScrollView, View, StyleSheet } from "react-native"

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
        <View style={styles.headerStyle}>
          <Text style={styles.textStyle}>History of Tarot</Text>
          <View style={{ width: 340, borderWidth: 1, borderColor: '#feea65', marginBottom: 13 }}></View>
          <Text style={styles.questionStyle}>While the media tends to portray tarot cards as a form of fortune telling, they were not originally meant for mysticism. The first known Tarot Cards were called "carte da trionfi", or "cards of triumph", played by Italian Aristocrats before the large spread over Europe. However, tarot card readings are a form of cartomancy, or fortune-telling/divination using a deck of cards.</Text>
          <Text style={styles.questionStyle}>Tarot Cards are meant to reveal personal truth. Cards are their meanings are different for everyone. In readings, card meanings are explained, but the interpretation is up to you. During readings, the receiver should search for meaning, but not take too literally. For example, if you receive "The Death" card, this does not mean you are going to die. It could possibly mean a career or relationship will end.</Text>
          <Text style={styles.questionStyle}>During readings, the receiver is to go in with a question or something that has been laying heavy on their heart. When ready, the reader will reveal cards one by one. The cards are split into two categories, Major Arcana versus Minor Arcana. The majors are also known as "trump cards", where the minor are called "pip cards". The minor cards are divided into four additional categories, wands, pentacles, cups, and swords. Each of these categories also contain court cards, all with different meanings. Well, what are you waiting for? Let's play! </Text>
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
      paddingTop: 25,
      paddingBottom: 30
    },
    textStyle: {
      fontSize: 50,
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