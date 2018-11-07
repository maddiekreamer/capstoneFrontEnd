import React, { Component } from "react"
import { Text, View } from "react-native"

const Footer = props => {
  return (
    <View style={styles.footerStyle}>
      <Text style={styles.textStyle}>{props.footerText}</Text>
    </View>
  )
}

const styles = {
  footerStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 50
  },
  textStyle: {
    fontSize: 14,
    marginBottom: 12,
  }
}

export default Footer;
