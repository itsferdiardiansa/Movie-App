<template>
  <button :class="cls" :disabled="disabled || isLoading" @click="handleClick">
    <div :class="`${prefixClass}-btn--wrapper`">
      <template v-if="hasSlot || label.length">
        <div :class="[`${prefixClass}-btn--label`]" v-if="!isLoading">
          <slot>
            {{ label }}
          </slot>
        </div>

        <div :class="`${prefixClass}-btn--spinner`" v-else>
          <Spinner :width="20" :height="20" />
        </div>
      </template>
    </div>
  </button>
</template>
<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { prefixClass } from '@/constants'
import { defaultProps } from './props'
import type { ButtonTypes } from './props'

import { Spinner } from '@/components/loader/spinner'

const props = withDefaults(defineProps<ButtonTypes>(), defaultProps)
const emit = defineEmits<{
  (e: 'click', event: Event): void
}>()
const slots = useSlots()

const getVariantCls = (prefixbtnCls: string) => {
  const { inverse, variant } = props
  let btnCls = `${prefixbtnCls}--${variant}`

  if (inverse) btnCls += '-inverse'

  return btnCls
}

const cls = computed(() => {
  const { size, disabled, shape, block } = props
  const btnCls = prefixClass.concat('-btn')
  let cls = [btnCls, shape]

  cls.push(getVariantCls(btnCls))

  if (size) cls.push(btnCls.concat(`--${size}`))

  return [
    cls.join(' '),
    {
      disabled: disabled,
      block: block,
    },
  ]
})

const handleClick = (e: Event) => {
  const { disabled } = props

  if (disabled) return

  emit('click', e)
}

const hasSlot = computed(() => !!slots.default)
</script>
<style lang="scss">
@import './variant.scss';
@import './size.scss';

.#{$prefixClass}-btn {
  @apply h-9 focus:outline-none px-3 transition duration-300 relative;
  @apply hover:bg-gray-300 text-gray-800 overflow-hidden whitespace-nowrap;

  @include variant;

  @include size;

  &.block {
    @apply w-full;
  }

  // Shapes -> rounded, pill, sqaure
  &.square {
    @apply rounded-none;
  }

  &.rounded {
    @apply rounded-md;
  }

  &.pill {
    @apply rounded-full;
  }

  &.disabled {
    @apply disabled:opacity-70 cursor-not-allowed bg-gray-400;
  }

  // Inner elements
  &--wrapper {
    @apply h-full flex-grow-0 flex flex-wrap items-center justify-center;
  }

  &--label {
    @apply font-bold;
  }

  &--spinner {
    @apply w-full h-full flex items-center justify-center;
  }
}
</style>
