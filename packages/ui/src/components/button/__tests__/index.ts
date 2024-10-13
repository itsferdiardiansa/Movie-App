import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Button } from '..'
import { defaultProps } from '../props'

describe('Components/Button', () => {
  it('renders correctly (snapshot)', () => {
    const wrapper = mount(Button, {
      props: {
        label: 'Test Button',
        variant: 'primary',
        size: 'md',
        shape: 'rounded',
        disabled: false,
        isLoading: false,
        block: false,
        inverse: false,
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders the button with default props', () => {
    const wrapper = mount(Button, {
      props: {
        label: defaultProps.label,
        variant: 'primary',
        size: 'md',
        shape: 'rounded',
        disabled: false,
        isLoading: false,
        block: false,
        inverse: false,
      },
    })
    const button = wrapper.find('button')

    expect(button.exists()).toBe(true)
    expect(button.text()).toBe(defaultProps.label)
    expect(button.classes()).toContain('tx-btn')
    expect(button.classes()).toContain('tx-btn--primary')
    expect(button.classes()).toContain('tx-btn--md')
  })

  it('renders the button with a custom label', () => {
    const wrapper = mount(Button, {
      props: {
        label: 'Submit',
        variant: 'primary',
        size: 'md',
        shape: 'rounded',
        disabled: false,
        isLoading: false,
        block: false,
        inverse: false,
      },
    })
    expect(wrapper.find('button').text()).toBe('Submit')
  })

  it('emits click event with payload when clicked', async () => {
    const wrapper = mount(Button, {
      props: {
        label: 'Click Me',
        variant: 'primary',
        size: 'md',
        shape: 'rounded',
        disabled: false,
        isLoading: false,
        block: false,
        inverse: false,
      },
    })
    const button = wrapper.find('button')
    await button.trigger('click')

    expect(wrapper.emitted()).toHaveProperty('click')
    const clickEvent = wrapper.emitted('click')
    expect(clickEvent).toHaveLength(1)
    expect(clickEvent?.[0]).toBeTruthy()
  })

  it('does not emit click event when disabled', async () => {
    const wrapper = mount(Button, {
      props: {
        label: 'Submit',
        variant: 'primary',
        size: 'md',
        shape: 'rounded',
        disabled: true,
        isLoading: false,
        block: false,
        inverse: false,
      },
    })
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('applies correct classes for variant and size', () => {
    const wrapper = mount(Button, {
      props: {
        label: 'Submit',
        variant: 'danger',
        size: 'lg',
        shape: 'rounded',
        disabled: false,
        isLoading: false,
        block: false,
        inverse: false,
      },
    })
    const button = wrapper.find('button')
    expect(button.classes()).toContain('tx-btn--danger')
    expect(button.classes()).toContain('tx-btn--lg')
  })

  it('shows spinner and hides label when isLoading is true', () => {
    const wrapper = mount(Button, {
      props: {
        label: 'Submit',
        variant: 'primary',
        size: 'md',
        shape: 'rounded',
        disabled: false,
        isLoading: true,
        block: false,
        inverse: false,
      },
    })

    expect(wrapper.find('.tx-btn--spinner').exists()).toBe(true)
    expect(wrapper.find('.tx-btn--label').exists()).toBe(false)
  })

  it('applies block class when block prop is true', () => {
    const wrapper = mount(Button, {
      props: {
        label: 'Submit',
        variant: 'primary',
        size: 'md',
        shape: 'rounded',
        disabled: false,
        isLoading: false,
        block: true,
        inverse: false,
      },
    })
    expect(wrapper.find('button').classes()).toContain('block')
  })

  it('applies correct class based on shape prop', () => {
    const shapes = ['pill', 'square', 'rounded'] as const
    shapes.forEach(shape => {
      const wrapper = mount(Button, {
        props: {
          label: 'Submit',
          variant: 'primary',
          size: 'md',
          shape,
          disabled: false,
          isLoading: false,
          block: false,
          inverse: false,
        },
      })
      expect(wrapper.find('button').classes()).toContain(shape)
    })
  })

  it('renders custom content in default slot', () => {
    const wrapper = mount(Button, {
      props: {
        label: 'Submit',
        variant: 'primary',
        size: 'md',
        shape: 'rounded',
        disabled: false,
        isLoading: false,
        block: false,
        inverse: false,
      },
      slots: {
        default: '<span class="custom-content">Custom Button</span>',
      },
    })
    expect(wrapper.find('.custom-content').exists()).toBe(true)
    expect(wrapper.find('.custom-content').text()).toBe('Custom Button')
  })

  it('applies the inverse variant class', () => {
    const wrapper = mount(Button, {
      props: {
        label: 'Submit',
        variant: 'primary',
        size: 'md',
        shape: 'rounded',
        disabled: false,
        isLoading: false,
        block: false,
        inverse: true,
      },
    })
    expect(wrapper.find('button').classes()).toContain(
      'tx-btn--primary-inverse'
    )
  })
})
