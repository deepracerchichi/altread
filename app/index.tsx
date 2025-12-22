import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import LOGO from "../assets/img/logo_light.png"
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const Home = () => {
  return (
    
        <ThemedView style={styles.container}>
            <ThemedLogo  />
            <ThemedText style={styles.title} title={true} >Home</ThemedText>
            
            <Spacer />
            <ThemedText style={{}}>yoooo</ThemedText>
            <Spacer height={20} />
            
            <Link href="/login" style={styles.link}>
            <ThemedText style={{}}>Login Page</ThemedText>
            </Link>
            <Link href="/register" style={styles.link}>
            <ThemedText style={{}}>Register Page</ThemedText></Link>
            <Link href="/profile" style={styles.link}>
            <ThemedText style={{}}>Profle Page</ThemedText></Link>
        </ThemedView>

  )
}

export default Home

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    
    link:{
        paddingBottom:19,
        textDecorationLine:'underline'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    
})