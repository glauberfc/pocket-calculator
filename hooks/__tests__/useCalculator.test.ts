import { act, renderHook } from '@testing-library/react-hooks'
import useCalculator from 'hooks/useCalculator'

describe('useCalculator', () => {
  it('should starts with value equals to 0', () => {
    const { result } = renderHook(useCalculator)

    expect(result.current.firstOperand).toEqual('0')
  })

  it('should sum two numbers', async () => {
    const { result } = renderHook(() => useCalculator())

    act(() => result.current.setOperand('1'))
    act(() => result.current.setOperator('+'))
    act(() => result.current.setOperand('2'))
    act(() => result.current.setOperator('='))

    expect(result.current.firstOperand).toEqual('3')
  })

  it('should subtract two numbers', async () => {
    const { result } = renderHook(() => useCalculator())

    act(() => result.current.setOperand('2'))
    act(() => result.current.setOperator('-'))
    act(() => result.current.setOperand('1'))
    act(() => result.current.setOperator('='))

    expect(result.current.firstOperand).toEqual('1')
  })

  it('should multiply two numbers', async () => {
    const { result } = renderHook(() => useCalculator())

    act(() => result.current.setOperand('2'))
    act(() => result.current.setOperator('*'))
    act(() => result.current.setOperand('2'))
    act(() => result.current.setOperator('='))

    expect(result.current.firstOperand).toEqual('4')
  })

  it('should divide two numbers', async () => {
    const { result } = renderHook(() => useCalculator())

    act(() => result.current.setOperand('10'))
    act(() => result.current.setOperator('/'))
    act(() => result.current.setOperand('2'))
    act(() => result.current.setOperator('='))

    expect(result.current.firstOperand).toEqual('5')
  })
})
