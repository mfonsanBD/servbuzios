export const DateAndTime = (date: string) => {
  return new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  }).format(new Date(date))
}

export const NewsDate = (date: string) => {
  return new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  }).format(new Date(date))
}
