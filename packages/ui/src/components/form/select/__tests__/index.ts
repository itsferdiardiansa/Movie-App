import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeAll } from 'vitest'

import { Select } from '..'

describe('common/Form/Select', () => {
  let artist = ''
  let Component

  beforeAll(() => {
    const props = {
      placeholder: 'Please select',
      items: [
        { value: 'Muse', label: 'Muse' },
        { value: 'Alterbridge', label: 'Alterbridge' },
        { value: 'Lamb of God', label: 'Lamb of God' },
        { value: 'Erra', label: 'Erra' },
        { value: 'Architects', label: 'Architects' },
      ],
    }

    Component = mount(Select, {
      props: {
        modelValue: artist,
        ...props,
      },
    })
  })

  it('will render and match snapshot', () => {
    expect(Component.element).toMatchSnapshot()
  })
})
