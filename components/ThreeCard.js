import React, { Component } from 'react';
import { Text, View, Button, TextInput } from 'react-native';

class ThreeCard extends Component { 
    state = {
        question: ""
    }
    
    handleQuestion = text => {
        this.setState({ 
            question: text 
        })
    }

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
                    />
                    <Button title="Add" style={{color: 'black', width:200}}
                        onPress={() => {
                            alert('you did it')
                        }}
                    />
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