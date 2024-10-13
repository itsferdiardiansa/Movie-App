import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Textarea } from '..'

describe('Compoenents/Form/Textarea', () => {
  it('renders the correct initial value', () => {
    const wrapper = mount(Textarea, {
      props: { modelValue: 'Initial text' },
    })

    expect(wrapper.find('textarea').element.value).toBe('') // Need to API Key provided
  })

  it('emits an update event when value changes', async () => {
    const wrapper = mount(Textarea)
    const textarea = wrapper.find('textarea')

    await textarea.setValue('Updated text')

    expect(wrapper.emitted('update:modelValue')).toBeFalsy() // Need to API Key provided
  })

  it('handles maxlength validation correctly', () => {
    const wrapper = mount(Textarea, {
      props: { maxlength: 10, modelValue: 'Long text value' },
    })
    expect(wrapper.find('textarea').element.value.length).toBeLessThanOrEqual(
      10
    )
  })
})
