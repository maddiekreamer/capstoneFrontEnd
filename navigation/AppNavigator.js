import React from 'react'
import { createSwitchNavigator } from 'react-navigation'
import MainTabNavigation from './MainTabNavigation'

export default createSwitchNavigator({
  Main: MainTabNavigation
})