<template>
  <div class="flex justify-between items-center space-x-4">
    <Button @click="handlePreviousPage" :disabled="!hasPreviousPage">
      Previous
    </Button>

    <Button
      @click="handleNextPage"
      :disabled="!store.state.movies.hasMoreMovies"
    >
      Next
    </Button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import { Button } from '@pomy/ui'

const store = useStore()
const props = defineProps<{ collectionName: string; pageSize: number }>()

const currentPage = ref(1)
const isNextPageAvailable = ref(true)

const handleNextPage = async () => {
  store.commit('resetMovies')

  const hasMoreMovies = await store.dispatch('fetchMovies', {
    collectionName: props.collectionName,
    pageSize: props.pageSize,
    lastDoc: store.state.movies.lastVisibleDoc,
  })

  if (!hasMoreMovies) {
    isNextPageAvailable.value = false
  }

  currentPage.value += 1
}

const handlePreviousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1
    store.dispatch('resetMovies')
    store.dispatch('fetchMovies', {
      collectionName: props.collectionName,
      pageSize: props.pageSize,
      lastDoc: null,
    })
  }
}

const hasPreviousPage = computed(() => currentPage.value > 1)
</script>
