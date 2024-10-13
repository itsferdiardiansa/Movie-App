<template>
  <div :class="getCls">
    <template v-for="(item, key) in items" :key="key">
      <label :class="`${prefixClass}-ck--item`">
        <input
          type="checkbox"
          v-model="checkboxState"
          :value="getValue(item, key)"
          @change="handleChange"
        />

        <span :class="`${prefixClass}-ck--label`" v-if="item.label">{{
          item.label
        }}</span>
      </label>
    </template>
  </div>
</template>
<script setup lang="ts">
import { computed, unref } from 'vue'
import { prefixClass } from '@/constants'
import defaultProps from './props'
import type { CheckboxTypes } from './props'

const props = withDefaults(defineProps<CheckboxTypes>(), defaultProps)
const emits = defineEmits(['update:modelValue'])

const checkboxState = computed(() => {
  let modelValue = [].concat(props.modelValue)

  return modelValue
})

const getCls = computed(() => {
  const { variant, type } = props
  let customCls = [`${prefixClass}-control--checkbox`]

  if (type === 'button') {
    customCls.push('ck-button')
    customCls.push(`ck-${variant}`)
  }

  return customCls
})

const getValue = (item, key) => {
  const { keyname } = props

  return keyname === undefined ? key : item[keyname]
}

const handleChange = event => {
  const { checked, value } = event.target
  const itemIndex = unref(checkboxState).findIndex(item => item == value)
  let val = [].concat(unref(checkboxState))

  if (checked) val.push(event.target.value)
  else val.splice(itemIndex, 1)

  emits('update:modelValue', val)
}
</script>
<style lang="scss" scoped>
$variants: (
  'primary',
  'danger',
  'warning',
  'dark',
  'success',
  'light',
  'orange'
);

.#{$prefixClass}-ck {
  @each $variant in $variants {
    &-#{$variant} {
      .#{$prefixClass}-ck--item {
        input {
          &:checked + span {
            @apply bg-#{$variant} text-gray-100;
          }
        }
      }

      .#{$prefixClass}-ck--label {
        @apply border border-#{$variant} text-#{$variant};
      }
    }
  }

  &-button {
    .#{$prefixClass}-ck--item {
      input {
        @apply appearance-none;
      }
    }

    .#{$prefixClass}-ck--label {
      @apply border rounded-full py-0.5 px-3 m-0;
    }
  }

  &--item {
    @apply inline-flex items-center mr-2 cursor-pointer my-1;
  }

  &--label {
    @apply ml-2;
  }
}
</style>
