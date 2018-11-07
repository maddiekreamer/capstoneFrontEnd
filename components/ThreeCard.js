import React, { Component } from "react"
import { Text, ScrollView, TextInput, Button, View } from "react-native"
import Cards from "./Cards.js"

class ThreeCard extends Component {
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
      question: text
    })
  }

  displayQuestion = () => {
    if (this.state.showQuestion == false) {
      this.setState({ showQuestion: true })
    } else {
      this.setState({ showQuestion: false })
    }
  }

  componentDidMount() {
    this.getCards()
  }

  getCards = () => {
    fetch("https://tarot-card-information.herokuapp.com/")
      .then(resp => resp.json())
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

  render() {
    const fetchCards = this.state.selectedCards
      ? this.state.selectedCards.map((cards, index) => {
          return <Cards {...cards} index={index} flipped={this.state.flipped} toggleSelection={this.toggleSelection(index)} />
        })
      : "Please wait, Tarotfy is thinking... "

    return (
      <ScrollView>
        <Text style={styles.questionStyle}>Think of a question...</Text>
        <TextInput
          style={{ width: 362, margin: 5, borderColor: "white", borderWidth: 1, alignItems: "center" }}
          value={this.state.question}
          onChangeText={event => this.handleQuestion(event)}
        />
        <Button onPress={this.displayQuestion} title="Enter"/>
        <View>
          {this.state.showQuestion ? <Text>{this.state.question}</Text> : null}
        </View>
        <Text style={styles.pff}>PAST PRESENT FUTURE</Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 75
          }}
        >
          {fetchCards}
        </View>
      </ScrollView>
    )
  }
}

const styles = {
    questionStyle: {
      marginTop: 40,
      color: 'white',
      textAlign: 'center',
      fontSize: 30
    },
    pff: {
      color: 'white',
      textAlign: 'center',
      fontSize: 20,
      marginTop: 20
    }
}

export default ThreeCard;
