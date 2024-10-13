import Badge from './Badge.vue'

const Template = args => ({
  components: { Badge },
  setup() {
    return { args }
  },
  template: '<Badge v-bind="args" />',
})

export const Base = Template.bind({})
Base.args = { variant: 'primary' }

export default {
  title: 'Core/Components/Badge',
  component: Badge,
  args: { label: 'paid' },
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
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'xs | sm | md | lg | xl',
      type: 'BadgeSize',
      default: 'md',
    },
    dot: {
      control: 'boolean',
      type: 'boolean',
      description: 'set the dot without label',
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
      type: 'BadgeShape',
      options: ['rounded', 'pill', 'square'],
    },
  },
}
