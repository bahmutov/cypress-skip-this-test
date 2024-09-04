// @ts-ignore "cy.state" is not in the "cy" type
const getMochaContext = () => cy.state('runnable').ctx

const skipIfPreviousTestsFailed = () => {
  const ctx = getMochaContext()
  const thisTestIndex = ctx.test.parent?.tests?.indexOf(ctx.test)
  console.log(thisTestIndex)
  const previousTests = ctx.test.parent?.tests?.slice(
    0,
    thisTestIndex,
  )
  console.log(previousTests)
  const anyFailedTests = previousTests?.some(
    (test) => test.state === 'failed',
  )
  console.log({ thisTestIndex, anyFailedTests })
  if (anyFailedTests) {
    return ctx.skip()
  }
}

module.exports = {
  skipIfPreviousTestsFailed,
}
