<template>
  <div
    ref="dropdownEl"
    v-bind="$attrs"
    :class="`${prefixClass}-control--input`"
    @keydown.prevent="() => onKeyInteraction"
  >
    <div :class="getSelectClass">
      <div
        @click="toggleDropdown"
        @blur="toggleDropdown"
        :class="`${prefixClass}-select--button`"
        tabindex="0"
      >
        <span class="button-label">
          {{ getSelectedLabel }}
        </span>
        <span class="button-icon">
          <FontAwesomeIcon :icon="iconSuffix" class="h-4" />
        </span>
      </div>

      <transition name="slide-top" appear>
        <div :class="`${prefixClass}-select--dropdown`" v-show="isCollapsed">
          <ul class="dropdown-list">
            <template v-for="(item, key) in items" :key="key">
              <li
                class="dropdown-item"
                v-text="getLabel(item, key)"
                @mouseenter="onMouseInteraction($event, key)"
                @mouseleave="onMouseInteraction($event, key)"
                @click="selectItem(item)"
              ></li>
            </template>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref, unref, watch } from 'vue'
import { FontAwesomeIcon } from '@/components/font-awesome'
import { prefixClass } from '@/constants'
import defaultProps from './props'
import type { SelectTypes } from './props'

const emit = defineEmits(['change', 'update:modelValue'])
const props = withDefaults(defineProps<SelectTypes>(), defaultProps)
const dropdownEl = ref()
const { items } = props
const isCollapsed = ref(false)
const itemIndex = ref(-1)
const selectedValue = ref()

const toggleDropdown = e => {
  const { keyname, disabled } = props

  if (disabled) return false

  if (isCollapsed.value) return false

  isCollapsed.value = !isCollapsed.value
  itemIndex.value = -1
}

const iconSuffix = computed(() => {
  return ['fa', 'chevron-circle-up']
})

const getLabel = (item, key) => {
  const { keyname, labelKeyname } = props

  return item[labelKeyname] || item
}

const getSelectClass = computed(() => {
  const { disabled } = props

  return [
    `${prefixClass}-select`,
    {
      [`${prefixClass}-select--collapsed`]: unref(isCollapsed),
      [`${prefixClass}-select--disabled`]: unref(disabled),
    },
  ]
})

const selectedItem = computed(() => {
  const { items, modelValue, keyname, placeholder, labelKeyname } = props

  isCollapsed.value = false

  const findLabel = unref(items).find((item, key) => {
    const value = keyname !== undefined ? item[keyname] : item

    return value == selectedValue.value
  })

  return keyname === undefined
    ? findLabel
    : findLabel === undefined
    ? placeholder
    : findLabel[labelKeyname]
})

const getSelectedLabel = computed(() => {
  const { placeholder, modelValue } = props

  return unref(selectedItem) !== undefined ? unref(selectedItem) : placeholder
})

const selectItem = item => {
  const { keyname, disabled } = props

  if (disabled) return false

  if (typeof item === 'object' && keyname === undefined) {
    console.warn('Please set keyname as prop => :keyname="value"')
    return
  }

  const value = keyname !== undefined ? item[keyname] : item

  selectedValue.value = value
  isCollapsed.value = false

  emit('update:modelValue', value)
  emit('change', value)
}

const resetSelectedClass = () => {
  const el = unref(dropdownEl)
  const listItems = el.getElementsByClassName('dropdown-item')

  for (let item of listItems) {
    item.classList.remove('dropdown-item--selected')
  }
}

const onKeyInteraction = (e, item) => {
  const { items } = props
  const { keyCode } = e
  const el = unref(dropdownEl)
  const listItems = el.getElementsByClassName('dropdown-item')

  if (keyCode === 13) {
    selectItem(unref(items)[itemIndex.value])
  }

  if (keyCode === 27) isCollapsed.value = false

  if ([38, 40].includes(keyCode)) {
    if (isCollapsed.value)
      if (keyCode === 38)
        itemIndex.value <= 0
          ? (itemIndex.value = listItems.length - 1)
          : itemIndex.value--
      else
        itemIndex.value >= listItems.length - 1
          ? (itemIndex.value = 0)
          : itemIndex.value++

    resetSelectedClass()

    listItems[itemIndex.value]?.classList.add('dropdown-item--selected')
  }

  if (!isCollapsed.value && keyCode === 40) isCollapsed.value = true
}

const onMouseInteraction = (e, key) => {
  const {
    type,
    target: { _, classList },
  } = e
  const action = type === 'mouseenter' ? 'add' : 'remove'

  resetSelectedClass()

  if (classList.contains('dropdown-item')) {
    classList[action]('dropdown-item--selected')

    if (type === 'mouseenter') itemIndex.value = key
    else itemIndex.value = -1
  }
}

watch(
  () => props.modelValue,
  val => {
    selectedValue.value = val
  }
)

onMounted(() => {
  const { modelValue } = props

  selectedValue.value = modelValue
})
</script>
<style lang="scss" scoped>
.#{$prefixClass}-select {
  @apply mt-1 relative;

  &--disabled {
    .#{$prefixClass}-select--button {
      @apply bg-gray-200 cursor-not-allowed pointer-events-none;
    }
  }

  &--button {
    @apply relative w-full bg-white border border-gray-300 rounded-md;
    @apply cursor-pointer shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-primary-light focus:border-primary-light sm:text-sm;

    .button-label {
      @apply flex items-center;
    }

    .button-icon {
      @apply ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none;

      svg {
        @apply inline-block transition-transform;
      }
    }
  }

  &--dropdown {
    @apply absolute mt-1 w-full rounded-md bg-white shadow-lg z-50;

    .dropdown-list {
      @apply max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-x-auto overflow-y-scroll focus:outline-none sm:text-sm;
      max-height: 200px;

      .dropdown-item {
        @apply cursor-pointer text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9;

        &--selected {
          @apply bg-primary-light text-gray-800;
        }
      }
    }
  }

  &--collapsed {
    .button-icon {
      svg {
        @apply -rotate-180 transform;
      }
    }
  }
}
</style>
