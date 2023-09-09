export type Display = '--' | number

export type Content = 
  {
    inputs: Array<{title: string, placeholder: string}>,
    displays: Array<{title: string, amount: Display}>
  }

export const content:Content = {
  inputs: [
    {
      title: 'DAY',
      placeholder: 'DD'
    },
    {
      title: 'MONTH',
      placeholder: 'MM'
    },
    {
      title: 'YEAR',
      placeholder: 'YYYY'
    }
  ],
  displays: [
    {
      title: 'years',
      amount: '--'
    },
    {
      title: 'months',
      amount: '--'
    },
    {
      title: 'days',
      amount: '--'
    }
  ]
}