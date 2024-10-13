<template>
  <template v-for="i in row" :key="i">
    <tr>
      <template v-for="j in col" :key="j">
        <td class="p-2 text-center">
          <SkeletonRect width="85%" height="12px" />
        </td>
      </template>
    </tr>
  </template>
</template>
<script setup lang="ts">
import { SkeletonRect } from '@/components/loader/skeleton'
const props = withDefaults(
  defineProps<{
    col: number
    row: number
  }>(),
  {}
)
</script>
