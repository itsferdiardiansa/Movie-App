<template>
  <div class="update-movie-page p-8">
    <MovieForm :initialMovie="(movie as MovieItem)" @submit="submitForm" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import MovieForm from '@/features/admin/components/MovieForm.vue'
import type { MovieItem } from '@/features/movies/store/state'

const store = useStore()
const router = useRouter()
const route = useRoute()
const movieId = route.params.movieId

const movie = computed(() => store.getters['admin/selectedMovie'])

onMounted(() => {
  store.dispatch('admin/fetchMovieById', movieId)
})

const submitForm = (updatedMovieData: MovieItem) => {
  store.dispatch('admin/updateMovie', updatedMovieData).then(() => {
    router.push('/admin')
  })
}
</script>
