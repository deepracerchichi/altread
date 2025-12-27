import { ActivityIndicator, useColorScheme } from "react-native"
import ThemedView from "./ThemedView"
import { Colors } from "../constants/colors"
import { useTheme } from "../contexts/ThemeContext"

export const ThemedLoader = () => {
    const { currentTheme } = useTheme() // Use this instead
    const theme = Colors[currentTheme]
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