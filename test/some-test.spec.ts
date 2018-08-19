import libFn from '../lib'
import aFn from '../packages/some-esm-package'
import * as Sequelize from 'sequelize'

describe('test lib', () => {
  test('call fn', () => {
    console.log(Sequelize.STRING)
    expect(aFn()).toEqual(true)
    expect(libFn()).toEqual(true)
  })
})