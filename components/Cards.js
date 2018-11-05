import React, { Component } from 'react';
import { Text } from 'react-native';

class Cards extends Component {

    render() {
        return (
            <Text>
                <ul>
                    <li>{this.props.result.name}</li>
                    <li>{this.props.result.type}</li>
                    <li>{this.props.result.img}</li>
                    <li>{this.props.result.desc}</li>
                </ul>
            </Text>
        )
    }
}

const styles = {
    // cardsStyle: {
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
    //     justifyContent: "right",
    //     marginLeft: "50%"
    //     }
    };

export default Cards;