import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Badge } from '..'

describe('Components/Badge', () => {
  it('renders the correct label', () => {
    const wrapper = mount(Badge, {
      props: {
        label: 'Test Badge',
        variant: 'primary',
        size: 'md',
        shape: 'rounded',
        inverse: false,
        icon: () => [],
        dot: false,
      },
    })
    expect(wrapper.text()).toContain('Test Badge')
  })

  it('applies the correct variant class', () => {
    const wrapper = mount(Badge, {
      props: {
        variant: 'primary',
        label: 'Test Badge',
        size: 'md',
        shape: 'rounded',
        inverse: false,
        icon: () => [],
        dot: false,
      },
    })
    expect(wrapper.classes()).toContain('tx-badge--primary')
  })

  it('applies the correct size class', () => {
    const wrapper = mount(Badge, {
      props: {
        size: 'lg',
        label: 'Test Badge',
        variant: 'primary',
        shape: 'rounded',
        inverse: false,
        icon: () => [],
        dot: false,
      },
    })
    expect(wrapper.classes()).toContain('tx-badge--lg')
  })

  it('applies shape class when shape prop is passed', () => {
    const wrapper = mount(Badge, {
      props: {
        shape: 'pill',
        label: 'Test Badge',
        variant: 'primary',
        size: 'md',
        inverse: false,
        icon: () => [],
        dot: false,
      },
    })
    expect(wrapper.classes()).toContain('pill')
  })

  it('applies inverse styling when inverse prop is true', () => {
    const wrapper = mount(Badge, {
      props: {
        variant: 'primary',
        inverse: true,
        label: 'Test Badge',
        size: 'md',
        shape: 'rounded',
        icon: () => [],
        dot: false,
      },
    })
    expect(wrapper.classes()).toContain('tx-badge--primary-inverse')
  })

  it('matches snapshot for default props', () => {
    const wrapper = mount(Badge, {
      props: {
        label: 'Test Badge',
        variant: 'primary',
        size: 'md',
        shape: 'rounded',
        inverse: false,
        icon: () => [],
        dot: false,
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
