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

    displayQuestion = () => {
        console.log("name:", this.state.showQuestion)
        if(this.state.showQuestion == false) {
            this.setState({showQuestion: true})
            } else {
                this.setState({showQuestion: false})
            }
    }

    componentDidMount() {
        this.getCards()
    }
    
    getCards = () => {
        fetch("https://tarot-card-information.herokuapp.com/")
            .then(resp => resp.json())
            .then((resp) =>  
                {for(let i=0; i<3; i++) {
                        this.setState({
                            tarotCards: this.state.tarotCards.concat(
                                resp.result[i]
                            )
                        })
                    }})
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
                <Text>PAST ∙ PRESENT ∙ FUTURE</Text>
                <View>
                    {this.state.showQuestion ?
                    <Text>test: {this.state.question}</Text>
                    : null
                }
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', marginLeft: 3.5, marginTop: 100}}>
                {fetchCards}
                </View>
            </ScrollView>
        )}
}

export default ThreeCard;