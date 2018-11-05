import React, { Component } from 'react';
import { Text, ScrollView, TextInput } from 'react-native';
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
                <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                />
                {fetchCards}
            </ScrollView>
        )}
}

export default ThreeCard;