import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAhVimxpk-lyG2lIgLlN-iUBZijkMhFegs',
  authDomain: 'movie-fest.firebaseapp.com',
  projectId: 'movie-fest',
  storageBucket: 'movie-fest.appspot.com',
  messagingSenderId: '331277336621',
  appId: '1:331277336621:web:3605d8b7722eaf3f75b8a4',
  measurementId: 'G-3BNJWL2YZW',
}

export const firebaseApp = initializeApp(firebaseConfig)
export const db = getFirestore(firebaseApp)
