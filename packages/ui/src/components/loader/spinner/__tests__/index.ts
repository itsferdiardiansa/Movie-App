import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Spinner from '../Spinner.vue'

describe('Components/Loader/Spinner', () => {
  it('renders with the correct default size', () => {
    const wrapper = mount(Spinner, {
      props: {
        width: 10,
        height: 10,
      },
    })
    expect(wrapper.classes()).toContain('tx-spinner')
  })
})
