import Spinner from './Spinner.vue'

const Template = args => ({
  components: { Spinner },
  setup() {
    return { args }
  },
  template: '<Spinner v-bind="args" />',
})

export const Basic = Template.bind({})
Basic.args = {
  width: 20,
  height: 20,
}

export default {
  title: 'Core/Components/Loader/Spinner',
  component: Spinner,
  args: {},
  argTypes: {},
}
