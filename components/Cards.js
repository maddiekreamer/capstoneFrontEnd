import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import CardSection from "./CardSection";
import Card from "./Card";
import TarotCards from "./TarotCards";

const Cards = ({ name, desc, img, type, toggleSelection, flipped, index }) => {
  pressedCard = () => {
    console.log(this.state.tarotCards);
    this.setState.tarotCards;
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
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  headerTextStyle: {
    fontSize: 18,
    fontWeight: "bold"
  },
  imageStyle: {
    height: 800,
    flex: 1,
    width: null
  },
  profileImageStyle: {
    height: 50,
    flex: 1,
    width: null,
    borderRadius: 27
  },
  timeText: {
    marginLeft: 38
  },
  descText: {
    marginLeft: 20
  },
  buttonStyle2: {
    backgroundColor: "red",
    marginTop: 15
  }
};

export default Cards;
