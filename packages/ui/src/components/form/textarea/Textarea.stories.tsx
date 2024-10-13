import Textarea from './Textarea.vue'

const Template = args => ({
  components: { Textarea },
  setup() {
    return { args }
  },
  template: '<Textarea v-bind="args" />',
})

export const Basic = Template.bind({})
Basic.args = {
  label: 'description',
}

export default {
  title: 'Core/Components/Form/Textarea',
  component: Textarea,
  args: {},
  argTypes: {
    onError: {
      control: 'boolean',
      default: false,
    },
    errorMessage: {
      control: 'text',
      default: '',
    },
    placeholder: {
      control: 'text',
      default: '',
    },
  },
}
