import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  increment,
} from 'firebase/firestore'
import { firebaseApp } from '@/libs/firebase'
import type { MovieItem } from '@/features/movies/store/state'

const db = getFirestore(firebaseApp)

export const fetchMovieById = async (movieId: string): Promise<MovieItem> => {
  const docRef = doc(db, 'movies', movieId)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as MovieItem
  } else {
    throw new Error('Movie not found')
  }
}

export const incrementMovieViews = async (movieId: string): Promise<void> => {
  const movieDocRef = doc(db, 'movies', movieId)

  const movieDoc = await getDoc(movieDocRef)

  if (movieDoc.exists()) {
    const currentViews = movieDoc.data().views || 0

    const updatedViews = currentViews + 1

    await updateDoc(movieDocRef, {
      views: updatedViews,
    })

    console.log(`Views updated to ${updatedViews}`)
  } else {
    throw new Error('Movie not found')
  }
}
