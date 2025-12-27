import { StyleSheet, useColorScheme, useWindowDimensions, View } from "react-native"
import LightDesign from "../assets/img/ellipse.svg"
import DarkDesign from "../assets/img/ellipse2.svg"
import ThemedView from "./ThemedView"
import { Colors } from "../constants/colors"
import { useTheme } from "../contexts/ThemeContext"

export default function ThemedDesign({...props}) {
    const { currentTheme } = useTheme() // Use this instead
    const theme = Colors[currentTheme]
    const {width, height} = useWindowDimensions()
    const Design = currentTheme === "dark" ? DarkDesign : LightDesign

    return (
        // @ts-ignore
        <View>
        <Design 
        //    width={width * 0.45}
        //     height={height * 0.45}
            style={styles.image}
            {...props}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'none',
        // left: 20,
        // alignSelf: 'flex-start',
        // justifyContent: 'flex-start'
    },
    twoimage: {
        // resizeMode: 'cover',
        // left: 120,
        // top: 300,
    }
})