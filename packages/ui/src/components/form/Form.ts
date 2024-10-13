import {
  defineComponent,
  getCurrentInstance,
  h,
  provide,
  reactive,
  unref,
} from 'vue'
import { prefixClass } from '@/constants'

export type FormContextType = {
  getModel: () => Record<string, any>
  addField: <T>(field: T) => void
  addErrorField: (field: string | Record<string, any>) => void
  removeErrorField: (field: string) => void
}

export default defineComponent({
  props: {
    model: {
      type: Object as () => Record<string, any>,
      default: () => ({}),
    },
    on: {
      type: Function as unknown as () => (
        field: string | Record<string, any>
      ) => void,
    },
  },
  emits: ['onValidateField'],
  setup(props, { emit }) {
    const root = getCurrentInstance()
    const fields = reactive<any[]>([])
    const errorFields = reactive(new Set<string>())

    const addField = (childNode: any): void => {
      fields.push(childNode)
    }

    const addErrorField = (field: string | Record<string, any>): void => {
      let key: string

      if (typeof field === 'object') {
        key = Object.keys(field)[0]
        errorFields.add(key)
      } else {
        errorFields.add(field)
      }
    }

    const removeErrorField = (field: string): void => {
      if (errorFields.has(field)) {
        errorFields.delete(field)
      }
    }

    const validate = (...args: any[]): void => {
      const callback =
        args.length && args[0] !== undefined ? args[0] : () => null

      fields.forEach((field: any) => {
        field.component.ctx.validate(null, (errorMessage: string | null) => {
          if (errorMessage !== null) {
            addErrorField(errorMessage)
          }
        })
      })

      if (typeof callback === 'function' && errorFields.size > 0) {
        callback(false, Array.from(unref(errorFields)))
      } else if (typeof callback === 'function' && errorFields.size === 0) {
        callback(true, unref(props.model))
      }
    }

    const handleSubmit = (e: Event): void => {
      e.preventDefault()
      validate()
    }

    const getModel = (): Record<string, any> => {
      return props.model
    }

    emit('onValidateField', (field: any) => {
      console.log(field)
    })

    provide<FormContextType>('formContext', {
      ...root?.vnode,
      ...props,
      addField,
      addErrorField,
      removeErrorField,
      getModel,
    })

    return {
      validate,
      handleSubmit,
    }
  },
  render() {
    return h(
      'form',
      {
        onSubmit: this.handleSubmit,
        class: `${prefixClass}-form`,
      },
      [this.$slots.default && this.$slots.default()]
    )
  },
})
