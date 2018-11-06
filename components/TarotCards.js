import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import CardSection from "./CardSection";
import Card from "./Card";

const Cards = ({ name, desc, img, type }) => {
  return (
    <Card style={{ paddingTop: 5 }}>
      <CardSection>
        <View>
          <Text style={styles.headerTextStyle}>{name}: </Text>
        </View>
        <View>
          <Text style={styles.headerTextStyle}>{type}</Text>
        </View>
      </CardSection>
      <Image style={styles.imageStyle} source={{ uri: img }} />
      <CardSection>
        <View>
          <Text style={styles.descText}>{desc}</Text>
        </View>
      </CardSection>
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
  descText: {
    marginLeft: 20
  }
};

export default Cards;
