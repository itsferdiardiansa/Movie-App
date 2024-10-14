export interface MovieItem {
  id: string
  movies: Array<object>
  artist: string
  description: string
  duration: {
    hours: string
    minutes: string
  }
  genres: string
  title: string
  watchUrl: string
  views: number
}

export interface MoviesState {
  movies: MovieItem[]
  loading: boolean
  lastVisibleDoc: any
  hasMoreMovies: boolean
  error: string | null
}

export const state: MoviesState = {
  movies: [],
  loading: false,
  lastVisibleDoc: null,
  hasMoreMovies: true,
  error: null,
}
