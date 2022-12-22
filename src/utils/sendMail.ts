/* eslint-disable @typescript-eslint/no-explicit-any */
import emailjs from '@emailjs/browser'

export const SendContactMail = async (data: any, type: string, token: any) => {
  let msg = ''

  const templateParams = {
    name: data.name,
    mail: data.mail,
    phone: data.phone,
    role: data.role,
    message: data.message,
    type,
    'g-recaptcha-response': token
  }

  await emailjs
    .send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY!
    )
    .then((response) => {
      msg = response.text
    })
    .catch((error) => {
      msg = error.text
    })

  return msg
}
