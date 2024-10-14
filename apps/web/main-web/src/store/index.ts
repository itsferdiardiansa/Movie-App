import { createStore } from 'vuex'

import { moviesModule } from '@/features/movies/store'
import type { MoviesState } from '@/features/movies/store/state'

import { movieModule } from '@/features/movie-detail/store'
import type { MovieState } from '@/features/movie-detail/store/state'

import { adminModule } from '@/features/admin/store'
import type { AdminState } from '@/features/admin/store/state'

export interface RootState {
  movies: MoviesState
  movie: MovieState
  admin: AdminState
}

export const store = createStore<RootState>({
  modules: {
    movies: moviesModule,
    movie: movieModule,
    admin: adminModule,
  },
})
