<template>
  <thead :class="`${prefixClass}-table--head`">
    <tr>
      <th width="4%">
        <span>#</span>
      </th>

      <template v-for="(item, key) in headers" :key="key">
        <th
          v-text="item.title"
          :colspan="item.colSpan"
          :class="[item.customClass]"
          :width="item.width"
          :align="item.align"
        ></th>
      </template>
    </tr>
  </thead>
</template>
<script setup lang="ts">
import type { TableHeader } from '../props'
import { prefixClass } from '@/constants'

const props = withDefaults(defineProps<{ headers: TableHeader[] }>(), {})
</script>
