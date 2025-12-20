import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { useUser } from '../../hooks/useUser'
import ThemedButton from '../../components/ThemedButton'

const Profile = () => {
  // @ts-ignore
  const {logout, user} = useUser()
  return (
    <ThemedView style={styles.container} safe={true}>
      <Spacer />
      <ThemedText title={true} style={styles.header}>
        {user.email}
      </ThemedText>
      <Spacer height={20}/>
      <ThemedText style={{}}>Time to start reding some Book</ThemedText>
      <Spacer height={20}/>
      <ThemedButton style={{}} onPress={logout}>
        <Text style={{color: "#dbd1d1ff"}}>Log out</Text>
      </ThemedButton>
    </ThemedView>
  )
}

export default Profile

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        
    },
    header: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign:'center'
    }
})