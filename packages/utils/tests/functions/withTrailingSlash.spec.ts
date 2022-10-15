import { withTrailingSlash } from '../../src'

test('withTrailingSlash()', () => {
  expect(withTrailingSlash('https://localhost:8080')).toBe('https://localhost:8080/')
  expect(withTrailingSlash('https://localhost:8080/')).toBe('https://localhost:8080/')
  expect(withTrailingSlash('https://localhost:8080//')).toBe('https://localhost:8080/')
})
