export type Button = {
  key: string
  displayText: string
  value: string
  type: 'operator' | 'operand'
}

export const BUTTONS: Button[] = [
  {
    key: '7',
    displayText: '7',
    value: '7',
    type: 'operand',
  },
  {
    key: '8',
    displayText: '8',
    value: '8',
    type: 'operand',
  },
  {
    key: '9',
    displayText: '9',
    value: '9',
    type: 'operand',
  },
  {
    key: 'u00f7',
    displayText: '\u00f7',
    value: '/',
    type: 'operator',
  },
  {
    key: '4',
    displayText: '4',
    value: '4',
    type: 'operand',
  },
  {
    key: '5',
    displayText: '5',
    value: '5',
    type: 'operand',
  },
  {
    key: '6',
    displayText: '6',
    value: '6',
    type: 'operand',
  },
  {
    key: 'u00d7',
    displayText: '\u00d7',
    value: '*',
    type: 'operator',
  },
  {
    key: '1',
    displayText: '1',
    value: '1',
    type: 'operand',
  },
  {
    key: '2',
    displayText: '2',
    value: '2',
    type: 'operand',
  },
  {
    key: '3',
    displayText: '3',
    value: '3',
    type: 'operand',
  },
  {
    key: 'u2212',
    displayText: '\u2212',
    value: '-',
    type: 'operator',
  },
  {
    key: '0',
    displayText: '0',
    value: '0',
    type: 'operand',
  },
  {
    key: 'u2219',
    displayText: '\u2219',
    value: '.',
    type: 'operand',
  },
  {
    key: '=',
    displayText: '=',
    value: '=',
    type: 'operator',
  },
  {
    key: 'u002b',
    displayText: '\u002b',
    value: '+',
    type: 'operator',
  },
]
