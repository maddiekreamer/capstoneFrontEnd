import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import ThreeCard from '../components/ThreeCard'
import Home from '../components/Home'
import TarotHistory from '../components/TarotHistory'
import Instructions from '../components/Instructions'
// import CardsList from '../components/CardsList'

  const HomeStack = createStackNavigator({
    Home: Home,
    ThreeCard: ThreeCard,
    TarotHistory: TarotHistory,
    Instructions: Instructions,
    // CardsList: CardsList
  })

  export default createBottomTabNavigator(
    {
      "Copyright ∙ 2018" : HomeStack
    },
    {
      tabBarOptions : {
        activeTintColor: '#121827',
        inactiveTintColor: '#121827',
        labelStyle: {
          fontSize: 18,
          fontFamily: "Bodoni 72 Oldstyle",
          letterSpacing: 1
        },
        style: {
          backgroundColor: "#F8F8F8",
          justifyContent: "center",
          alignItems: "center",
          height: 30
        }
      }
    }
  )