<template>
  <section
    class="flex flex-col min-h-screen w-full px-16 mt-1 h-full max-md:px-5 max-md:max-w-full overflow-auto"
  >
    <h2 class="self-start text-3xl font-medium text-black">{{ title }}</h2>

    <div class="my-6">
      <FilterComponent :collectionName="collectionName" />
    </div>

    <div v-if="isLoading" class="flex justify-center items-center h-20">
      <div
        class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"
      ></div>
      <p class="ml-4 text-blue-500">Loading...</p>
    </div>

    <div v-if="errorMessage" class="text-center text-red-500 py-4">
      <p>{{ errorMessage }}</p>
    </div>

    <template v-if="!isLoading && !errorMessage">
      <div class="w-full">
        <template v-if="movies.length">
          <MovieList :movies="movies" />
        </template>
        <template v-else>
          <div class="text-center py-4">
            <p>Movie(s) not found</p>
          </div>
        </template>
      </div>

      <div class="my-6">
        <Pagination :collectionName="collectionName" :pageSize="pageSize" />
      </div>
    </template>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import type { MovieItem } from '@/features/movies/store/state'
import Pagination from './Pagination.vue'
import FilterComponent from './FilterComponent.vue'
import MovieList from './MovieList.vue'

interface Props {
  title: string
  collectionName: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Movie List',
  collectionName: 'platform',
})

const store = useStore()
const pageSize = ref(5)

const movies = computed<MovieItem[]>(() => store.getters['movies'])
const isLoading = computed(() => store.state.movies.loading)
const errorMessage = computed(() => store.state.movies.error)
</script>
