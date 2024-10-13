export type Item = {
  label: string
}

export type CheckboxTypes = {
  modelValue: string | number | boolean | unknown[]
  items: Item[]
  keyname: string
  variant: string
  type: string
}

const checkboxProps = {
  modelValue: '',
  items: () => [],
  keyname: '',
  variant: 'primary',
  type: '',
}

export default checkboxProps
