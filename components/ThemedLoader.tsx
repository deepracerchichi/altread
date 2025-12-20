import { ActivityIndicator, useColorScheme } from "react-native"
import ThemedView from "./ThemedView"
import { Colors } from "../constants/colors"

export const ThemedLoader = () => {
    const colorScheme= useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    return (
        <ThemedView style={{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <ActivityIndicator size={24} color={theme.text}/>
        </ThemedView>
    )
}