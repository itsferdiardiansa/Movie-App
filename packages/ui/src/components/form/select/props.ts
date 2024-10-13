export interface SelectTypes {
  modelValue?: string | boolean | number
  items?: unknown[]
  keyname?: string
  labelKeyname?: string
  disabled?: boolean
  placeholder: string
}

const selectProps = {
  modelValue: '',
  items: () => [],
  keyname: 'value',
  labelKeyname: 'label',
  placeholder: 'Please select',
  disabled: false,
}

export default selectProps
