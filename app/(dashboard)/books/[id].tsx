import { StyleSheet , Text} from 'react-native'
import React, { useEffect, useState } from 'react'
import ThemedView from '../../../components/ThemedView'
import ThemedText from '../../../components/ThemedText'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useBooks } from '../../../hooks/useBooks'
import ThemedCard from '../../../components/ThemedCard'
import Spacer from '../../../components/Spacer'
import { ThemedLoader } from '../../../components/ThemedLoader'
import ThemedButton from '../../../components/ThemedButton'
import { Colors } from '../../../constants/colors'
const BookDetails = () => {
    const [books, setBooks]= useState(null)
    const {id} = useLocalSearchParams()
    // @ts-ignore
    const {fetchBookById, deleteBook} = useBooks()

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
    const router = useRouter();

    const handleDelete = async () => {
        await deleteBook(id)
        setBooks(null)
        router.replace('/books')
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
        <ThemedButton onPress={handleDelete} style={styles.delete}>
            <Text style={{color: '#fff', textAlign: 'center'}}>Delete Book</Text>
        </ThemedButton>
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
    },
    delete: {
        marginTop: 40,
        backgroundColor: Colors.warning,
        width: 200,
        alignSelf: 'center',
    }
})