import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import {Colors} from '../constants/colors'
import { useTheme } from '../contexts/ThemeContext'

const ThemedCard = ({style, ...props}) => {
    const { currentTheme } = useTheme() // Use this instead
    const theme = Colors[currentTheme]
  return (
    < View style={[{backgroundColor:theme.uiBackground}, style, styles.card]} {...props} />
  )
}

export default ThemedCard

const styles = StyleSheet.create({
    card: {
        borderRadius:5,
        padding:20
    }
})