import React, { Component } from 'react';
import { Text, ScrollView, TextInput, Button, View } from 'react-native';
import Cards from "./Cards.js";

class ThreeCard extends Component { 

    constructor(props) {
        super(props);
        this.state = {
        tarotCards: [],
        question: "",
        displayText: "",
        showQuestion: false
        }
    }

    handleQuestion = (text) => {
        console.log('text: ', text)
        this.setState({ 
            question: text 
        })
    }

    componentDidMount() {
        this.getCards()
    }
    
    getCards = () => {
        fetch("https://tarot-card-information.herokuapp.com/")
            .then(resp => resp.json())
            .then((resp) =>  this.setState({
                    tarotCards: resp.result
                }))
    }
    displayQuestion = () => {
        console.log("name:", this.state.showQuestion)
        if(this.state.showQuestion == false) {
            this.setState({showQuestion: true})
            } else {
                this.setState({showQuestion: false})
            }
    }

    render() {
        const fetchCards = this.state.tarotCards ? 
        this.state.tarotCards.map(cards => {
            return (
                <Cards 
                {...cards}
                />
            )
        }) : "loading Cards"

        console.log('state: ', this.state.question)
        return (
            <ScrollView>
                <Text style={{marginTop: 40}}>Think of a question...</Text>
                <TextInput
                style={{width: 300, borderColor: 'black', borderWidth: 1}}
                value={this.state.question}
                onChangeText={(event) => this.handleQuestion(event)}
                />
                <Button
                onPress={this.displayQuestion}
                title="Enter"
                />
                <View>
                    {this.state.showQuestion ?
                    <Text>{this.state.question}</Text>
                    : null
                }
                </View>
                {fetchCards}
            </ScrollView>
        )}
}

export default ThreeCard;