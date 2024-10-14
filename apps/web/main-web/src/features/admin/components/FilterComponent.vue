<template>
  <div class="filter-section flex space-x-4">
    <Select
      v-model="selectedFilter"
      :items="filterOptions"
      placeholder="Filter by"
      @change="onFilterChange"
      class="w-56"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Select } from '@pomy/ui'

const filterOptions = [{ label: 'Most Viewed Movie', value: 'mostViewedMovie' }]

const selectedFilter = ref('mostViewedMovie')

// Emit filter change event
const emit = defineEmits(['filterChanged'])
const onFilterChange = () => {
  emit('filterChanged', selectedFilter.value)
}
</script>
