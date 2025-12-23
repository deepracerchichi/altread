import { TextInput, useColorScheme } from 'react-native'
import { Colors } from '../constants/colors'
import { Fonts } from '../constants/fonts'

export default function ThemedTextInput({ style, ...props }) {
  const colorScheme = useColorScheme() ?? 'light'
  const theme = Colors[colorScheme] 

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
