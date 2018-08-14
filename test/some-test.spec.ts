import libFn from '../lib'

describe('test lib', () => {
  test('call fn', () => {
    expect(libFn()).toEqual(true)
  })
})