import clsx from 'clsx'
import useCalculator from 'hooks/useCalculator'
import { Button, BUTTONS } from 'utils/constants'

export default function Calculator() {
  const {
    firstOperand,
    secondOperand,
    operator,
    setOperand,
    setOperator,
    clear,
  } = useCalculator()

  function handleClick(item: Button) {
    if (item.type === 'operator') return setOperator(item.value)

    return setOperand(item.value)
  }

  return (
    <div>
      <div
        className="mb-4 p-4 text-right text-3xl tracking-wider font-semibold rounded-md border-2 border-secondary-600 text-white bg-transparent"
        aria-label="display"
      >
        {secondOperand === null ? firstOperand : secondOperand}
      </div>
      <ul role="list" className="grid grid-cols-4 gap-2">
        <li className="col-span-4">
          <button
            className="w-full py-3 px-8 text-xl text-center rounded-md bg-secondary-600 hover:bg-primary-600 text-white"
            onClick={clear}
          >
            Clear
          </button>
        </li>
        {BUTTONS.map((item) => {
          const isOperand = item.type === 'operand'
          const isOperatorSelected = item.value === operator

          return (
            <li key={item.key}>
              <button
                className={clsx(
                  'w-full py-4 px-8 text-2xl text-center rounded-md',
                  isOperand
                    ? 'text-white bg-primary-400 hover:bg-primary-600'
                    : 'hover:text-white bg-primary-100 hover:bg-primary-400',
                  isOperatorSelected && 'ring-inset ring-4 ring-primary-500',
                )}
                onClick={() => handleClick(item)}
              >
                {item.displayText}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
