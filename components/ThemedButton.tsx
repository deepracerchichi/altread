import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/colors'
import { Fonts } from '../constants/fonts'

const ThemedButton = ({style, ...props}) => {
  return (
    <Pressable style={({pressed}) => [styles.btn, pressed && styles.pressed, style]} {...props}/>
  )
}

export default ThemedButton

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.primary,
        padding: 16,
        borderRadius: 6,
        marginVertical: 10,
        width: 250,
        alignItems: 'center',
        
        // fontFamily: Fonts.medium,
    },
    pressed: {
        opacity:0.5
    }
})