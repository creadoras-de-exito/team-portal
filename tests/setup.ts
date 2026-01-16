import { afterEach, beforeEach, vi } from 'vitest'

beforeEach(() => {
  vi.clearAllMocks()
})

afterEach(() => {
  if (typeof localStorage !== 'undefined') {
    localStorage.clear()
  }
})
