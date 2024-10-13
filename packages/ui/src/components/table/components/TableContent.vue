<template>
  <template v-if="data.onError && !data.isFetching">
    <tr :ref="countDataRows">
      <td :class="`${prefixClass}-table--body-col`" :colspan="totalColumn">
        <component :is="getErrorComponent"></component>
      </td>
    </tr>
  </template>
  <template v-else-if="data.items.length && !data.isFetching">
    <template v-for="(item, key) in data.items" :key="key">
      <tr :class="getRowClass(key)" :ref="countDataRows">
        <td :class="`${prefixClass}-table--body-col`">
          <label v-text="key + 1" v-if="data.rowNumber"></label>
        </td>

        <template v-for="(hItem, hKey) in data.headers" :key="hKey">
          <slot name="content" :headers="hItem" :item="item"></slot>
        </template>
      </tr>
    </template>
  </template>
  <template v-else-if="!data.items.length && !data.isFetching">
    <tr :ref="countDataRows">
      <td :class="`${prefixClass}-table--body-col`" :colspan="totalColumn">
        <component :is="getEmptyCoponent"></component>
      </td>
    </tr>
  </template>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import errorComponentDefault from './TableError.vue'
import emptyComponentDefault from './TableEmpty.vue'
import type { Shareable } from '../props'
import { prefixClass } from '@/constants'

const props = withDefaults(
  defineProps<{
    data: Shareable
  }>(),
  {}
)
const dataRows = ref([])

const totalColumn = computed(() => {
  const { headers, rowNumber } = props.data

  return headers.length + (rowNumber ? 1 : 0)
})

const getRowClass = (id: number) => [`${prefixClass}-table--body-row`]

const countDataRows = el => {
  dataRows.value.push(el)
}

const getErrorComponent = computed(() => {
  return errorComponentDefault
})

const getEmptyCoponent = computed(() => {
  return emptyComponentDefault
})
</script>
