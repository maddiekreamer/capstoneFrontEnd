import React, { Component } from "react"
import { View, Image, Text, StyleSheet, ScrollView } from "react-native"
import cards from '../cards.json'
import Card from './Card'

export default class CardsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tarotCards: []
        } 
    }
    
    componentDidMount() {
        this.getCards()
      }
    
      getCards = () => {
        
        // fetch("https://tarot-card-information.herokuapp.com/")
        //   .then(resp => resp.json())
        Promise.resolve(cards)
          .then(resp => this.setState({
            tarotCards: resp.result.reverse()
          }))
          .then(this.selectCards)
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

    populateCards = () => {
        return this.state.tarotCards.map((card) => {
            console.log(card)
            return <View style={styles.container}>
                        <Text style={styles.nameStyle}>{card.name}</Text>
                        <Text style={styles.typeStyle}>{card.type}</Text>
                    <View style={{
                        width: 112,
                        height: 200,
                        margin: 5,
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: '#feea65'
                    }}><Image style={styles.imageStyle} source={{ uri: card.img }}/>
                    </View>
                    <ScrollView style={{ height: 200 }}>
                        <Text style={styles.descText}>{card.desc}</Text>
                    </ScrollView>
                    <View style={{ width: 340, borderWidth: 1, borderColor: '#feea65', margin: 30 }}></View>
                    </View>
        })
    }

    render () {
        
        return (
            <ScrollView contentContainerStyle="center" style={styles.wholePage}> 
            <View style={styles.headerStyle}>
                <Text style={styles.textStyle}>Explore Cards</Text>
                <View style={{ width: 340, borderWidth: 1, borderColor: '#feea65', marginBottom: 30 }}></View>
                {this.populateCards()}
                </View>
            </ScrollView>
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
        paddingTop: 30,
        paddingBottom: 30
    },
    nameStyle: {
        fontSize: 28,
        color: "white",
        fontFamily: "Bodoni 72 Oldstyle",
        letterSpacing: 1.5
    },
    typeStyle: {
        fontSize: 18,
        color: "white",
        fontFamily: "Bodoni 72 Oldstyle",
        letterSpacing: 1.5,
        marginBottom: 10
    },
    textStyle: {
        fontSize: 55,
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
    imageStyle: {
        height: 450,
        flex: 1,
        width: null,
        marginBottom: 10
    },
    descText: {
        fontSize: 12,
        color: "white",
        fontFamily: "Bodoni 72 Oldstyle",
        letterSpacing: 1.5,
        textAlign: 'justify',
        marginTop: 10
    }
})