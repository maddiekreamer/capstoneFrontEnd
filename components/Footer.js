import React, { Component } from 'react';
import { Text, View } from 'react-native';

const Footer = props => {
    return (
        <View style={styles.footerStyle}>
            <Text style={styles.textStyle}>{props.footerText}</Text>
        </View>
    )
};

const styles = {
    // footerStyle: {
    //     backgroundColor: "#F8F8F8",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     height: 25,
    //     paddingTop: 1,
    //     shadowColor: "#000",
    //     shadowOffset: { width: 0, height: 2 },
    //     shadowOpacity: 0.2,
    //     elevation: 2,
    //     position: "relative"
    //     },
    //     textStyle: {
    //     fontSize: 12
    //     },
    //     iconPosition: {
    //     flex: 1,
    //     flexDirection: "row",
    //     alignItems: "right",
    //     justifyContent: "right",
    //     marginLeft: "50%"
    //     }
    };

export default Footer;