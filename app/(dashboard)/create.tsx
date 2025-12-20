import { Alert, Keyboard, Modal, StyleSheet, Text, TouchableWithoutFeedback, useColorScheme, View } from 'react-native'
import React, { useState } from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedTextInput from '../../components/ThemedTextInput'
import ThemedButton from '../../components/ThemedButton'
import { useBooks } from '../../hooks/useBooks'
import { Colors } from '../../constants/colors'
import { useRouter } from 'expo-router'

const Create = () => {
  const [title, setTitle]= useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false)
  const [focus, setFocus] = useState(false)
  const [focusp, setFocusp] = useState(false)
  const [focusd, setFocusd] = useState(false)

  const colorScheme= useColorScheme() ?? 'light'
  const theme= Colors[colorScheme]
  // @ts-ignore
  const {createBook} = useBooks()
  const router = useRouter()

  async function handleSubmit() {
    if (!title.trim() || !author.trim() || !description.trim()) return

    setLoading(true)
    
    // create the book
    await createBook({ title, author, description })

    // reset fields
    setTitle("")
    setAuthor("")
    setDescription("")

    // redirect
    router.replace("/books")

    // reset loading state
    setLoading(false) 
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container} safe={true}>
        <ThemedText title={true} style={styles.heading}>Add a New Book</ThemedText>
        <Spacer height={20}/>

        <ThemedTextInput 
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
          onFocus={() => setFocus(true)}    
            onBlur={() => setFocus(false)}
        />
        <Spacer />

        <ThemedTextInput 
          style={styles.input}
          placeholder="Author"
          value={author}
          onChangeText={setAuthor}
          onFocus={() => setFocusp(true)}
          onBlur={() => setFocusp(false)}
          />
          <Spacer/>

        <ThemedTextInput
          style={styles.multiline}
          placeholder="Enter your description"
          value={description}
          onChangeText={setDescription}
          onFocus={() => setFocusd(true)}
          onBlur={() => setFocusd(false)}
          multiline={true}
        />
        <Spacer />
        
        <ThemedButton style={{}} disabled={loading} onPress={handleSubmit}>
          <Text style={{ color: '#fff' }}>
            {loading ? "Saving..." : "Create Book"}
          </Text>
        </ThemedButton>

        

      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Create

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  input: {
    padding: 20,
    borderRadius: 6,
    alignSelf: 'stretch',
    marginHorizontal: 40,
  },
  multiline: {
    padding: 20,
    borderRadius: 6,
    minHeight: 100,
    alignSelf: 'stretch',
    marginHorizontal: 40,
  },
})