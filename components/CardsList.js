import React, { Component } from "react"
import { View, Image, Text, StyleSheet, CardSection } from "react-native"
import {Card} from "./Card"

export default class CardsList extends Component {
    constructor(props) {
        super(props),
        this.props = {
            name: '',
            img: '',
            type: '',
            desc: ''
        } 
    } 


    static navigationOptions = {
        headerTitle: "T A R O T ∙ F Y",
        headerStyle: {
            backgroundColor: '#F8F8F8'
        },
        headerTintColor: '#121827',
        headerTitleStyle: {
            fontFamily: "Bodoni 72 Oldstyle",
            fontSize: 22
        }
    }

    render () {
        return (
            <Card style={{ paddingTop: 5 }}>
                <CardSection>
                    <Text style={styles.headerStyle}>{this.props.name}</Text>
                </CardSection>
                <Image style={styles.imageStyle} source={{ uri: this.props.img }}/>
                <CardSection>
                    <Text style={styles.descText}>{this.props.type}</Text>
                    <Text style={styles.descText}>{this.props.desc}</Text>
                </CardSection>
            </Card>
        )
    }
}

let styles = StyleSheet.create ({
    wholePage: {
        backgroundColor: '#121827',
        flex: 1
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    headerStyle: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 150,
        paddingBottom: 30
    },
    textStyle: {
        fontSize: 70,
        color: "white",
        fontFamily: "Bodoni 72 Oldstyle",
        fontStyle: 'italic',
        letterSpacing: 1.5,
        marginBottom: 13
    },
    questionStyle: {
        color: 'white',
        textAlign: 'left',
        fontSize: 22,
        fontFamily: "Bodoni 72 Oldstyle",
        letterSpacing: 1,
        paddingTop: 10,
        marginHorizontal: 32,
        textAlign: "justify",
        paddingBottom: 5
    },
    headerContentStyle: {
        flexDirection: "column",
        justifyContent: "space-around"
    },
    headerTextStyle: {
        fontSize: 18,
        fontWeight: "bold"
    },
    thumbnailStyle: {
        height: 80,
        width: 80,
        borderRadius: 2
    },
    imageContainerStyle: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 0,
        marginRight: 0
    },
    imageStyle: {
        height: 450,
        flex: 1,
        width: null
    },
    descText: {
        marginLeft: 20
    }
})