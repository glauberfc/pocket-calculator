import useCalculator from 'hooks/useCalculator'
import { Button, BUTTONS } from 'utils/constants'

export default function Calculator() {
  const { firstOperand, secondOperand, setOperand, setOperator, clear } =
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
        {secondOperand === null ? firstOperand : secondOperand}
      </div>
      <ul role="list" className="grid grid-cols-4 gap-1">
        <li className="col-span-4">
          <button
            className="w-full py-4 px-8 text-2xl text-center rounded-md border border-gray-400 bg-gray-200"
            onClick={clear}
          >
            Clear
          </button>
        </li>
        {BUTTONS.map((item) => {
          return (
            <li key={item.key} className={item.key === '=' ? 'col-span-2' : ''}>
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
