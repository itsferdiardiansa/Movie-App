<template>
  <Table
    :headers="headers"
    :items="movies"
    :isFetching="isLoading"
    :onError="error"
  >
    <template #genres="{ data }">
      <Badge :label="data.genres" />
    </template>

    <template #durations="{ data }">
      <Badge
        variant="primary"
        :label="`${data.duration.hours}hr ${data.duration.minutes}mts`"
      />
    </template>

    <template #views="{ data }">
      <Badge variant="success" :label="convertViews(data.views)" />
    </template>

    <template #actions="{ data }">
      <router-link
        :to="`/admin/update/${data.id}`"
        class="text-blue-500 hover:underline"
      >
        Update
      </router-link>
    </template>
  </Table>
</template>

<script setup lang="ts">
import { Table, Badge } from '@pomy/ui'
import type { MovieItem } from '@/features/movies/store/state'
import { useStore } from 'vuex'
import { computed } from 'vue'

const props = defineProps<{ movies: MovieItem[] }>()

const store = useStore()

const isLoading = computed(() => store.state.admin.loading)
const error = computed(() => store.state.admin.error)

const headers = [
  { accessor: 'title', title: 'Title' },
  { accessor: 'description', title: 'Description' },
  { accessor: 'durations', title: 'Duration' },
  { accessor: 'artists', title: 'Artists' },
  { accessor: 'genres', title: 'Genres' },
  { accessor: 'views', title: 'Views' },
  { accessor: 'watchUrl', title: 'Watch URL' },
  { accessor: 'actions', title: 'Actions' },
]

const convertViews = (number: any) => {
  if (typeof number === 'number') return String(number)

  return String(+number)
}
</script>
