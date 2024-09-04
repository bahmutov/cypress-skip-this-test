/// <reference types="cypress" />

import { skipIfPreviousTestsFailed } from '../../src'

describe('Parent suite', () => {
  // all tests should execute
  beforeEach(skipIfPreviousTestsFailed)

  it('test 1', () => {})

  it('test 2', () => {})

  it('test 3', () => {})
})
