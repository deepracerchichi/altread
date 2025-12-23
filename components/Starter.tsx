import { ActivityIndicator, useColorScheme } from "react-native"
import ThemedView from "./ThemedView"
import { Colors } from "../constants/colors"
import ThemedLogo from "./ThemedLogo"

export const Starter = () => {

    const colorScheme= useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    return (
    <ThemedView style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
        <ThemedLogo />
        
        <ActivityIndicator size={32} color={theme.text}/>
    </ThemedView>
    )
}