export const DateAndTime = (date: string) => {
  const theDate = new Date(date)

  const dateTimeFormat = new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

  const parts = dateTimeFormat.formatToParts(theDate)
  const partValues = parts.map((p) => p.value)

  return `${partValues[0]}${partValues[1]}${partValues[2]}${partValues[3]}${partValues[4]} - ${partValues[6]}h${partValues[7]}${partValues[8]}m`
}
