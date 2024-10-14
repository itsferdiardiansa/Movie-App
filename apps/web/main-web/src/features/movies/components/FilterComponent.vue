<template>
  <div class="flex items-center space-x-4 z-50">
    <Input v-model="q" type="text" placeholder="Search movies" />

    <div class="w-32">
      <Select
        v-model="keyname"
        placeholder="Select category"
        :items="genreOptions"
      />
    </div>

    <Button @click="handleSubmit" :disabled="isLoading" label="Submit">
      Search
    </Button>

    <div class="flex flex-col">
      <p class="text-sm text-gray-500 ml-4">* The search is case-sensitive</p>
      <p class="text-sm text-gray-500 ml-4">
        * Unfortunately, Firebase doesn't support for pagination. This might
        cause incosistency result data
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { Input, Select, Button } from '@pomy/ui'

const q = ref('')
const keyname = ref('title')
const props = defineProps<{ collectionName: string }>()
const genreOptions = reactive([
  { value: 'title', label: 'Title' },
  { value: 'description', label: 'Description' },
  { value: 'genres', label: 'Genres' },
  { value: 'artist', label: 'Artist' },
])

const store = useStore()
const router = useRouter()
const route = useRoute()
const isLoading = computed(() => store.state.movies.loading)

const handleSubmit = () => {
  router.push({
    name: route.name,
    query: { q: q.value, keyname: keyname.value },
  })
}

watch(
  () => route.query,
  newQuery => {
    const qFromUrl = (newQuery.q as string) || ''
    const keynameFromUrl = (newQuery.keyname as string) || 'title'

    q.value = qFromUrl
    keyname.value = keynameFromUrl

    store.dispatch('fetchFilteredMovies', {
      q: q.value,
      keyname: keyname.value,
      collectionName: props.collectionName,
    })
  },
  { immediate: true }
)
</script>
