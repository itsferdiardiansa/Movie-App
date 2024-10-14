<template>
  <div
    v-if="isLoading"
    class="loading flex justify-center items-center h-screen text-xl font-bold"
  >
    Loading...
  </div>
  <div v-else-if="error" class="error text-center text-red-500">
    {{ error }}
  </div>
  <div v-else-if="movie" class="py-8 min-h-screen text-gray-700">
    <VideoPlayer :watchUrl="movie.watchUrl" />

    <MovieDetails
      :title="movie.title"
      :description="movie.description"
      :views="movie.views"
      :genres="movie.genres"
      :artist="movie.artist"
      :likes="movie.likes || 0"
      :dislikes="movie.dislikes || 0"
      @like="likeMovie"
      @dislike="dislikeMovie"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

import VideoPlayer from './VideoPlayer.vue'
import MovieDetails from './MovieDetails.vue'

const store = useStore()
const route = useRoute()
const movieId = route.params.movieId as string

const isLoading = computed(() => store.state.movies.isLoading)
const movie = computed(() => store.getters['getMovieById'](movieId))
const error = computed(() => store.state.movies.error)

onMounted(() => {
  store.dispatch('fetchMovieByIdAndIncrementViews', movieId)
})

const likeMovie = () => {
  store.dispatch('likeMovie', movieId)
}

const dislikeMovie = () => {
  store.dispatch('dislikeMovie', movieId)
}
</script>
