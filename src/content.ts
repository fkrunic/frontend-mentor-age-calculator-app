export type Display = '--' | number

export type Content = 
  {
    inputs: Array<{title: string, placeholder: string}>,
    displays: {
      years: Display,
      months: Display, 
      days: Display
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
    years: '--',
    months: '--',
    days: '--'
  }
}