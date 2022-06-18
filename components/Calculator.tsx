import useCalculator from 'hooks/useCalculator'
import { Button, BUTTONS } from 'utils/constants'

export default function Calculator() {
  const { firstOperand, secondOperand, setOperand, setOperator } =
    useCalculator()

  function handleClick(item: Button) {
    if (item.type === 'operator') return setOperator(item.value)

    return setOperand(item.value)
  }

  return (
    <div>
      <div
        className="mb-4 p-4 text-right rounded-md border border-gray-400 bg-white"
        aria-label="display"
      >
        {secondOperand > 0 ? secondOperand : firstOperand}
      </div>
      <ul role="list" className="grid grid-cols-4 gap-1">
        {BUTTONS.map((item) => {
          return (
            <li key={item.key}>
              <button
                className="w-full py-4 px-8 text-2xl text-center rounded-md border border-gray-400 bg-gray-200"
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