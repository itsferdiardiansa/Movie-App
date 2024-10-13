<template>
  <template v-for="item in items" :key="item._id">
    <transition :name="item.animation" appear>
      <div :class="customClass(item.variant)" v-if="item.isShow">
        <div :class="`${prefixClass}-notification--icon`" v-if="item.withIcon">
          <font-awesome-icon :icon="['fa', getIconVariant(item.variant)]" />
        </div>

        <div :class="`${prefixClass}-notification--wrapper`">
          <div
            :class="`${prefixClass}-notification--close`"
            @click="closeAlert(item._id)"
            v-if="item.closeable"
          >
            <font-awesome-icon :icon="['fa', 'times']" />
          </div>

          <div :class="`${prefixClass}-notification--title`" v-if="item.title">
            <label v-html="item.title"></label>
          </div>

          <div :class="`${prefixClass}-notification--content`">
            <component :is="getContent(item.content)" />
          </div>
        </div>
      </div>
    </transition>
  </template>
</template>

<script setup lang="ts">
import { computed, createVNode, inject, reactive } from 'vue'
import { Emitter as EmitterType } from 'mitt'

interface NotificationContext {
  emitter: EmitterType<{ 'show-notification': any }>
}

interface NotificationItem {
  _id: number
  isShow: boolean
  title: string | null
  content: string | object | null
  variant: string
  duration: number
  closeable: boolean
  animation: string
  withIcon: boolean
  onClose: () => void
}

interface DefaultOptions {
  title: string | null
  content: string | object | null
  variant: string
  duration: number
  closeable: boolean
  animation: string
  withIcon: boolean
  onClose: () => void
}

// Set the prefix class
const prefixClass = 'tx'

// Inject the notificationContext and type it properly
const notificationContext = inject<NotificationContext>('notificationContext')

if (notificationContext) {
  notificationContext.emitter.on('show-notification', (params = {}) => {
    const key = Date.now()
    const duration =
      (params as NotificationItem)?.duration || defaultOptions.duration

    const { _id, isShow, ...restParams } = params as NotificationItem

    if (!restParams.closeable) setAlertDuration(key, duration)

    items.push({
      _id: key,
      isShow: true,
      ...defaultOptions,
      ...restParams,
    })
  })
}

const items = reactive<NotificationItem[]>([])
const timeout: Record<number, ReturnType<typeof setTimeout>> = {}

const defaultOptions: DefaultOptions = {
  title: null,
  content: null,
  variant: 'light',
  duration: 3000,
  closeable: false,
  animation: 'slide-top',
  withIcon: true,
  onClose: () => {},
}

const findItemIndex = (key: number) => items.findIndex(item => item._id === key)

const getVariantClass = (prefixClass: string, variant: string) => {
  return `${prefixClass}--${variant}`
}

const getIconVariant = (variant: string) => {
  const icons: Record<string, string> = {
    success: 'check-circle',
    warning: 'exclamation-triangle',
    danger: 'exclamation-circle',
    dark: 'question-circle',
    light: 'exclamation-circle',
    primary: 'bullhorn',
  }

  return icons[variant]
}

const customClass = (variant: string) => {
  const alertClass = `${prefixClass}-notification`
  return [`${alertClass} ${getVariantClass(alertClass, variant)}`].join(' ')
}

// const hasSlot = computed(() => false)

const removeItem = (key: number) => {
  const index = findItemIndex(key)
  if (index !== -1) {
    items[index].onClose()
    clearTimeout(timeout[key])
    delete timeout[key]
    setTimeout(() => items.splice(index, 1), 100)
  }
}

const setAlertDuration = (key: number, duration: number) => {
  timeout[key] = setTimeout(() => {
    closeAlert(key)
  }, duration)
}

const closeAlert = (key: number) => {
  const index = findItemIndex(key)
  if (index !== -1) {
    items[index].isShow = false
    removeItem(key)
  }
}

const getContent = (content: string | object | null) => {
  if (typeof content === 'object' && content) {
    if (Reflect.has(content, '__v_isVNode')) {
      return content
    }
  } else if (typeof content === 'function') {
    return content
  }
  return createVNode('label', {}, content)
}
</script>

<style lang="scss">
@import './variant.scss';

.#{$prefixClass}-notification {
  @apply w-full md:max-w-sm h-auto bg-light rounded-md p-3 transition duration-300 relative mx-auto;
  @apply text-gray-800 overflow-hidden mt-2 shadow-md text-sm flex;
  z-index: 99;

  @include screen-md {
    width: 400px;
  }

  @include variant;

  &--wrapper {
    @apply h-full px-3 flex items-center flex-grow-0;
    min-height: 20px;
  }

  &--close {
    @apply absolute right-3.5 top-4 cursor-pointer;

    svg {
      @apply w-3;
    }
  }

  &--icon {
    @apply w-5 flex items-center;
  }

  &--title {
    label {
      @apply mx-0 text-lg;
      line-height: unset;
    }
  }
}
</style>
