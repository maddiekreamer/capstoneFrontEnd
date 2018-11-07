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
    fontSize: 16,
    marginBottom: 12,
    color: '#121827',
    fontFamily: "Bodoni 72 Oldstyle"
  }
}

export default Footer
