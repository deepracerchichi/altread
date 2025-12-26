import { StyleSheet, Text, View, Image, useColorScheme } from 'react-native'
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
import { useEffect } from 'react'
import ThemedCard from '../../components/ThemedCard'





const Profile = () => {
  // @ts-ignore
  const {logout, user} = useUser()
  const [open, setOpen] = useState(false)
  const colortheme= useColorScheme()
  const theme = Colors[colortheme] ?? Colors.light

  

  const handlePress = () => {
    setOpen((prevopen)=> (!prevopen))
  }
  
  return (
    <ThemedView style={styles.container} safe={true}>
      {/* <Spacer /> */}
      <ThemedView style={styles.hamburger}>
        <Hamburger style={styles.hamburger} onPress={handlePress}/>
        {open && (
          <ThemedView style={styles.popupContainer}>
            <ThemedButton style={styles.popup}><ThemedText style={styles.popuptext}>Notifications</ThemedText></ThemedButton>
            <ThemedButton style={styles.popup} ><ThemedText style={styles.popuptext}>Theme: {colortheme==='dark'? (<Ionicons name='moon-outline' size={24} color={theme.title} />) : (<Ionicons name='sunny-outline' size={24} color={theme.title} />)}</ThemedText></ThemedButton>
            <ThemedButton style={styles.popup}><ThemedText style={styles.popuptext}></ThemedText></ThemedButton>
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
        // alignItems: 'center',
        // justifyContent: 'center',
        
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
      top: 50, // Adjust based on your hamburger button height
      left: 10,
      right: 0,
      marginHorizontal: 10,
      borderRadius: 10,
      padding: 20,
      elevation: 5, // Android shadow
      shadowColor: '#000', // iOS shadow
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