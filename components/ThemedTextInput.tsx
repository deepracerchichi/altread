import { TextInput, useColorScheme } from 'react-native'
import { Colors } from '../constants/colors'
import { Fonts } from '../constants/fonts'
import { useTheme } from '../contexts/ThemeContext'

export default function ThemedTextInput({ style, ...props }) {
  const { currentTheme } = useTheme() // Use this instead
  const theme = Colors[currentTheme]

  return (
    <TextInput 
      style={[
        {
          backgroundColor: theme.uiBackground, 
          color: theme.text,
          padding: 20,
          borderRadius: 6,
          fontFamily: Fonts.regular,
        }, 
        style
      ]}
      {...props}
    />
  )
}
