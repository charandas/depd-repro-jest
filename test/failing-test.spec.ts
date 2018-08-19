import aFn from '../packages/some-esm-package'
import * as Sequelize from 'sequelize'

describe('test lib', () => {
  test('call fn', () => {
    console.log(Sequelize.STRING)
    expect(aFn()).toEqual(true)
  })
})

// produces:

/*
  ● Test suite failed to run

        TypeError: callSite.getFileName is not a function

      at callSiteLocation (node_modules/depd/index.js:252:23)
      at depd (node_modules/depd/index.js:111:14)
      at new Logger (node_modules/sequelize/lib/utils/logger.js:23:17)
      at Object.<anonymous> (node_modules/sequelize/lib/utils.js:15:16)
      at Object.<anonymous> (node_modules/sequelize/lib/sequelize.js:7:15)
*/
