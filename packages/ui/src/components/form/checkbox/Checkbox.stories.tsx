import Checkbox from './Checkbox.vue'

const Template = args => ({
  components: { Checkbox },
  setup() {
    return { args }
  },
  template: '<Checkbox v-bind="args" />',
})

export const Primary = Template.bind({})
Primary.args = { variant: 'primary' }

export default {
  title: 'Core/Components/Form/Checkbox',
  component: Checkbox,
  args: {
    items: [
      { id: 1, label: 'Men' },
      { id: 2, label: 'Women' },
    ],
  },
  argTypes: {
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
