import { differenceInDays, differenceInMonths, differenceInYears, add } from 'date-fns'

export type DisplayStatus
  = { kind: 'none' }
  | { kind: 'some', delta: Delta }

interface Delta {
  years: number,
  months: number,
  days: number
}

export type InputStatus
  = { kind: 'not-entered' }
  | { kind: 'valid', component: number }
  | { kind: 'invalid', err: string }

interface State {
  inputs: {
    year: InputStatus,
    month: InputStatus,
    day: InputStatus
  },
  display: DisplayStatus
}

export const initialState: State = {
  inputs: {
    year: { kind: 'not-entered' },
    month: { kind: 'not-entered' },
    day: { kind: 'not-entered' }
  },
  display: { kind: 'none' }
}

const isValidYear = (year: number): boolean => {
  const currentYear = new Date().getFullYear()
  return year <= currentYear
}

const isValidMonth = (month: number): boolean => {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  return months.includes(month)
}

const isValidDay = (day: number): boolean => {
  const days = Array(31).fill(0).map((_, i) => i + 1);
  return days.includes(day)
}

const zeroPad = (n: number): string => {
  return n < 10 ? '0' + n : `${n}`
}

const buildDate = (components: { year: number, month: number, day: number }): string => {
  return [
    components.year,
    zeroPad(components.month),
    zeroPad(components.day)
  ].join('-')
}

const emptyFieldErr = 'This field is required'
const intFieldErr = 'A whole number is needed'

const yearStatus = (input: string): InputStatus => {
  if (input === '') {
    return { kind: 'invalid', err: emptyFieldErr }
  } else {
    const year = Number(input)
    if (isNaN(year)) {
      return { kind: 'invalid', err: intFieldErr }
    } else if (!isValidYear(year)) {
      return { kind: 'invalid', err: 'Must be in the past' }
    } else {
      return { kind: 'valid', component: year }
    }
  }
}

const monthStatus = (input: string): InputStatus => {
  if (input === '') {
    return { kind: 'invalid', err: emptyFieldErr }
  } else {
    const month = Number(input)
    if (isNaN(month)) {
      return { kind: 'invalid', err: intFieldErr }
    } else if (!isValidMonth(month)) {
      return { kind: 'invalid', err: 'Must be a valid month' }
    } else {
      return { kind: 'valid', component: month }
    }
  }
}

const dayStatus = (input: string): InputStatus => {
  if (input === '') {
    return { kind: 'invalid', err: emptyFieldErr }
  } else {
    const day = Number(input)
    if (isNaN(day)) {
      return { kind: 'invalid', err: intFieldErr }
    } else if (!isValidDay(day)) {
      return { kind: 'invalid', err: 'Must be a valid day' }
    } else {
      return { kind: 'valid', component: day }
    }
  }
}

const componentsBetween = (future: Date, past: Date): Delta => {
  const yearsDelta = differenceInYears(future, past)
  const yearStep = add(past, { years: yearsDelta })
  const monthsDelta = differenceInMonths(future, yearStep)
  const monthStep = add(yearStep, { months: monthsDelta })
  const dayDelta = differenceInDays(future, monthStep)
  return {
    years: yearsDelta,
    months: monthsDelta,
    days: dayDelta
  }
}

export const determineState = (input: { day: string, month: string, year: string }): State => {
  const firstPassUpdate = {
    year: yearStatus(input.year),
    month: monthStatus(input.month),
    day: dayStatus(input.day)
  }

  if (firstPassUpdate.year.kind === 'valid' && firstPassUpdate.month.kind === 'valid' && firstPassUpdate.day.kind === 'valid') {
    const dateString = buildDate({
      year: firstPassUpdate.year.component,
      month: firstPassUpdate.month.component,
      day: firstPassUpdate.day.component
    })

    const proposedDate = new Date(dateString)

    if (isNaN(proposedDate.getTime())) {

      // Override the error messages for all components since an invalid date was produced. 
      const secondPassUpdate = {
        year: { kind: 'invalid', err: '' } as InputStatus,
        month: { kind: 'invalid', err: '' } as InputStatus,
        day: { kind: 'invalid', err: 'Must be a valid date' } as InputStatus
      }
      return {
        inputs: secondPassUpdate,
        display: { kind: 'none' }
      }
    } else {
      const currentDate = new Date()
      return {
        inputs: firstPassUpdate,
        display: {
          kind: 'some',
          delta: componentsBetween(currentDate, proposedDate)
        }
      }
    }

  } else {
    return {
      inputs: firstPassUpdate,
      display: { kind: 'none' }
    }
  }
}