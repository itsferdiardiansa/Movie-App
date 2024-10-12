import CButton from './Button.vue'

const Template = args => ({
  components: { CButton },
  setup() {
    return { args }
  },
  template: '<CButton v-bind="args" />',
})

export const Basic = Template.bind({})
Basic.args = { variant: 'primary', label: 'Click me' }

export default {
  title: 'Core/Components/Button',
  component: CButton,
  args: { label: 'Button' },
  argTypes: {
    label: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: [
        'primary',
        'danger',
        'warning',
        'dark',
        'success',
        'light',
        'orange',
      ],
    },
  },
}
