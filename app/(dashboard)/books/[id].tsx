import { StyleSheet } from 'react-native'
import React from 'react'
import ThemedView from '../../../components/ThemedView'
import ThemedText from '../../../components/ThemedText'
import { useLocalSearchParams } from 'expo-router'
const BookDetails = () => {

    const {id} = useLocalSearchParams()

  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedText style={{}}>BookDetails -{id}</ThemedText>
    </ThemedView>
  )
}

export default BookDetails

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'stretch',
    }
})