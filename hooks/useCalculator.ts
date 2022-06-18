import { useReducer } from 'react'

type State = {
  firstOperand: number
  secondOperand: number
  operator: string | null
}

type Action =
  | { type: 'CLEAR' }
  | {
      type: 'COMPUTE'
      payload: string | null
    }
  | {
      type: 'SET_OPERATOR'
      payload: string | null
    }
  | {
      type: 'SET_VALUE'
      payload: number
    }

const initialState: State = {
  firstOperand: 0,
  secondOperand: 0,
  operator: null,
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'CLEAR':
      return initialState
    case 'SET_OPERATOR':
      return {
        ...state,
        operator: action.payload,
      }
    case 'SET_VALUE':
      return {
        ...state,
        ...(state.operator === null
          ? { firstOperand: action.payload }
          : { secondOperand: action.payload }),
      }
    case 'COMPUTE':
      return {
        ...state,
        firstOperand: compute(
          state.firstOperand,
          state.secondOperand,
          state.operator,
        ),
        secondOperand: 0,
        operator: action.payload,
      }
    default:
      throw new Error('Unhandled action type')
  }
}

function compute(
  firstOperand: number = 0,
  secondOperand: number = 0,
  operator: string | null,
) {
  if (operator === '+') return firstOperand + secondOperand
  if (operator === '-') return firstOperand - secondOperand
  if (operator === '*') return firstOperand * secondOperand
  if (operator === '/') return firstOperand / secondOperand
  throw new Error('Invalid operator')
}

function useCalculator() {
  const [state, dispatch] = useReducer(reducer, initialState)

  function clear() {
    return dispatch({ type: 'CLEAR' })
  }

  function compute(operator: string | null = null) {
    return dispatch({ type: 'COMPUTE', payload: operator })
  }

  function setOperator(operator: string) {
    if (operator === '=') return compute()
    if (state.operator !== null) return compute(operator)
    return dispatch({ type: 'SET_OPERATOR', payload: operator })
  }

  function setOperand(value: string | number) {
    const isOperatorNull = state.operator === null
    const currentOperand = isOperatorNull
      ? state.firstOperand
      : state.secondOperand

    return dispatch({
      type: 'SET_VALUE',
      payload: Number(`${currentOperand}${value}`),
    })
  }

  return {
    ...state,
    clear,
    setOperator,
    setOperand,
  }
}

export default useCalculator
