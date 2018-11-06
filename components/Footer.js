import React, { Component } from "react";
import { Text, View } from "react-native";

const Footer = props => {
  return (
    <View style={styles.footerStyle}>
      <Text style={styles.textStyle}>{props.footerText}</Text>
    </View>
  );
};

const styles = {
  footerStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    paddingTop: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative"
  },
  textStyle: {
    fontSize: 12
  }
};

export default Footer;
