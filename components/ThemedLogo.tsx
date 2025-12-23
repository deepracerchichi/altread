import { StyleSheet, useColorScheme, useWindowDimensions } from 'react-native'
import React from 'react'
import DarkLogo from '../assets/img/logo_dark.svg'
import LightLogo from '../assets/img/logo_light.svg'
import ThemedView from './ThemedView'

const ThemedLogo = ({...props}) => {
    const colorScheme= useColorScheme()
    const { width, height } = useWindowDimensions()

    const Logo = colorScheme=== 'dark' ? DarkLogo : LightLogo
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