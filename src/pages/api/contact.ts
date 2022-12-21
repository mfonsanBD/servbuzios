/* eslint-disable @typescript-eslint/no-explicit-any */
import mail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next'

mail.setApiKey(process.env.SENDGRID_API_KEY!)

export default (request: NextApiRequest, response: NextApiResponse) => {
  const body = request.body

  const message = `
    Nome: ${body.name}\r\n
    Telefone: ${body.phone}\r\n
    E-mail: ${body.mail}\r\n
    Endereço: ${body.address}\r\n
    Mensagem: ${body.message}\r\n
  `

  const data = {
    from: 'no-replay@mikedev.com.br',
    to: 'mikewebideia@gmail.com',
    subject: 'Mensagem enviada pelo site da ServBúzios',
    text: message,
    html: message.replace(/\r\n/g, '<br>')
  }

  try {
    mail.send(data)
    response.status(200).json({ status: 'Ok' })
  } catch (error: any) {
    response.status(400).json({ message: error.message })
  }
}
