import { createApp, App } from 'vue'
import Notification from './components/Notification.vue'
import { FontAwesomeIcon } from '@/components/font-awesome'
import Emitter, { Emitter as EmitterType } from 'mitt'
import './styles.scss'

interface NotificationEvents {
  'show-notification': any
  [event: string]: unknown
  [event: symbol]: unknown
}

interface NotificationContext {
  emitter: EmitterType<NotificationEvents>
  items: any[]
}

declare global {
  interface Window {
    SSNotification: (...args: any[]) => void
  }
}

const createElement = (): string => {
  const root = document.querySelector('body')
  const div = document.createElement('div')
  const elementClass = 'tx-notification-root'
  div.setAttribute('role', 'alert')
  div.setAttribute('class', elementClass)
  root?.appendChild(div)
  return elementClass
}

export const NotificationPlugin = (app: App): void => {
  const notificationRootElement = document.querySelector('[role="alert"]')
  let instance: ReturnType<typeof createApp> | null = null

  if (notificationRootElement) return

  const notificationContext = {
    show: (options: Record<string, any>) => {
      if (instance) {
        // Cast the provides object to the correct type
        const {
          notificationContext: { emitter },
        } = instance._context?.provides as {
          notificationContext: NotificationContext
        }

        emitter.emit('show-notification', options) // Emit options as a single object
      }
    },
    init: async (): Promise<void> => {
      try {
        const items: any[] = []
        instance = createApp(Notification)
        instance.component('FontAwesomeIcon', FontAwesomeIcon)
        instance.provide('notificationContext', {
          emitter: Emitter<NotificationEvents>(),
          items,
        })
        const elementClass = createElement()
        if (elementClass) instance.mount(`.${elementClass}`)
      } catch (error) {
        console.error('Failed to initialize notification system', error)
      }
    },
  }

  notificationContext.init()

  window.SSNotification = function (...args: any[]): void {
    const [options] = args

    if (typeof options === 'object') {
      notificationContext.show(options)
    } else {
      const [variant, content, options] = args
      notificationContext.show({ variant, content, ...options })
    }
  }
}

export default {
  install: NotificationPlugin,
}
