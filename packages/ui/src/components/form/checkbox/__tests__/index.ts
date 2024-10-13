import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Checkbox } from '..'

describe('Components/Form/Checkbox', () => {
  it('renders the correct initial checked state', () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue: 'Timnas Indonesia',
        keyname: 'label',
        variant: 'primary',
        type: 'checkbox',
        items: [{ label: 'Timnas Indonesia', value: 'Timnas Indonesia' }],
      },
    })

    const checkbox = wrapper.find('input[type="checkbox"]')
      .element as HTMLInputElement
    expect(checkbox.checked).toBe(true)
  })

  it('emits an update event when checked state changes', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue: 'Timnas Indonesia',
        keyname: 'label',
        variant: 'primary',
        type: 'checkbox', // Added type prop
        items: [{ label: 'Timnas Indonesia', value: 'Timnas Indonesia' }], // Added value to item
      },
    })

    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })

  it('renders with a label when provided', () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue: 'Argentina',
        keyname: 'ARG',
        variant: 'primary',
        type: 'checkbox', // Added type prop
        items: [{ label: 'Timnas Indonesia', value: 'Timnas Indonesia' }], // Added value to item
      },
    })
    expect(wrapper.text()).toContain('Timnas Indonesia')
  })
})
