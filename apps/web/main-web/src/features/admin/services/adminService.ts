import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  query,
  orderBy,
} from 'firebase/firestore'
import { firebaseApp } from '@/libs/firebase'

import type { MovieItem } from '@/features/movies/store/state'

const db = getFirestore(firebaseApp)

export const fetchMovies = async (): Promise<MovieItem[]> => {
  const movieCollection = collection(db, 'movies')
  const movieSnapshot = await getDocs(movieCollection)
  return movieSnapshot.docs.map(
    doc => ({ id: doc.id, ...doc.data() } as MovieItem)
  )
}

export const fetchMovieById = async (movieId: string): Promise<MovieItem> => {
  const movieDoc = await getDoc(doc(db, 'movies', movieId))
  if (!movieDoc.exists()) {
    throw new Error('Movie not found')
  }
  return { id: movieDoc.id, ...movieDoc.data() } as MovieItem
}

export const fetchMoviesByMostViewed = async (): Promise<MovieItem[]> => {
  try {
    const moviesCollection = collection(db, 'movies')
    const moviesQuery = query(moviesCollection, orderBy('views', 'desc')) // Order by 'views' descending
    const movieSnapshot = await getDocs(moviesQuery)

    const movies: MovieItem[] = movieSnapshot.docs.map(doc => {
      const data = doc.data() as MovieItem
      return {
        ...data,
        id: doc.id,
      }
    })

    return movies
  } catch (error) {
    console.error('Error fetching most viewed movies:', error)
    throw new Error('Failed to fetch most viewed movies')
  }
}

export const createMovie = async (movieData: MovieItem): Promise<void> => {
  await addDoc(collection(db, 'movies'), { ...movieData, views: 0 })
}

export const updateMovie = async (movieData: MovieItem): Promise<void> => {
  const movieDoc = doc(db, 'movies', movieData.id)
  await updateDoc(movieDoc, movieData as any)
}
