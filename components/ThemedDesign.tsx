import { StyleSheet, useColorScheme, useWindowDimensions, View } from "react-native"
import LightDesign from "../assets/img/ellipse.svg"
import DarkDesign from "../assets/img/ellipse2.svg"
import ThemedView from "./ThemedView"

export default function ThemedDesign({...props}) {
    const colorScheme = useColorScheme()
    const {width, height} = useWindowDimensions()
    const Design = colorScheme === "dark" ? DarkDesign : LightDesign

    return (
        // @ts-ignore
        <View>
        <Design 
        //    width={width * 0.45}
        //     height={height * 0.45}
            style={styles.image}
            {...props}
        />

        {/* <Design 
           width={width * 0.45}
            height={height * 0.45}
            style={styles.twoimage}
        /> */}
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