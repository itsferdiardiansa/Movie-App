export type BadgeVariant =
  | 'primary'
  | 'light'
  | 'danger'
  | 'warning'
  | 'dark'
  | 'success'
  | 'orange'

export type BadgeSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type BadgeShape = 'rounded' | 'pill' | 'square'

export interface BadgeTypes {
  label: string
  variant: BadgeVariant
  size: BadgeSize
  shape: BadgeShape
  inverse: boolean
  icon: () => string[]
  dot: boolean
}

export const defaultProps: BadgeTypes = {
  label: '',
  variant: 'light',
  size: 'xs',
  shape: 'rounded',
  inverse: false,
  icon: () => [],
  dot: false,
}
