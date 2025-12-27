import { Stack } from "expo-router"
import { Colors } from "../constants/colors"
import { useColorScheme } from "react-native"
import { StatusBar } from "expo-status-bar"
import { UserProvider } from "../contexts/UserContext"
import { BooksProvider } from "../contexts/BooksContext"
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, } from "@expo-google-fonts/poppins"
import { useEffect } from "react"

import * as SplashScreen from "expo-splash-screen"
import { Starter } from "../components/Starter"
import { ThemeProvider } from '../contexts/ThemeContext';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  const [fontsLoaded] = useFonts({Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold})
  useEffect(()=>{
    if(fontsLoaded) {
      SplashScreen.hideAsync()
    }
    
  },[fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    
      <UserProvider>
        <BooksProvider>
          <ThemeProvider>
            <StatusBar style="auto" />
            <Stack screenOptions={{
              headerStyle: { backgroundColor: theme.navBackground },
              headerTintColor: theme.title,
            }}>
              {/* Individual Screens */}
              <Stack.Screen name="index" options={{ title: "Home", headerShown: false }} />
              <Stack.Screen name="(auth)" options={{ headerShown: false }} />
              <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
            </Stack>
          </ThemeProvider>
        </BooksProvider>
      </UserProvider>
    
  )
}