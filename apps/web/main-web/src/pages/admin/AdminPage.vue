<template>
  <div class="admin-page p-8">
    <div class="flex justify-between items-center mb-4">
      <FilterComponent @filterChanged="handleFilterChange" />

      <Button
        label="Create Movie"
        class="bg-green-500 text-white"
        @click="goToCreateMovie"
      />
    </div>

    <MovieListTable :movies="filteredMovies" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import FilterComponent from '@/features/admin/components/FilterComponent.vue'
import MovieListTable from '@/features/admin/components/MovieListTable.vue'
import { Button } from '@pomy/ui'
import type { MovieItem } from '@/features/movies/store/state'

const store = useStore()
const router = useRouter()

const selectedFilter = ref('mostViewedMovie')

const movies = computed(() => store.state.admin.movies)

const filteredMovies = computed(() => {
  if (selectedFilter.value === 'mostViewedMovie') {
    return [...movies.value].sort((a, b) => b.views - a.views)
  } else if (selectedFilter.value === 'mostViewedGenre') {
    return movies.value.filter(
      (movie: MovieItem) => movie.genres === 'Most Popular Genre'
    )
  }
  return movies.value
})

const handleFilterChange = (filterValue: string) => {
  selectedFilter.value = filterValue

  if (filterValue === 'mostViewedMovie') {
    store.dispatch('admin/fetchMoviesByMostViewed')
  }
}

onMounted(() => {
  store.dispatch('admin/fetchMoviesByMostViewed')
})

const goToCreateMovie = () => {
  router.push('/admin/create')
}
</script>
