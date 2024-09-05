# cypress-skip-this-test

> Skips the current test if it depends on the previous failed test

📝 Read the blog post [Skip Dependent Cypress Tests On Failure](https://glebbahmutov.com/blog/skip-dependent-tests-on-failure/).

## Install

```
$ npm i -D cypress-skip-this-test
# or using Yarn
$ yarn add -D cypress-skip-this-test
```

Import the `` in the specs with tests that depend on each other

```js
import { skipIfPreviousTestsFailed } from 'cypress-skip-this-test'

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
```

The "test 3" will be skipped when the test "test 2" fails. If all tests in the parent suite before "test 3" pass successfully, then the test will run.

## Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2024

- [@bahmutov](https://twitter.com/bahmutov)
- [glebbahmutov.com](https://glebbahmutov.com)
- [blog](https://glebbahmutov.com/blog)
- [videos](https://www.youtube.com/glebbahmutov)
- [presentations](https://slides.com/bahmutov)
- [cypress.tips](https://cypress.tips)
- [Cypress Tips & Tricks Newsletter](https://cypresstips.substack.com/)
- [my Cypress courses](https://cypress.tips/courses)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/cypress-skip-this-test/issues) on Github
