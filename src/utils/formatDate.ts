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

// "20 de outubro de 2026" — data por extenso, no fuso de Brasília.
export const LongDate = (date: string) => {
  return new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date))
}

// "21 de dez. de 2022" — data curta para listas de documentos.
export const ShortDate = (date: string) => {
  return new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(new Date(date))
}

// "2026-10-20" — valor para o atributo dateTime de <time>.
export const IsoDay = (date: string) => {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(new Date(date))
}
