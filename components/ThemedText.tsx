import { Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../constants/colors'
import { Fonts } from '../constants/fonts'
import { useTheme } from '../contexts/ThemeContext'

const ThemedText = ({style, title = false, ...props}) => {
    const { currentTheme } = useTheme() // Use this instead
    const theme = Colors[currentTheme]
    const textColor = title ? theme.title : theme.text
  return (
    
    <Text style={[{color: textColor, fontFamily: Fonts.regular}, style]} {...props}/>
    
  )
}

export default ThemedText

