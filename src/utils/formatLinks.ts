export const FormatWhatsAppLink = (whatsapp: string) => {
  return `https://wa.me/55${whatsapp
    .replace('(', '')
    .replace(')', '')
    .replace(' ', '')
    .replace('-', '')}`
}

export const FormatEmailLink = (email: string) => {
  return `mailto:${email}`
}
