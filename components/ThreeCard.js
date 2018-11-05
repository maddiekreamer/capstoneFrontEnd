import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Cards from "./Cards.js";

class ThreeCard extends Component { 
    state = {
        question: "",
        displayText: ""
    }
    
    handleQuestion = text => {
        this.setState({ 
            question: text 
        })
    }

    constructor(props) {
        super(props);
        this.state = {
        tarotCards: []
        }
    }
    
    componentDidMount() {
        this.getCards()
    }
    
    getCards = () => {
        fetch("https://tarot-card-information.herokuapp.com/")
            .then(resp => resp.json())
            .then(resp => this.setState({
                tarotCards: resp
            }))
    }

    render() {
        return (
            <Text>
                {this.state.tarotCards.map(Cards => {
                    return <Cards Cards={cards}></Cards>
                })}
            </Text> 
        )}
}

export default ThreeCard;