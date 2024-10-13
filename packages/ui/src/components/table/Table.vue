<template>
  <table :class="`${prefixClass}-table`">
    <TableHead :headers="$props.headers" />

    <TableBody :data="shareableData">
      <template #content="{ data: { item, headers } }">
        <slot :data="item" :name="headers.accessor" />
      </template>
    </TableBody>
  </table>

  <template v-if="showPagination">
    <Pagination v-bind="{ ...pagination }" @changePage="onPageChange" />
  </template>
</template>
<script setup lang="ts">
import { computed, unref } from 'vue'
import TableHead from './components/TableHead.vue'
import TableBody from './components/TableBody.vue'
import { Pagination } from '@/components/pagination'
import type { TableTypes } from './props'
import defaultProps from './props'
import { prefixClass } from '@/constants'

const emits = defineEmits([
  'onSearch',
  'onSelectedRow',
  'onFailedFetchHandler',
  'onPageChange',
  'onSearchCallback',
])
const props = withDefaults(defineProps<TableTypes>(), defaultProps)
const getProps = computed(() => ({ ...props }))

const showPagination = computed(() => {
  const { withPagination, isFetching, items, onError } = unref(getProps)

  return Boolean(!isFetching && items.length && withPagination && !onError)
})

const shareableData = computed(() => {
  return props
})
</script>
<style lang="scss" src="./styles.scss"></style>
