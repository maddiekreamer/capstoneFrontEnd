import React, { Component } from 'react';
import { Text, View } from 'react-native';
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
            
                <Text>
                {fetchCards}
                </Text> 
        )}
}

export default ThreeCard;