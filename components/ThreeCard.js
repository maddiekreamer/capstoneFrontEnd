import React, { Component } from "react"
import { Text, ScrollView, TextInput, TouchableHighlight, View, StyleSheet } from "react-native"
import Cards from "./Cards.js"
import cards from '../cards.json'

export default class ThreeCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tarotCards: [],
      question: "",
      displayText: "",
      showQuestion: false,
      selectedCards: [],
      flipped: []
    }
  }

  handleQuestion = text => {
    this.setState({
      question: text,
      displayText: text
    })
  }

  displayQuestion = () => {
    if (this.state.showQuestion == false) {
      this.setState({ question: "", showQuestion: true })
    } else {
      this.setState({ showQuestion: false })
    }
  }

  componentDidMount() {
    this.getCards()
  }

  getCards = () => {
    
    // fetch("https://tarot-card-information.herokuapp.com/")
    //   .then(resp => resp.json())
    Promise.resolve(cards)
      .then(resp => this.setState({
        tarotCards: resp.result
      }))
      .then(this.selectCards)
  }

  selectCards = () => {
      const selected = this.state.tarotCards.slice(0, 3)
      this.setState({
          selectedCards: selected
      })
  }

  toggleSelection = (index) => () => {
      const flipped = this.state.flipped
      flipped.push(index)
      this.setState({ flipped: flipped })
  }

  static navigationOptions = {
    headerTitle: "T A R O T ∙ F Y",
    headerStyle: {
      backgroundColor: '#F8F8F8',
    },
    headerTintColor: '#121827',
    headerTitleStyle: {
      fontFamily: "Bodoni 72 Oldstyle",
      fontSize: 22
    }
  }

  render() {
    const fetchImage = this.state.selectedCards
      ? this.state.selectedCards.map((cards, index) => {
          return (<Cards {...cards} index={index} flipped={this.state.flipped} toggleSelection={this.toggleSelection(index)} /> )
        })

      : "Please wait, Tarotfy is thinking... "

    return (
      <ScrollView contentContainerStyle="center" style={styles.wholePage}>
        <View style={{marginTop: 80}}>
          <Text style={styles.questionStyle}>Think of a question...</Text>
          <TextInput
            style={{ height: 27, width: 315, marginLeft: 30, borderColor: "white", borderWidth: 1, color: "white", marginTop: 12, padding: 5, fontFamily: "Bodoni 72 Oldstyle", letterSpacing: 2, fontSize: 14 }}
            value={this.state.question}
            onChangeText={event => this.handleQuestion(event)}
          />
          <View style={styles.container}>
            <TouchableHighlight style={styles.button} onPress={this.displayQuestion}>
              <Text style={{fontSize: 20, color: '#feea65', fontFamily: "Bodoni 72 Oldstyle", letterSpacing: 1 }}>Ask</Text>
            </TouchableHighlight>
          </View>
          <View>
            {this.state.showQuestion ? <Text style={{ color: "white", fontSize: 30, textAlign: "center", marginTop: 15, fontFamily: "Bodoni 72 Oldstyle", letterSpacing: 1 }}>{this.state.displayText}</Text> : null}
          </View>
          <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
            <Text style={styles.past}>PAST</Text>
            <Text style={styles.present}>PRESENT</Text>
            <Text style={styles.future}>FUTURE</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {fetchImage}
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