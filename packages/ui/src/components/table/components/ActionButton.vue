<template>
  <div :class="`${prefixClass}-tb--action`">
    <div class="wrapper">
      <template v-for="(item, key) in data" :key="key">
        <div class="btn" @click="$event => item.onClickFn($event, dataBind)">
          <font-awesome-icon class="w-4" :icon="item.icon" />
          <span v-text="item.text"></span>
        </div>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { unref } from 'vue'
import { prefixClass } from '@/constants'

type ItemType = {
  onClickFn: Function
  icon: unknown
  text: string
}

const props = withDefaults(
  defineProps<{
    data: ItemType[]
    item: unknown[] | string | number | object | boolean
  }>(),
  {
    data: () => [],
    items: false,
  }
)

const dataBind = unref(props.item)
</script>
<style lang="scss" scoped>
.#{$prefixClass}-tb--action {
  @apply flex justify-center;

  .wrapper {
    @apply mr-2 grid grid-flow-col gap-2;

    .btn {
      @apply flex items-center hover:text-orange cursor-pointer mr-2;

      &:last-child {
        @apply mr-0;
      }

      span {
        @apply ml-2 font-medium;
      }
    }
  }
}
</style>
