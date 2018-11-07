import React, { Component } from "react"
import { Text, View, Image } from "react-native"
import CardSection from "./CardSection"
import Card from "./Card"
import TarotCards from "./TarotCards"

const Cards = ({ name, desc, img, type, toggleSelection, flipped, index }) => {
  pressedCard = () => {
    this.setState.tarotCards
  };

  return (
    <Card style={{ paddingTop: 5 }}>
      <View
        style={{
          width: 112,
          height: 200,
          margin: 5,
          backgroundColor: "powderblue"
        }}
        onTouchStart={toggleSelection}
      >
      {flipped.indexOf(index) > -1 ? <Image style={styles.imageStyle} source={{uri: img}}/> : console.log('')}
      </View>
    </Card>
  )
}

const styles = {
  imageStyle: {
    height: 800,
    flex: 1,
    width: null
  }
};

export default Cards;
