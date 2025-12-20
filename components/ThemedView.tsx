import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../constants/colors'
import { SafeAreaInsetsContext, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

const ThemedView = ({style, safe = false, ...props}: any) => {
    const colorScheme = useColorScheme() ?? 'light'
    const theme = Colors[colorScheme]
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