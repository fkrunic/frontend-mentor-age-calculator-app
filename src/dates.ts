const isValidYear = (year: number): boolean => {
  const currentYear = new Date().getFullYear()
  return year <= currentYear
}

const isValidMonth = (month: number): boolean => {
  const months = [1,2,3,4,5,6,7,8,9,10,11,12]
  return months.includes(month)
}

const isValidDay = (day: number): boolean => {
  const days = Array(31).fill(0).map((_, i) => i + 1);
  return days.includes(day)
}

const zeroPad = (n: number): string => {
  return n < 10 ? '0' + n : `${n}`
}

const buildDate = (components: {year: number, month: number, day: number}): string => {
  return [
    components.year,
    zeroPad(components.month),
    zeroPad(components.day)
  ].join('-')  
}

const isValidDate = (components: {year: number, month: number, day: number}): boolean => {
  const proposedDate = new Date(buildDate(components))
  return !isNaN(proposedDate.getTime())
}