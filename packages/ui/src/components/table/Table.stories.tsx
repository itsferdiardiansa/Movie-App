import Table from './Table.vue'

const Template = args => ({
  components: { Table },
  setup() {
    return { args }
  },
  template: '<Table v-bind="args" />',
})

export const Basic = Template.bind({})
Basic.args = {
  headers: [
    {
      title: 'name',
      accessor: 'name',
      width: '20%',
      align: 'center',
    },
    { title: 'email', accessor: 'email' },
    { title: 'status', accessor: 'status' },
    { title: 'phone', accessor: 'phone' },
    { title: 'role', accessor: 'role' },
  ],
  items: [
    {
      name: 'Ferdi',
      email: 'ferdiardiansa@gmail.com',
      status: 'active',
      phone: '+62 81 314 888 509',
      role: 'Frontend',
    },
  ],
}

export const EmptyRecord = Template.bind({})
EmptyRecord.args = {
  headers: [
    {
      title: 'name',
      accessor: 'name',
      width: '20%',
      align: 'center',
    },
    { title: 'email', accessor: 'email' },
    { title: 'status', accessor: 'status' },
    { title: 'phone', accessor: 'phone' },
    { title: 'role', accessor: 'role' },
  ],
  items: [],
}

export default {
  title: 'Core/Components/Table',
  component: Table,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    withPagination: false,
  },
  argTypes: {},
}
