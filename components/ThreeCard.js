import React, { Component } from 'react';
import { Text, ScrollView, TextInput, Button } from 'react-native';
import Cards from "./Cards.js";

class ThreeCard extends Component { 

    constructor(props) {
        super(props);
        this.state = {
        tarotCards: [],
        question: "",
        displayText: ""
        }
    }

    handleQuestion = text => {
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

    render() {
        const fetchCards = this.state.tarotCards ? 
        this.state.tarotCards.map(cards => {
            return (
                <Cards 
                {...cards}
                />
            )
        }) : "loading Cards"
        return (
            <ScrollView>
                <Text>Think of a question...</Text>
                <TextInput
                style={{width: 300, borderColor: 'black', borderWidth: 1}}
                value={this.state.question}
                onChangeText={this.handleQuestion}
                />
                <Button
                onPress={this.handleQuestion}
                title="Enter"
                />
                <Text>{this.state.displayText}</Text>
                {fetchCards}
            </ScrollView>
        )}
}

export default ThreeCard;