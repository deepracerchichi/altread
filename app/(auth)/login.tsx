import { Keyboard, StyleSheet, Text, View} from 'react-native'
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
    const fontSceme= useFonts
    // @ts-ignore
    const font= Fonts[fontSceme];
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
        <ThemedDesign style={{top:-150}}/>
        <ThemedDesign style={{top:-450, left: 90}}/>
        <View style={styles.form}>
            <ThemedText style={styles.title} title={true}>Login to your account</ThemedText>
            <Spacer />
            <ThemedTextInput 
                style={{ width:'310', marginBottom: 20}} 
                placeholder="Email" 
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}
            />

            <ThemedTextInput
                style={{width: '310', marginBottom: 20}}
                placeholder='Password'
                onChangeText={setPassword}
                value={password} 
                secureTextEntry
            />

            <ThemedButton style={{}} onPress={handleSubmit}>
                <ThemedBtnText style={{}}>Login</ThemedBtnText>
            </ThemedButton>
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
    },
    form: {
        top:-250,
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    }
})