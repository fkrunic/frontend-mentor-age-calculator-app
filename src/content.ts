export type Display = '--' | number

export type Content = 
  {
    inputs: Array<{title: string, placeholder: string}>,
    displays: {
      year: Display,
      month: Display, 
      day: Display
    }
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
  displays: {
    year: '--',
    month: '--',
    day: '--'
  }
}