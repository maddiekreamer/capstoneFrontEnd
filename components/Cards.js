import React, { Component } from "react"
import { View, Image, Text } from "react-native"
import Card from "./Card"

const Cards = ({ name, desc, img, type, toggleSelection, flipped, index }) => {
  pressedCard = () => {
    this.setState.tarotCards
  }

  return (
    <Card style={{paddingTop: 5}}>
      <View
        style={{
          width: 112,
          height: 200,
          margin: 5,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#feea65'
        }}
        onTouchStart={toggleSelection}
      >
        {flipped.indexOf(index) > -1 ? <Image style={styles.imageStyle} source={{uri: img}}/>: <Image style={styles.imageStyle} source={require("../src/assets/cardBack.png")}/>}
      </View>
    </Card>
  )
}

const styles = {
  imageStyle: {
    height: 200,
    flex: 1,
    width: null,
    borderRadius: 10
  }
}

export default Cards