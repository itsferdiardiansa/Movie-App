<template>
  <div class="watch-container">
    <MovieDetailContainer :movieId="movieId" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import MovieDetailContainer from '@/features/movie-detail'

const props = defineProps<{ movieId: string }>()
</script>

<style scoped>
.watch-container {
  padding: 20px;
}
</style>
