import Select from './Select.vue'

const Template = args => ({
  components: { Select },
  setup() {
    return { args }
  },
  template: '<Select v-bind="args" />',
})

export const Basic = Template.bind({})
Basic.args = {
  placeholder: 'Select city',
  items: [
    { value: 'SUB', label: 'Surabaya' },
    { value: 'JKT', label: 'Jakarta' },
  ],
}

export default {
  title: 'Core/Components/Form/Select',
  component: Select,
  args: {},
  argTypes: {},
}
