import { ActivityIndicator, useColorScheme } from "react-native"
import ThemedView from "./ThemedView"
import { Colors } from "../constants/colors"
import ThemedLogo from "./ThemedLogo"
import { useTheme } from "../contexts/ThemeContext"

export const Starter = () => {

    const { currentTheme } = useTheme() // Use this instead
    const theme = Colors[currentTheme]
    return (
    <ThemedView style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
        <ThemedLogo />
        
        <ActivityIndicator size={32} color={theme.text}/>
    </ThemedView>
    )
}