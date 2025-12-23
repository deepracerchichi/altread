import { StyleSheet } from "react-native"
import {Text } from "react-native"
import { Fonts } from "../constants/fonts"

export default function ThemedBtnText({style, ...props}) {
    return (
        <Text style={[styles.text, style]} {...props} />
    )
}


const styles= StyleSheet.create({
    text: {
        fontFamily: Fonts.medium,
        fontSize: 16,
        color: 'white',
    }
})