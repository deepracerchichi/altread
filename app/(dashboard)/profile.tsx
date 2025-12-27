import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { useUser } from '../../hooks/useUser'
import ThemedButton from '../../components/ThemedButton'
import ThemedBtnText from '../../components/ThemedBtnText'
import { Fonts } from '../../constants/fonts'
import pfp from '../../assets/img/Vector.png'
import Avatar from '../../components/Avatar'
import Hamburger from '../../components/Hamburger'
import { Colors } from '../../constants/colors'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '../../contexts/ThemeContext'

const Profile = () => {
  // @ts-ignore
  const {logout, user} = useUser()
  const [open, setOpen] = useState(false)
  const { themeMode, currentTheme, setThemeMode } = useTheme()
  const theme = Colors[currentTheme]

  const handlePress = () => {
    setOpen((prevopen)=> (!prevopen))
  }

  const handleTheme = () => {
    // Cycle through: auto -> light -> dark -> auto
    if (themeMode === 'auto') {
      setThemeMode('light')
    } else if (themeMode === 'light') {
      setThemeMode('dark')
    } else {
      setThemeMode('auto')
    }
    setOpen(false) // Close popup after selection
  }

  const getThemeIcon = () => {
    if (themeMode === 'auto') {
      return <Ionicons name='phone-portrait-outline' size={24} color={theme.title} />
    } else if (themeMode === 'dark') {
      return <Ionicons name='moon' size={24} color={theme.title} />
    } else {
      return <Ionicons name='sunny' size={24} color={theme.title} />
    }
  }

  const getThemeLabel = () => {
    if (themeMode === 'auto') return 'Auto'
    if (themeMode === 'dark') return 'Dark'
    return 'Light'
  }
  
  return (
    <ThemedView style={styles.container} safe={true}>
      <ThemedView style={styles.hamburger}>
        <Hamburger style={styles.hamburger} onPress={handlePress}/>
        {open && (
          <ThemedView style={styles.popupContainer}>
            <ThemedButton style={styles.popup}>
              <ThemedText style={styles.popuptext}>Edit Profile</ThemedText>
            </ThemedButton>
            <ThemedButton style={styles.popup} onPress={handleTheme}>
              <ThemedView style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <ThemedText style={styles.popuptext}>Theme: {getThemeLabel()}</ThemedText>
                {getThemeIcon()}
              </ThemedView>
            </ThemedButton>
            <ThemedButton style={styles.popup}>
              <ThemedText style={styles.popuptext}>Settings</ThemedText>
            </ThemedButton>
          </ThemedView>
        )}
      </ThemedView>
      <Spacer />
      <ThemedView style={{alignItems: 'center'}}>
        <ThemedView style= {{marginBottom: 50,}}>
          <Avatar source={pfp} size={150}/>
        </ThemedView>
        <ThemedView style={{flexDirection: 'row', alignItems: 'center'}}>
          <ThemedText style={{fontFamily: Fonts.regular, fontSize: 20, textAlign: 'center', marginHorizontal: 10,}}>Email:</ThemedText>
          <ThemedText title={false} style={styles.header}>
            {user.email}
          </ThemedText>
        </ThemedView>
        <Spacer height={20}/>
        
        <ThemedButton style={{}} onPress={logout}>
          <ThemedBtnText style={{}}>Log out</ThemedBtnText>
        </ThemedButton>
      </ThemedView>
    </ThemedView>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        fontFamily: Fonts.regular,
        fontSize: 18,
        textAlign:'center',
        borderColor: "#b8c7d1ff",
        borderWidth: 1,
        padding: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    hamburger: {
      alignItems: 'flex-start',
      marginHorizontal: 10,
      marginTop: 10
    },
    popup: {
      marginVertical: 5,
      padding: 15,
      borderRadius: 8,
      width:150,
      backgroundColor: '#ffffffff'
    },
    popuptext: {
      fontSize: 16,
    },
    popupContainer: {
      position: 'absolute',
      top: 50,
      left: 10,
      right: 0,
      marginHorizontal: 10,
      borderRadius: 10,
      padding: 20,
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      zIndex: 1000,
      width: 200,
      alignItems:'center',
      backgroundColor: '#a8deffff'
    },
    profile: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      alignSelf: 'center',
    }
})