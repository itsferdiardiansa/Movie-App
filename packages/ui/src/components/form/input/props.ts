export type Variant = 'text' | 'email' | 'password' | 'search'

export interface InputTypes {
  modelValue?: string | boolean | number
  icon?: unknown[]
  onError?: boolean
  errorMessage?: string
  autofocus: boolean | string
  type?: string
  placeholder: string
  onChange?: Function
}

const inputProps = {
  modelValue: '',
  icon: () => [],
  onError: false,
  errorMessage: '',
  autofocus: false,
  type: 'text',
  placeholder: '',
  onChange: () => {},
}

export default inputProps
