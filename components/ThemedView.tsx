import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../constants/colors'
import { SafeAreaInsetsContext, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTheme } from '../contexts/ThemeContext'

const ThemedView = ({style, safe = false, ...props}: any) => {
    const { currentTheme } = useTheme() // Use this instead
    const theme = Colors[currentTheme]
    const insets = useSafeAreaInsets()

    if(!safe) {
      return (
        <View style={[{backgroundColor: theme.background}, style]} {...props} />
      )
    }

  return (
    <View style={[{
      backgroundColor: theme.background, 
      paddingTop:insets.top, 
      paddingBottom:insets.bottom}, style]} {...props} />
  )
}

export default ThemedView

const styles = StyleSheet.create({})