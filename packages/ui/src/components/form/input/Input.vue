<template>
  <div
    :class="[
      `${prefixClass}-control--input`,
      { 'has-icon': icon.length, 'has-error': onError },
    ]"
  >
    <template v-if="icon.length">
      <span class="icon">
        <FontAwesomeIcon
          :icon="icon"
          :class="`${prefixClass}-form-control--icon`"
        />
      </span>
    </template>

    <input
      ref="inputRef"
      :class="`${prefixClass}-input`"
      :type="<string>type"
      :placeholder="placeholder"
      :value="modelValue"
      :autofocus="<boolean>autofocus"
      v-bind="$attrs"
      @keyup="handleChange"
      @input="
        $emit('update:modelValue', (<HTMLInputElement>$event.target).value)
      "
    />

    <template v-if="onError && errorMessage">
      <span class="text-red-400 text-sm italic">{{ errorMessage }}</span>
    </template>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { FontAwesomeIcon } from '@/components/font-awesome'

import { prefixClass } from '@/constants'
import debounce from '@/utils/debounce'
import defaultProps from './props'
import type { InputTypes } from './props'

const inputRef = ref()
const emit = defineEmits(['update:modelValue'])
const props = withDefaults(defineProps<InputTypes>(), defaultProps)

const handleChange = debounce((e: Event) => {
  const { onChange } = props

  onChange((<HTMLInputElement>e.target).value, e)
}, 100)

const setAutofocus = debounce(() => {
  const { autofocus } = props

  if (autofocus == 'true') inputRef.value.focus()
}, 10)

onMounted(() => {
  setAutofocus()
})
</script>
<style lang="scss">
.#{$prefixClass}-control--input {
  @apply relative;

  &.has-error {
    input {
      @apply border-red-400;
    }
  }

  &.has-icon {
    input {
      @apply pl-10;
    }
  }

  input {
    @apply w-full border rounded py-1 px-4 focus:outline-none;

    &[type='file'] {
      @apply w-auto inline border-0 focus:outline-none px-0;
    }

    &[type='checkbox'] {
      @apply w-auto inline mr-2;
    }
  }

  .icon {
    @apply absolute top-2.5 my-auto pl-4;

    svg {
      @apply h-4 text-gray-400 fill-current;
    }
  }
}
</style>
