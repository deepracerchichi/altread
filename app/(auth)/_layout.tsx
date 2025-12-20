import { StatusBar } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { useUser } from '../../hooks/useUser'
import GuestOnly from '../../components/auth/GuestOnly'

const AuthLayout = () => {

  // @ts-ignore
  const {user} = useUser();
  console.log(user);

  return (
  
    <GuestOnly>
        <StatusBar />
        <Stack screenOptions={{headerShown:false, animation:"none"}}/>
    </GuestOnly>
  )
}

export default AuthLayout;