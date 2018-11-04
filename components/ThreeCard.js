import React, { Component } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import Cards from "./Cards.js"

class ThreeCard extends Component { 
    state = {
        question: "",
        displayText: ""
    }
    
    handleQuestion = text => {
        console.log(text)
        this.setState({ 
            question: text 
        })
    }

    // submitAndClear = () => {
    //     this.props.handleQuestion(this.state.question)
    //     this.setState({
    //         text: ''
    //     })
    // }

    render(){
        return (
            <View style={styles.threeStyle}>
                <View>
                    <Text style={styles.textStyle}>Think of a question...</Text>
                    <TextInput 
                        style={{width: 300, borderColor: "black", borderWidth: 1}}
                        placeholder="Enter question here:"
                        value={this.state.question}
                        onChangeText={this.handleQuestion}
                        ref={input => {this.TextInput = input}}
                    />
                    <Button title="Enter" style={{color: 'black', width:200}}
                        onPress={() => {
                            this.setState({displayText: this.state.question})
                            // {this.submitAndClear}
                        }}
                        
                    />
                    <Text>{this.state.displayText}</Text>
                </View>
            </View>
        )
};
}

const styles = {
    // threeStyle: {
    //     backgroundColor: "#F8F8F8",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     height: 60,
    //     paddingTop: 30,
    //     shadowColor: "#000",
    //     shadowOffset: { width: 0, height: 2 },
    //     shadowOpacity: 0.2,
    //     elevation: 2,
    //     position: "relative"
    //     },
    //     textStyle: {
    //     fontSize: 20
    //     },
    //     iconPosition: {
    //     flex: 1,
    //     flexDirection: "row",
    //     alignItems: "right",
    //     justifyContent: "space-container",
    //     marginLeft: "50%"
    //     },
    };

export default ThreeCard;