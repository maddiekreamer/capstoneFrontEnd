import React, { Component } from 'react';
import { Text, View } from 'react-native';

const Header = props => {
    return (
        <View style={styles.headerStyle}>
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
    )
};

const styles = {
    headerStyle: {
        backgroundColor: "#F8F8F8",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        paddingTop: 30,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: "relative"
        },
        textStyle: {
        fontSize: 20
        },
        iconPosition: {
        flex: 1,
        flexDirection: "row",
        alignItems: "right",
        justifyContent: "right",
        marginLeft: "50%"
        }
    };

export default Header;