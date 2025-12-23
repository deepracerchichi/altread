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
import ThemedBtnText from '../../components/ThemedBtnText'
import ThemedDesign from '../../components/ThemedDesign'
import { Fonts } from '../../constants/fonts'

const register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [focus, setFocus] = useState(false);
    const [focusp, setFocusp] = useState(false);
    const [error, setError] = useState(null);
    const colorScheme= useColorScheme() ?? 'light'
    const theme= Colors[colorScheme]
    // @ts-ignore
    const { register} = useUser()
    const handleSubmit = async () => {
        setError(null)
        try {
            await register(email, password)
        } catch (error) {
            setError((error as Error).message)
        }
    }

    
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <ThemedView style={styles.container}>
        {theme === Colors.dark ?
            <>
            <ThemedDesign style={{position: 'absolute', top:-150}}/>
            <ThemedDesign style={{position: 'absolute', top:-190, left: -90}}/>
            </>
            :
            <ThemedDesign style={{position: 'absolute', top:-70, left: -90}}/>
            
        }
        {/* <Spacer /> */}
        <View style={styles.form}>
            <ThemedText style={styles.title} title={true}>Sign up for your account</ThemedText>
            <ThemedText style={styles.sub}>Create an account and explore as many books as you wish!</ThemedText>
            <Spacer />
            <ThemedTextInput
                style={{
                    width: '310', 
                    marginBottom: 20, 
                    backgroundColor: focus ? theme.focusuiBackground : theme.uiBackground
                }}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={setEmail}
                onFocus={() => setFocus(true)}   
                onBlur={() => setFocus(false)}     
                value={email}
            />
            <ThemedTextInput
                style={{
                    width: '310', 
                    marginBottom: 20, 
                    backgroundColor: focusp ? theme.focusuiBackground : theme.uiBackground
                }}
                placeholder="Password"
                onChangeText={setPassword}
                onFocus={() => setFocusp(true)} 
                onBlur={() => setFocusp(false)}
                value={password}
                secureTextEntry 
            />

            <ThemedButton style={{}} onPress={handleSubmit}>
                <ThemedBtnText style={{}}>Sign Up</ThemedBtnText>
            </ThemedButton>

            <Spacer/>
            {error && <Text style={styles.error}>{error}</Text>}
            <Link href={'/login'}>
                <ThemedText style={{ textAlign:'center' }}> Already have an account? Login here</ThemedText>
            </Link>
        </View>
    </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: Fonts.semibold,
        fontWeight: 'bold',
        fontSize: 30,
        top:-90,
        marginBottom: -70
    },
    error: {
        color: Colors.warning,
        padding:10,
        backgroundColor: 'rgba(247, 247, 247, 1)',
        borderColor: Colors.warning,
        borderWidth: 1,
        borderRadius:6,
        marginHorizontal:10,
        marginBottom:10,
        width: '80%'
    },
    sub: {
        fontFamily: Fonts.semibold,
        fontSize: 18,
        width: 250,
        textAlign: 'center'
    },
    form: {
        // top:-250,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})