import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  startAfter,
  limit,
  where,
} from 'firebase/firestore'
import { firebaseApp } from '@/libs/firebase'
import type { MovieItem } from '../store/state'

export type FilterParams = {
  keyname?: string
  q?: string
}

export type PaginateParams = {
  collectionName: string
  orderByField: string
  pageSize: number
  lastDoc?: any
  filters?: FilterParams
}

export interface PaginateResponse {
  movies: MovieItem[]
  lastVisible: any
}

const db = getFirestore(firebaseApp)
const orderByField = 'title'

export const paginateFirestore = async ({
  collectionName,
  orderByField,
  pageSize,
  lastDoc = null,
  filters = {},
}: PaginateParams): Promise<PaginateResponse> => {
  const moviesCollection = collection(db, collectionName)
  let movieQuery

  if (!lastDoc) {
    movieQuery = query(moviesCollection, orderBy(orderByField), limit(pageSize))
    console.log('Fetching first page')
  } else {
    movieQuery = query(
      moviesCollection,
      orderBy(orderByField),
      startAfter(lastDoc),
      limit(pageSize)
    )
    console.log('Fetching next page starting after:', lastDoc)
  }

  if (filters.keyname && filters.q) {
    const qFormatted = filters.q.trim()
    movieQuery = query(movieQuery, where(filters.keyname, '==', qFormatted))
  }

  const movieSnapshot = await getDocs(movieQuery)
  const lastVisible = movieSnapshot.docs[movieSnapshot.docs.length - 1]

  console.log('Fetching next page starting after:', lastDoc)

  const movies = movieSnapshot.docs.map(doc => {
    const data = doc.data()
    const movie: MovieItem = {
      id: doc.id,
      movies: data.movies ?? [],
      artist: data.artist ?? '',
      description: data.description ?? '',
      duration: {
        hours: data.duration?.hours ?? '0',
        minutes: data.duration?.minutes ?? '0',
      },
      genres: data.genres ?? '',
      title: data.title ?? '',
      views: data.views ?? '0',
      watchUrl: data.watchUrl ?? '',
    }

    return movie
  })

  return { movies, lastVisible }
}

export const fetchMoviesFromFirebase = async (
  collectionName: string,
  pageSize: number,
  lastDoc: any = null
): Promise<PaginateResponse> => {
  return paginateFirestore({ collectionName, orderByField, pageSize, lastDoc })
}

export const fetchFilteredMoviesFromFirebase = async (
  collectionName: string,
  q: string,
  keyname: string,
  pageSize: number,
  lastDoc: any = null
): Promise<{ movies: MovieItem[]; lastVisible: any }> => {
  const filters = { q, keyname }
  return paginateFirestore({
    collectionName,
    orderByField,
    pageSize,
    lastDoc,
    filters,
  })
}
