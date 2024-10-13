import Input from './Input.vue'

const Template = args => ({
  components: { Input },
  setup() {
    return { args }
  },
  template: '<Input v-bind="args" />',
})

export const Basic = Template.bind({})
Basic.args = {
  autofocus: true,
  placeholder: 'Search product',
}

export const Error = Template.bind({})
Error.args = {
  onError: true,
  errorMessage: 'This is required',
}

export const Password = Template.bind({})
Password.args = {
  type: 'password',
  placeholder: 'Your password',
}

export default {
  title: 'Core/Components/Form/Input',
  component: Input,
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
    autofocus: {
      control: 'boolean',
      default: false,
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'search'],
    },
    placeholder: {
      control: 'text',
      default: '',
    },
  },
}
