import { Keyboard, StyleSheet, Text} from 'react-native'
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

const login = () => {
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
    <ThemedView style={styles.container}>
        {/* <Spacer /> */}
        <ThemedText style={styles.title} title={true}>Login to your account</ThemedText>
        <Spacer />
        <ThemedTextInput 
            style={{ width:'80%', marginBottom: 20}} 
            placeholder="Email" 
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
        />

        <ThemedTextInput
            style={{width: '80%', marginBottom: 20}}
            placeholder='Password'
            onChangeText={setPassword}
            value={password} 
            secureTextEntry
        />

        <ThemedButton style={{}} onPress={handleSubmit}>
            <Text style={{color:'white'}}>Login</Text>
        </ThemedButton>
        <Link href={'/register'}>
            <ThemedText style={{ textAlign:'center' }}> Don't have an account? Register here</ThemedText>
        </Link>
    </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
})