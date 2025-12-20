import {Client, Account, Avatars, Databases} from 'react-native-appwrite'

export const client = new Client()
    .setProject("692dc60d0012f1a0b84b")
    .setEndpoint("https://sgp.cloud.appwrite.io/v1")
    .setPlatform('dev.nene.altread')

export const account = new Account(client)
export const avatars = new Avatars(client)
export const databases = new Databases(client)