import { StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import ThemedView from '../../../components/ThemedView'
import ThemedText from '../../../components/ThemedText'
import { useLocalSearchParams } from 'expo-router'
import { useBooks } from '../../../hooks/useBooks'
import ThemedCard from '../../../components/ThemedCard'
import Spacer from '../../../components/Spacer'
import { ThemedLoader } from '../../../components/ThemedLoader'
const BookDetails = () => {
    const [books, setBooks]= useState(null)
    const {id} = useLocalSearchParams()
    // @ts-ignore
    const {fetchBookById} = useBooks()

    useEffect(
        ()=> {
            async function loadBook() {
                const bookData= await fetchBookById(id)
                setBooks(bookData)
            }

            loadBook()
        },
        [id]
    )

    if (!books) {
        return (
            <ThemedView safe={true} style={styles.container}>
                <ThemedLoader />
            </ThemedView>
        )
    }

  return (
    <ThemedView safe={true} style={styles.container}>
        <ThemedCard style={styles.card}>
            <ThemedText style={styles.title}>{books.title}</ThemedText>
            <ThemedText style={{}}>Written by: {books.author}</ThemedText>
            <ThemedText style={{}} title={true}>Book Description</ThemedText>
            <Spacer height={10}/>
            <ThemedText style={{}}>{books.description}</ThemedText>
        </ThemedCard>
    </ThemedView>
  )
}

export default BookDetails

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'stretch',
    },
    card: {
        margin:20,
    },
    title: {
        fontSize:22,
        marginVertical: 10,
    }
})