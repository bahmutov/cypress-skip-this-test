/// <reference types="cypress" />

import { skipIfPreviousTestsFailed } from '../../src'

describe('Parent suite', () => {
  // second test fails on purpose
  // and the third test should skip
  beforeEach(skipIfPreviousTestsFailed)

  it('test 1', () => {})

  it('test 2', () => {
    throw new Error('fail on purpose')
  })

  it('test 3', () => {})
})
