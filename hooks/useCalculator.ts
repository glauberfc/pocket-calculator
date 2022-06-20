import { useReducer } from 'react'
import { evaluate } from 'mathjs'

type State = {
  firstOperand: string
  secondOperand: string | null
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
      payload: string
    }
  | {
      type: 'SET_VALUE'
      payload: string
    }

const initialState: State = {
  firstOperand: '0',
  secondOperand: null,
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
        firstOperand: String(
          evaluate(
            `${state.firstOperand}${state.operator}${state.secondOperand}`,
          ),
        ),
        secondOperand: null,
        operator: action.payload,
      }
    default:
      throw new Error('Unhandled action type')
  }
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
    if (state.operator === null)
      return dispatch({ type: 'SET_OPERATOR', payload: operator })

    if (state.secondOperand === null) return

    if (operator === '=') return compute()

    return compute(operator)
  }

  function setOperand(value: string) {
    const isOperatorNull = state.operator === null
    const currentOperand = isOperatorNull
      ? state.firstOperand
      : state.secondOperand

    return dispatch({
      type: 'SET_VALUE',
      payload: currentOperand === null ? value : currentOperand + value,
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
