import aFn from '../packages/some-esm-package'

describe('test lib', () => {
  test('call fn', () => {
    expect(aFn()).toEqual(true)
  })
})

// produces:

/*
  ● Test suite failed to run

    /Users/charandas/serve/asurity/RiskExec/depd-repro-jest/packages/some-esm-package/node_modules/depd/index.js:1
    TypeError: callSite.getFileName is not a function

      at callSiteLocation (packages/some-esm-package/node_modules/depd/index.js:252:23)
*/