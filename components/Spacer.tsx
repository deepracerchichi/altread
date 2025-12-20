import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Spacer = ({width = '100%' as any, height = 40}) => {
  return (
    <View style={{ width, height}} />
  )
}

export default Spacer