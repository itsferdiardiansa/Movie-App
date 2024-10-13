export type ButtonVariant =
  | 'primary'
  | 'light'
  | 'danger'
  | 'warning'
  | 'dark'
  | 'success'
  | 'orange'

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type ButtonShape = 'rounded' | 'pill' | 'square'

export interface ButtonTypes {
  label: string
  variant: ButtonVariant
  size: ButtonSize
  shape: ButtonShape
  disabled: boolean
  isLoading: boolean
  block: boolean
  inverse: boolean
}

export const defaultProps: ButtonTypes = {
  label: 'Click me!',
  variant: 'primary',
  size: 'md',
  block: false,
  inverse: false,
  disabled: false,
  shape: 'rounded',
  isLoading: false,
}
