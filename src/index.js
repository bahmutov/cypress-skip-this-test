// @ts-ignore "cy.state" is not in the "cy" type
const getMochaContext = () => cy.state('runnable').ctx

const skipIfPreviousTestsFailed = () => {
  const ctx = getMochaContext()
  const thisTestIndex = ctx.test.parent?.tests?.indexOf(ctx.test)
  const previousTests = ctx.test.parent?.tests?.slice(
    0,
    thisTestIndex,
  )
  const anyFailedTests = previousTests?.some(
    (test) => test.state === 'failed',
  )
  if (anyFailedTests) {
    return ctx.skip()
  }
}

module.exports = {
  skipIfPreviousTestsFailed,
}
