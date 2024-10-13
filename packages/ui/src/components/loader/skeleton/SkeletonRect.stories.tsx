import SkeletonRect from './Rect.vue'

const Template = args => ({
  components: { SkeletonRect },
  setup() {
    return { args }
  },
  template: '<SkeletonRect v-bind="args" />',
})

export const Basic = Template.bind({})
Basic.args = {
  width: '100px',
  height: 10,
}

export default {
  title: 'Core/Components/Loader/Skeleton/Rect',
  component: SkeletonRect,
  args: {},
  argTypes: {
    rounded: {
      control: 'boolean',
      default: false,
    },
  },
}
