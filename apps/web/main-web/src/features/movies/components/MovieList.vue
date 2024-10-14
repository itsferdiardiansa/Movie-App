<template>
  <div class="flex flex-wrap gap-6 justify-start max-md:flex-col">
    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script setup lang="ts">
import type { MovieItem } from '@/features/movies/store/state'
import MovieCard from '@/components/movie-card'

const props = defineProps<{ movies: MovieItem[] }>()
</script>
