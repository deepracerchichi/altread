import { StyleSheet, Text, View, useColorScheme, Image } from 'react-native'
import React from 'react'
import DarkLogo from '../assets/img/logo_dark.png'
import LightLogo from '../assets/img/logo_light.png'

const ThemedLogo = ({...props}) => {
    const colorScheme= useColorScheme()
    const logo = colorScheme=== 'dark' ? DarkLogo : LightLogo
  return (
    <View>
      <Image source={logo} {...props}/>
    </View>
  )
}

export default ThemedLogo

const styles = StyleSheet.create({})