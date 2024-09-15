import {initializeApp} from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_FB_API_KEY,
    authDomain: process.env.EXPO_PUBLIC_FB_AUTH_DOMAIN,
    projectId: process.env.EXPO_PUBLIC_FB_PROJECT_ID,
    storageBucket: process.env.EXPO_PUBLIC_FB_STORAGE_BACKET,
    messagingSenderId: process.env.EXPO_PUBLIC_FB_MESSAGINEG_SENDER_ID,
    appId: process.env.EXPO_PUBLIC_FB_APP_ID
}
const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})

const db = getFirestore(app)

export {app, auth, db}


EXPO_PUBLIC_FB_API_KEY=AIzaSyAFuTSkX-j7LodkTQxhYrAwCGN3p0RBgq4
EXPO_PUBLIC_FB_AUTH_DOMAIN=memoapp-bbc53.firebaseapp.com
EXPO_PUBLIC_FB_PROJECT_ID=memoapp-bbc53
EXPO_PUBLIC_FB_STORAGE_BACKET=memoapp-bbc53.appspot.com
EXPO_PUBLIC_FB_MESSAGINEG_SENDER_ID=149231094267
EXPO_PUBLIC_FB_APP_ID=1:149231094267:web:b2bdc23039c970657e635e
