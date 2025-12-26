import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, TouchableOpacity, useColorScheme, View } from "react-native"
import { Colors } from "../constants/colors"

export default function Hamburger({...props}) {
    const colorContainer= useColorScheme()
    const Theme= Colors[colorContainer] ?? Colors.light
    return(
        
        <View style={styles.container}>
            <TouchableOpacity {...props}>
            <Ionicons name='ellipsis-vertical' size={25} color={Theme.iconColorFocused}/>
            </TouchableOpacity>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {

    }
})