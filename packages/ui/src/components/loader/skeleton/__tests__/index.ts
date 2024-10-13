import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Rect from '../Rect.vue'

describe('Components/Loader/Skeleton', () => {
  it('renders with the correct default width and height', () => {
    const wrapper = mount(Rect, {
      props: {
        width: '100px',
        height: '50px',
        rounded: false,
      },
    })
    const style = wrapper.element.style
    expect(style.width).toBe('100px')
    expect(style.height).toBe('50px')
  })

  it('applies the correct border-radius when rounded is true', () => {
    const wrapper = mount(Rect, {
      props: {
        width: '100px',
        height: '50px',
        rounded: true,
      },
    })

    const style = wrapper.element.style
    expect(style.borderRadius).toBe('8px')
  })
})
