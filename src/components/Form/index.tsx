/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { toast } from 'react-toastify'
import ReCAPTCHA from 'react-google-recaptcha'
import { FiArrowRight } from 'react-icons/fi'

import TextField from 'components/TextField'

import * as S from './styles'

import { FieldErrors, ContactForm } from 'utils/validations'
import Button from 'components/Button'
import { SendContactMail } from 'utils/sendMail'

export type FormProps = {
  isContact: boolean
  title?: string
}

const Form = ({ isContact, title }: FormProps) => {
  const [loading, setLoading] = useState(false)
  const [token, setToken] = useState<string | null>(null)
  const [fieldError, setFieldError] = useState<FieldErrors>({})

  const [message, setMessage] = useState<any>()

  const [values, setValues] = useState({
    name: '',
    mail: '',
    phone: '',
    role: ''
  })

  const handleTokenChange = (value: any) => {
    setToken(value)
  }

  const handleMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value)
  }

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    setLoading(true)

    const errors = ContactForm(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    const formData = {} as any

    Array.from(event.currentTarget.elements).forEach((field: any) => {
      formData[field.name] = field.value
    })

    if (token !== null) {
      if (isContact) {
        const emailIsSend: string | any = await SendContactMail(
          formData,
          'Contato',
          token
        )

        if (emailIsSend === 'OK') {
          setValues({
            name: '',
            mail: '',
            phone: '',
            role: ''
          })
          setMessage('')

          toast.success(
            'E-mail enviado com sucesso! Em breve responderemos sua mensagem.',
            {
              position: toast.POSITION.BOTTOM_CENTER
            }
          )
        } else {
          toast.error(emailIsSend, {
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } else {
        const emailIsSend = await SendContactMail(formData, 'Jurídica', token)

        if (emailIsSend === 'OK') {
          setValues({
            name: '',
            mail: '',
            phone: '',
            role: ''
          })
          setMessage('')

          toast.success(
            'E-mail enviado com sucesso! Em breve responderemos sua mensagem.',
            {
              position: toast.POSITION.BOTTOM_CENTER
            }
          )
        } else {
          toast.error(emailIsSend, {
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      }
    } else {
      toast.error('A marcação de "Não sou um robô" é obrigatório!', {
        position: toast.POSITION.BOTTOM_CENTER
      })
    }

    setLoading(false)
  }

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      {!!title && <S.Title>{title}</S.Title>}

      <S.FormGroup>
        <TextField
          label="Nome completo"
          name="name"
          value={values.name}
          placeholder="João da Silva"
          type="text"
          onInputChange={(v) => handleInput('name', v!)}
          error={fieldError?.name}
          disabled={loading}
        />
        <TextField
          label="E-mail"
          name="mail"
          value={values.mail}
          placeholder="joaodasilva@gmail.com"
          type="text"
          onInputChange={(v) => handleInput('mail', v!)}
          error={fieldError?.mail}
          disabled={loading}
        />
      </S.FormGroup>
      <S.FormGroup>
        <TextField
          label="Telefone"
          name="phone"
          value={values.phone}
          placeholder="(21) 97480-4758"
          type="text"
          onInputChange={(v) => handleInput('phone', v!)}
          error={fieldError?.phone}
          disabled={loading}
        />
        <TextField
          label="Cargo"
          name="role"
          value={values.role}
          placeholder="Informe seu cargo ocupado"
          type="text"
          onInputChange={(v) => handleInput('role', v!)}
          error={fieldError?.role}
          disabled={loading}
        />
      </S.FormGroup>

      <S.TextSection disabled={loading}>
        <S.Label htmlFor="message">Mensagem</S.Label>
        <S.Textarea
          id="message"
          name="message"
          value={message}
          placeholder="Digite sua mensagem aqui..."
          onChange={handleMessage}
          cols={30}
          rows={10}
          disabled={loading}
        />
      </S.TextSection>

      <S.Captcha>
        <ReCAPTCHA
          onChange={(v) => handleTokenChange(v!)}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY!}
        />
      </S.Captcha>

      <S.ButtonArea>
        <Button type="submit" size="large" disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar mensagem'}
          {!loading && <FiArrowRight aria-hidden="true" />}
        </Button>
        <S.Hint>Em breve responderemos sua mensagem.</S.Hint>
      </S.ButtonArea>
    </S.Wrapper>
  )
}

export default Form
