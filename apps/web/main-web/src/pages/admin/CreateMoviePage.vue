<template>
  <div class="create-movie-page p-8">
    <MovieForm @submit="submitForm" />
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import MovieForm from '@/features/admin/components/MovieForm.vue'
import type { MovieItem } from '@/features/movies/store/state'

const store = useStore()
const router = useRouter()

const submitForm = (movieData: MovieItem) => {
  store.dispatch('admin/createMovie', movieData).then(() => {
    router.push('/admin')
  })
}
</script>
