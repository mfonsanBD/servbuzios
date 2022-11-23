export const formatDate = (date: string) => {
  return new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'numeric'
  }).format(new Date(date))
}

export const formatDateBlog = (date: string) => {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(date))
}
