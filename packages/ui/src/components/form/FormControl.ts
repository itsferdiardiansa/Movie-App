/* eslint-disable */
import {
  defineComponent,
  getCurrentInstance,
  inject,
  onMounted,
  h,
  unref,
  reactive,
  Transition,
  VNode,
} from 'vue'
import Schema from 'async-validator'
import { cloneElement } from '@/utils/vnode'
import debounce from '@/utils/debounce'
import './styles.scss'

interface FormContextType {
  getModel: () => Record<string, any>
  addField?: (vnode: VNode) => void
}

interface FormControlProps {
  rules?: Record<string, any>
  label?: string
  colspan?: number
  offset?: number
}

interface Listener {
  [key: string]: Function
}

const getListeners = (child: VNode | null): Listener => {
  const listeners: Listener = {}
  const prefixListener = /^on/
  const childProps = child?.props || {}

  Object.keys(childProps).forEach(item => {
    if (prefixListener.test(item)) {
      listeners[item] = childProps[item]
    }
  })

  return listeners
}

const isVNode = (element: any): element is VNode => {
  return (
    Reflect.has(element, 'appContext') &&
    Reflect.has(element, 'props') &&
    Reflect.has(element, 'component')
  )
}

export default defineComponent({
  props: {
    rules: {
      type: Object,
      default: () => ({}),
    },
    label: {
      type: String,
      default: '',
    },
    colspan: {
      type: Number,
    },
    offset: {
      type: Number,
    },
  },
  setup(props: FormControlProps, { slots }) {
    const prefixClass = 'tx'
    const instance = getCurrentInstance()
    const formContext = inject<FormContextType>('formContext')
    const controlStatus = reactive({
      hasFeedback: false,
      errorMessage: null as string | null,
    })

    const getRules = () => unref(props.rules)

    const getFilteredRules = () => {
      const rules = getRules()
      const field = Object.keys(rules)[0]
      const modelValue = formContext?.getModel()[field]

      if (modelValue === undefined) return false

      return {
        rules,
        field,
        value: { [field]: modelValue },
      }
    }

    const validate = (callback?: Function) => {
      const filteredRules = getFilteredRules()
      if (!filteredRules) return

      const validator = new Schema(filteredRules.rules)
      validator.validate(filteredRules.value, (errors: any) => {
        controlStatus.errorMessage = errors ? errors[0].message : null
        if (callback) callback(errors)
      })
    }

    const onFieldChange = () => {
      validate()
    }

    const renderLabelControl = () => {
      return h(
        'div',
        { class: `${prefixClass}-form-control--label` },
        props.label
      )
    }

    const renderFormControl = (children: VNode) => {
      const customClass = [`${prefixClass}-form-control`]
      if (controlStatus.hasFeedback) {
        customClass.push('has-feedback')
      }

      return h('div', { class: customClass.join(' ') }, [
        props.label && renderLabelControl(),
        children,
      ])
    }

    onMounted(() => {
      if (formContext?.addField && instance?.vnode) {
        formContext.addField(instance.vnode)
      }
    })

    return {
      onFieldChange,
      renderFormControl,
    }
  },
  render() {
    const children = this.$slots.default?.()[0]

    if (isVNode(children)) {
      const childListeners = getListeners(children)
      const childOnChange = childListeners?.onChange

      const clonedChildren = cloneElement(children, {
        onChange: debounce((...args: any) => {
          if (childOnChange) {
            childOnChange(...args)
          }
          this.onFieldChange()
        }),
      })

      return this.renderFormControl(clonedChildren)
    }

    return null
  },
})
