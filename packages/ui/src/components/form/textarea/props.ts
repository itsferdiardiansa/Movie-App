export interface TextareaTypes {
  modelValue?: string | boolean | number
  label?: string
  onError?: boolean
  errorMessage?: string
  onChange?: Function
}

const textareaProps = {
  modelValue: '',
  label: '',
  onError: true,
  errorMessage: '',
  onChange: () => {},
}

export default textareaProps
