import { View, Image, StyleSheet } from "react-native";
import pfp from '../assets/img/None.png'

export default function Avatar({source, size=150}) {

    return(
        <View style={[styles.container, {width:size, height: size, borderRadius:size/2}]}>
            <Image 
            source={source}
            style={styles.image}
            />
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        borderStyle: 'solid',
        borderColor: '#09A1FF',
        borderWidth: 1,
        overflow: 'hidden'
    },
    image: {
        width:'100%',
        height: '100%',
        resizeMode: 'cover'
    },
})