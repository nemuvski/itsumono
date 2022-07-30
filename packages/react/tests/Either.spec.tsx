/**
 * @jest-environment jsdom
 */

import React from 'react'
import { cleanup, render } from '@testing-library/react'
import Either from '../src/components/Either'

describe('components/Either.tsx', () => {
  describe('<Either />', () => {
    afterEach(() => {
      cleanup()
    })

    test('[test] 引数指定のみ', () => {
      const { getByTestId } = render(
        <div data-testid='target'>
          <Either test match={'matched'} not={'not-matched'} />
        </div>
      )
      const targetElement = getByTestId('target')
      expect(targetElement.textContent).toBe('matched')
    })

    test('[test] trueをとる', () => {
      const { getByTestId } = render(
        <div data-testid='target'>
          <Either test={true} match={<span>matched</span>} not={<span>not-matched</span>} />
        </div>
      )
      const targetElement = getByTestId('target')
      expect(targetElement.textContent).toBe('matched')
    })

    test('[test] falseをとる', () => {
      const { getByTestId } = render(
        <div data-testid='target'>
          <Either test={false} match={'matched'} not={'not-matched'} />
        </div>
      )
      const targetElement = getByTestId('target')
      expect(targetElement.textContent).toBe('not-matched')
    })

    test('[test] undefinedをとる', () => {
      const { getByTestId } = render(
        <div data-testid='target'>
          <Either test={undefined} match={'matched'} not={'not-matched'} />
        </div>
      )
      const targetElement = getByTestId('target')
      expect(targetElement.textContent).toBe('not-matched')
    })

    test('[test] nullをとる', () => {
      const { getByTestId } = render(
        <div data-testid='target'>
          <Either test={null} match={'matched'} not={'not-matched'} />
        </div>
      )
      const targetElement = getByTestId('target')
      expect(targetElement.textContent).toBe('not-matched')
    })
  })
})
