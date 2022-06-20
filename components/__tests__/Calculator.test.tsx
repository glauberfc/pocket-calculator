import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Calculator from '../Calculator'

describe('Calculator', () => {
  it('should sum two numbers', async () => {
    render(<Calculator />)
    const display = expect(screen.getByLabelText('display'))
    display.toHaveTextContent('0')

    await userEvent.click(screen.getByRole('button', { name: /1/i }))
    display.toHaveTextContent('1')

    await userEvent.click(screen.getByRole('button', { name: /2/i }))
    display.toHaveTextContent('12')

    await userEvent.click(screen.getByRole('button', { name: /\u002b/i }))
    display.toHaveTextContent('12')

    await userEvent.click(screen.getByRole('button', { name: /3/i }))
    display.toHaveTextContent('3')

    await userEvent.click(screen.getByRole('button', { name: /1/i }))
    display.toHaveTextContent('31')

    await userEvent.click(screen.getByRole('button', { name: /=/i }))
    display.toHaveTextContent('43')
  })

  it('should subtract two numbers', async () => {
    render(<Calculator />)
    const display = expect(screen.getByLabelText('display'))
    display.toHaveTextContent('0')

    await userEvent.click(screen.getByRole('button', { name: /5/i }))
    display.toHaveTextContent('5')

    await userEvent.click(screen.getByRole('button', { name: /0/i }))
    display.toHaveTextContent('50')

    await userEvent.click(screen.getByRole('button', { name: /\u2212/i }))
    display.toHaveTextContent('50')

    await userEvent.click(screen.getByRole('button', { name: /1/i }))
    display.toHaveTextContent('1')

    await userEvent.click(screen.getByRole('button', { name: /0/i }))
    display.toHaveTextContent('10')

    await userEvent.click(screen.getByRole('button', { name: /=/i }))
    display.toHaveTextContent('40')
  })

  it('should multiply two numbers', async () => {
    render(<Calculator />)
    const display = expect(screen.getByLabelText('display'))
    display.toHaveTextContent('0')

    await userEvent.click(screen.getByRole('button', { name: /2/i }))
    display.toHaveTextContent('2')

    await userEvent.click(screen.getByRole('button', { name: /0/i }))
    display.toHaveTextContent('20')

    await userEvent.click(screen.getByRole('button', { name: /\u00d7/i }))
    display.toHaveTextContent('20')

    await userEvent.click(screen.getByRole('button', { name: /1/i }))
    display.toHaveTextContent('1')

    await userEvent.click(screen.getByRole('button', { name: /0/i }))
    display.toHaveTextContent('10')

    await userEvent.click(screen.getByRole('button', { name: /=/i }))
    display.toHaveTextContent('200')
  })

  it('should divide two numbers', async () => {
    render(<Calculator />)
    const display = expect(screen.getByLabelText('display'))
    display.toHaveTextContent('0')

    await userEvent.click(screen.getByRole('button', { name: /3/i }))
    display.toHaveTextContent('3')

    await userEvent.click(screen.getByRole('button', { name: /0/i }))
    display.toHaveTextContent('30')

    await userEvent.click(screen.getByRole('button', { name: /\u00f7/i }))
    display.toHaveTextContent('30')

    await userEvent.click(screen.getByRole('button', { name: /1/i }))
    display.toHaveTextContent('1')

    await userEvent.click(screen.getByRole('button', { name: /0/i }))
    display.toHaveTextContent('10')

    await userEvent.click(screen.getByRole('button', { name: /=/i }))
    display.toHaveTextContent('3')
  })

  it('should sum three numbers', async () => {
    render(<Calculator />)
    const display = expect(screen.getByLabelText('display'))
    display.toHaveTextContent('0')

    await userEvent.click(screen.getByRole('button', { name: /1/i }))
    display.toHaveTextContent('1')

    await userEvent.click(screen.getByRole('button', { name: /2/i }))
    display.toHaveTextContent('12')

    await userEvent.click(screen.getByRole('button', { name: /\u002b/i }))
    display.toHaveTextContent('12')

    await userEvent.click(screen.getByRole('button', { name: /3/i }))
    display.toHaveTextContent('3')

    await userEvent.click(screen.getByRole('button', { name: /1/i }))
    display.toHaveTextContent('31')

    await userEvent.click(screen.getByRole('button', { name: /\u002b/i }))
    display.toHaveTextContent('43')

    await userEvent.click(screen.getByRole('button', { name: /5/i }))
    display.toHaveTextContent('5')

    await userEvent.click(screen.getByRole('button', { name: /7/i }))
    display.toHaveTextContent('57')

    await userEvent.click(screen.getByRole('button', { name: /=/i }))
    display.toHaveTextContent('100')
  })

  it('should not break if user clicks the equals button many times', async () => {
    render(<Calculator />)
    const display = expect(screen.getByLabelText('display'))
    display.toHaveTextContent('0')

    await userEvent.click(screen.getByRole('button', { name: /=/i }))
    display.toHaveTextContent('0')

    await userEvent.click(screen.getByRole('button', { name: /=/i }))
    display.toHaveTextContent('0')
  })

  it('should not break if user clicks the sum button many times', async () => {
    render(<Calculator />)
    const display = expect(screen.getByLabelText('display'))
    display.toHaveTextContent('0')

    await userEvent.click(screen.getByRole('button', { name: /1/i }))
    display.toHaveTextContent('1')

    await userEvent.click(screen.getByRole('button', { name: /\u002b/i }))
    display.toHaveTextContent('1')

    await userEvent.click(screen.getByRole('button', { name: /2/i }))
    display.toHaveTextContent('2')

    await userEvent.click(screen.getByRole('button', { name: /\u002b/i }))
    display.toHaveTextContent('3')

    await userEvent.click(screen.getByRole('button', { name: /\u002b/i }))
    display.toHaveTextContent('3')

    await userEvent.click(screen.getByRole('button', { name: /\u002b/i }))
    display.toHaveTextContent('3')
  })

  it('should not break if user clicks the divide button many times', async () => {
    render(<Calculator />)
    const display = expect(screen.getByLabelText('display'))
    display.toHaveTextContent('0')

    await userEvent.click(screen.getByRole('button', { name: /\u00f7/i }))
    display.toHaveTextContent('0')

    await userEvent.click(screen.getByRole('button', { name: /\u00f7/i }))
    display.toHaveTextContent('0')
  })

  it('should not break if user chooses first operand and clicks the divide button many times', async () => {
    render(<Calculator />)
    const display = expect(screen.getByLabelText('display'))
    display.toHaveTextContent('0')

    await userEvent.click(screen.getByRole('button', { name: /2/i }))
    display.toHaveTextContent('2')

    await userEvent.click(screen.getByRole('button', { name: /\u00f7/i }))
    display.toHaveTextContent('2')

    await userEvent.click(screen.getByRole('button', { name: /\u00f7/i }))
    display.toHaveTextContent('2')

    await userEvent.click(screen.getByRole('button', { name: /2/i }))
    display.toHaveTextContent('2')

    await userEvent.click(screen.getByRole('button', { name: /=/i }))
    display.toHaveTextContent('1')
  })
})
