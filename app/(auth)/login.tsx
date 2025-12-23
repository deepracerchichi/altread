import { Keyboard, StyleSheet, Text, useColorScheme, View} from 'react-native'
import React, { useState } from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'
import ThemedButton from '../../components/ThemedButton'
import { Colors } from '../../constants/colors'
import ThemedTextInput from '../../components/ThemedTextInput'
import { TouchableWithoutFeedback } from 'react-native'
import { useUser } from '../../hooks/useUser'
import { useFonts } from '@expo-google-fonts/poppins'
import { Fonts } from '../../constants/fonts'
import ThemedBtnText from '../../components/ThemedBtnText'
import ThemedDesign from '../../components/ThemedDesign'


const login = () => {

    const colorScheme=useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [focusEmail, setFocusEmail] = useState(false);
    const [focusPassword, setFocusPassword]= useState(false)
    // @ts-ignore
    const { login} = useUser()
        const handleSubmit = async () => {
            try {
                await login(email, password)
            } catch (error) {
                
            }
        }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <ThemedView safe={false} style={styles.container}>
        {/* <Spacer /> */}
        {theme === Colors.dark ?
        <>
        <ThemedDesign style={{position: 'absolute', top:-150}}/>
        <ThemedDesign style={{position: 'absolute', top:-190, left: -90}}/>
        </>
        :
        <ThemedDesign style={{position: 'absolute', top:-70, left: -90}}/>
        
        }
        <View style={styles.form}>
            <ThemedText style={styles.title} title={true}>Login to your account</ThemedText>
            {/* <Spacer /> */}
            <ThemedText style={styles.sub}>Welcome Back. You've been missed!</ThemedText>
            <Spacer />
            <ThemedTextInput 
                style={{ width:'310', marginBottom: 20, backgroundColor: focusEmail? theme.focusuiBackground: theme.uiBackground}} 
                placeholder="Email" 
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}
                onFocus={()=>setFocusEmail(true)}
                onBlur={()=>setFocusEmail(false)}
            />

            <ThemedTextInput
                style={{width: '310', marginBottom: 20, backgroundColor: focusPassword? theme.focusuiBackground: theme.uiBackground}}
                placeholder='Password'
                onChangeText={setPassword}
                value={password} 
                secureTextEntry
                onFocus={()=>setFocusPassword(true)}
                onBlur={()=>setFocusPassword(false)}
            />

            <ThemedButton style={{}} onPress={handleSubmit}>
                <ThemedBtnText style={{}}>Login</ThemedBtnText>
            </ThemedButton>

            <Spacer />

            <Link href={'/register'}>
                <ThemedText style={{ textAlign:'center' }}> Don't have an account? Register here</ThemedText>
            </Link>
        </View>
    </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        paddingBottom: 20

    },
    title: {
        fontFamily: Fonts.semibold,
        fontWeight: 'bold',
        fontSize: 30,
        top:-90,
        marginBottom: -70
    },
    sub:{
        fontFamily: Fonts.semibold,
        fontSize: 18,
        width: 250,
        textAlign: 'center'
    },
    form: {
        // top:-250,
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    }
})