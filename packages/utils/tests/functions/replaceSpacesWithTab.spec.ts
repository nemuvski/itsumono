import { test, expect } from 'vitest'
import { replaceSpacesWithTab } from '../../src'

test('replaceSpacesWithTab()', () => {
  expect(replaceSpacesWithTab('  test', 2)).toBe('\ttest')
  expect(replaceSpacesWithTab('    test', 2)).toBe('\t\ttest')
  expect(replaceSpacesWithTab('     test', 2)).toBe('\t\t test')
  expect(() => {
    replaceSpacesWithTab('test', 0)
  }).toThrowError('replaceSpacesWithTab(): The argument numSpaces expects integer greater than or equal to 1')
})
