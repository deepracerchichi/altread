import { Keyboard, StyleSheet, Text, useColorScheme} from 'react-native'
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
        {/* <Spacer /> */}
        <ThemedText style={styles.title} title={true}>Register  your account</ThemedText>
        <Spacer />
        <ThemedTextInput
            style={{
                width: '80%', 
                marginBottom: 20, 
                backgroundColor: focus ? 'rgba(194, 193, 193, 0.5)' : theme.uiBackground
            }}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={setEmail}
            onFocus={() => setFocus(true)}    // ← This!
            onBlur={() => setFocus(false)}     // ← And this!
            value={email}
        />
         <ThemedTextInput
            style={{
                width: '80%', 
                marginBottom: 20, 
                backgroundColor: focusp ? 'rgba(194, 193, 193, 0.5)' : theme.uiBackground
            }}
            placeholder="Password"
            onChangeText={setPassword}
            onFocus={() => setFocusp(true)}    // ← This!
            onBlur={() => setFocusp(false)}
            value={password}
            secureTextEntry 
        />

        <ThemedButton style={{}} onPress={handleSubmit}>
            <Text style={{color:'white'}}>Register</Text>
        </ThemedButton>

        <Spacer/>
        {error && <Text style={styles.error}>{error}</Text>}
        <Link href={'/login'}>
            <ThemedText style={{ textAlign:'center' }}> Already have an account? Login here</ThemedText>
        </Link>
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
        fontWeight: 'bold',
        fontSize: 18,
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
    }
})