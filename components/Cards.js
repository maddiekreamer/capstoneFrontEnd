import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import CardSection from './CardSection';
import Card from './Card';

const Cards = ({name, desc, img, type}) =>{

        return (
<Card style={{ paddingTop: 5 }}>
        <CardSection>
          <View>
              <Text style={styles.headerTextStyle}>{name}</Text>
          </View>
        </CardSection>
        <Image style={styles.imageStyle} source={{ uri: img }} />
        <CardSection>
          <View>
            <Text style={styles.descText}>{desc}</Text>
          </View>
          <View>
            <Text style={styles.timeText}>
              {type}
            </Text>
          </View>
        </CardSection>
      </Card>
        )
    }


    const styles = {
        headerContentStyle: {
          flexDirection: "column",
          justifyContent: "space-around"
        },
        headerTextStyle: {
          fontSize: 18,
          fontWeight: "bold"
        },
        thumbnailStyle: {
          height: 80,
          width: 80,
          borderRadius: 2
        },
        imageContainerStyle: {
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 0,
          marginRight: 0
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