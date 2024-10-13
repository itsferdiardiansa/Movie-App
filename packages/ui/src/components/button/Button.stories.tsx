import ZButton from './Button.vue'

const Template = args => ({
  components: { ZButton },
  setup() {
    return { args }
  },
  template: '<ZButton v-bind="args" />',
})

export const Base = Template.bind({})
Base.args = { variant: 'primary', label: 'Click me' }

export default {
  title: 'Core/Components/Button',
  component: ZButton,
  args: { label: 'Button' },
  argTypes: {
    label: {
      control: 'text',
    },
    variant: {
      control: 'select',
      description:
        'light | primary | danger | warning | success | dark | orange',
      type: 'ButtonVariant',
      options: [
        'light',
        'primary',
        'danger',
        'warning',
        'success',
        'dark',
        'orange',
      ],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'xs | sm | md | lg | xl',
      type: 'ButtonSize',
      default: 'md',
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      default: false,
    },
    inverse: {
      control: 'boolean',
      type: 'boolean',
      description: 'inverse the current background color',
      default: false,
    },
    shape: {
      control: 'select',
      default: 'rounded',
      description: 'rounded | pill | square',
      type: 'ButtonShape',
      options: ['rounded', 'pill', 'square'],
    },
    block: {
      control: 'boolean',
      description: 'set true to full-width',
      type: 'boolean',
      default: true,
    },
    isLoading: {
      control: 'boolean',
      type: 'boolean',
      description: 'set true to show the spinner component',
      default: false,
    },
  },
}
