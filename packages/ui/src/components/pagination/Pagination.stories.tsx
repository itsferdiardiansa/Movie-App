import Pagination from './Pagination.vue'

const Template = args => ({
  components: { Pagination },
  setup() {
    return { args }
  },
  template: '<Pagination v-bind="args" />',
})

export const Basic = Template.bind({})
Basic.args = {
  currentPage: 2,
  totalPage: 10,
  perPage: 10,
  lastPage: 10,
}

export default {
  title: 'Core/Components/Pagination',
  component: Pagination,
  args: {},
  argTypes: {},
}
