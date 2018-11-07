import React, { Component } from "react"
import { Text, View } from "react-native"

const Header = props => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  )
}

const styles = {
  headerStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    paddingTop: 30
  },
  textStyle: {
    fontSize: 22,
    color: '#121827',
    fontFamily: "Bodoni 72 Oldstyle"
  },
}

export default Header;
