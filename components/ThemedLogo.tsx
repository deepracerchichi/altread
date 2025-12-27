import { StyleSheet, useColorScheme, useWindowDimensions } from 'react-native'
import React from 'react'
import DarkLogo from '../assets/img/logo_dark.svg'
import LightLogo from '../assets/img/logo_light.svg'
import ThemedView from './ThemedView'
import { Colors } from '../constants/colors'
import { useTheme } from '../contexts/ThemeContext'

const ThemedLogo = ({...props}) => {
    const { currentTheme } = useTheme() // Use this instead
    const theme = Colors[currentTheme]
    const { width, height } = useWindowDimensions()

    const Logo = currentTheme=== 'dark' ? DarkLogo : LightLogo
  return (
    <ThemedView>
      
      <Logo
              width={width * 0.45}
              height={height * 0.45}
              style={styles.image}
      />

    </ThemedView>
  )
}

export default ThemedLogo

const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: -17,
  }
})