import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, TouchableOpacity, useColorScheme, View } from "react-native"
import { Colors } from "../constants/colors"
import { useTheme } from "../contexts/ThemeContext"

export default function Hamburger({...props}) {
    const { currentTheme } = useTheme() // Use this instead
    const theme = Colors[currentTheme]
    return(
        
        <View style={styles.container}>
            <TouchableOpacity {...props}>
            <Ionicons name='ellipsis-vertical' size={25} color={theme.iconColorFocused}/>
            </TouchableOpacity>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {

    }
})