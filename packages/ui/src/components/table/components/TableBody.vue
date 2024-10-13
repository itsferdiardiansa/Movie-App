<template>
  <tbody :class="`${prefixClass}-table--body`">
    <template v-if="data.isFetching">
      <TableSkeleton :col="totalColumn" :row="data.rowLoader" />
    </template>

    <TableContent :data="props.data">
      <template #content="props">
        <td
          :class="[
            `${prefixClass}-table--body-col`,
            textColAlign(props.headers.align),
          ]"
        >
          <slot name="content" :data="props">
            <div v-html="props.item[props.headers.accessor]"></div>
          </slot>
        </td>
      </template>
    </TableContent>
  </tbody>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import TableContent from './TableContent.vue'
import TableSkeleton from './TableSkeleton.vue'
import type { Shareable } from '../props'
import { prefixClass } from '@/constants'

type Data = {
  headers: unknown[]
  rowNumber: number
}

const props = withDefaults(
  defineProps<{
    data: Shareable
  }>(),
  {}
)
const textColAlign = align => (align ? `text-${align}` : '')

const totalColumn = computed(() => {
  const { headers, rowNumber } = props.data as unknown as Data

  return headers.length + (rowNumber ? 1 : 0)
})
</script>
