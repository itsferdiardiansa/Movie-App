import { beforeAll, afterAll, vi } from 'vitest'

beforeAll(() => {
  if (!console.warn['mock']) {
    vi.spyOn(console, 'warn').mockImplementation(() => {})
  }

  if (!console.error['mock']) {
    vi.spyOn(console, 'error').mockImplementation(() => {})
  }
})

afterAll(() => {
  if (console.warn['mock']) {
    ;(console.warn as any).mockRestore()
  }
})
