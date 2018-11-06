import React, { Component } from "react";
import { Text, ScrollView, TextInput, Button, View } from "react-native";
import Cards from "./Cards.js";

class ThreeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tarotCards: [],
      question: "",
      displayText: "",
      showQuestion: false,
      selectedCards: [],
      flipped: 0
    };
  }

  handleQuestion = text => {
    console.log("text: ", text);
    this.setState({
      question: text
    });
  };

  displayQuestion = () => {
    console.log("name:", this.state.showQuestion);
    if (this.state.showQuestion == false) {
      this.setState({ showQuestion: true });
    } else {
      this.setState({ showQuestion: false });
    }
  };

  componentDidMount() {
    this.getCards();
  }

  getCards = () => {
    fetch("https://tarot-card-information.herokuapp.com/")
      .then(resp => resp.json())
      .then(resp => this.setState({
        tarotCards: resp.result
      }))
      .then(this.selectCards)
  };

  selectCards = () => {
      const selected = this.state.tarotCards.slice(0, 3)
      this.setState({
          selectedCards: selected
      })
  }

  render() {
    const fetchCards = this.state.selectedCards
      ? this.state.selectedCards.map((cards, index) => {
          return <Cards {...cards} index={index} flipped={this.state.flipped} toggleSelection={() => this.setState({ flipped: index })} />;
        })
      : "loading Cards";

    console.log("state: ", this.state.question);
    return (
      <ScrollView>
        <Text style={{ marginTop: 40 }}>Think of a question...</Text>
        <TextInput
          style={{ width: 300, borderColor: "black", borderWidth: 1 }}
          value={this.state.question}
          onChangeText={event => this.handleQuestion(event)}
          ref={input => { this.textInput = input }}
        />
        <Button onPress={this.displayQuestion} title="Enter" />
        <Text>PAST ∙ PRESENT ∙ FUTURE</Text>
        <View>
          {this.state.showQuestion ? <Text>{this.state.question}</Text> : null}
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            marginLeft: 3.5,
            marginTop: 100
          }}
        >
          {fetchCards}
        </View>
      </ScrollView>
    );
  }
}

export default ThreeCard;
