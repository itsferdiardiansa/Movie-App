import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Input } from '..'

describe('Components/Form/Input', () => {
  it('renders the correct initial value', () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: 'Test Value',
        placeholder: 'Enter text',
        autofocus: false,
        type: 'text',
        errorMessage: '',
        onError: false,
      },
    })
    expect(wrapper.find('input').element.value).toBe('Test Value')
  })

  it('emits an update event when value changes', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: '',
        placeholder: 'Enter text',
        autofocus: false,
        type: 'text',
        errorMessage: '',
        onError: false,
      },
    })
    const input = wrapper.find('input')
    await input.setValue('New Value')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')[0]).toEqual(['New Value'])
  })

  it('applies the correct disabled state', () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: '',
        placeholder: 'Enter text',
        autofocus: false,
        type: 'text',
        errorMessage: '',
        onError: false,
        disabled: true,
      },
    })
    expect(wrapper.find('input').element.disabled).toBe(true)
  })
})
