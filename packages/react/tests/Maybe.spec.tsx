import { cleanup, render } from '@testing-library/react'
import Maybe from '../src/components/Maybe'

describe('components/Maybe.tsx', () => {
  describe('<Maybe />', () => {
    afterEach(() => {
      cleanup()
    })

    test('[test] 引数指定のみ', () => {
      const { getByTestId } = render(
        <div data-testid='target'>
          <Maybe test>some</Maybe>
        </div>
      )
      const targetElement = getByTestId('target')
      expect(targetElement.textContent).toBe('some')
    })

    test('[test] trueをとる', () => {
      const { getByTestId } = render(
        <div data-testid='target'>
          <Maybe test={true}>
            <span>some</span>
          </Maybe>
        </div>
      )
      const targetElement = getByTestId('target')
      expect(targetElement.textContent).toBe('some')
    })

    test('[test] falseをとる', () => {
      const { getByTestId } = render(
        <div data-testid='target'>
          <Maybe test={false}>some</Maybe>
        </div>
      )
      const targetElement = getByTestId('target')
      expect(targetElement.textContent).toBe('')
    })

    test('[test] undefinedをとる', () => {
      const { getByTestId } = render(
        <div data-testid='target'>
          <Maybe test={undefined}>some</Maybe>
        </div>
      )
      const targetElement = getByTestId('target')
      expect(targetElement.textContent).toBe('')
    })

    test('[test] nullをとる', () => {
      const { getByTestId } = render(
        <div data-testid='target'>
          <Maybe test={null}>some</Maybe>
        </div>
      )
      const targetElement = getByTestId('target')
      expect(targetElement.textContent).toBe('')
    })
  })
})
