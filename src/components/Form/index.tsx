/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'

import TextField from 'components/TextField'

import * as S from './styles'

import { FieldErrors, ContactForm } from 'utils/validations'
import Button from 'components/Button'
import { SendContactMail } from 'utils/sendMail'

export type FormProps = {
  isContact: boolean
}

const Form = ({ isContact }: FormProps) => {
  const [loading, setLoading] = useState(false)
  const [fieldError, setFieldError] = useState<FieldErrors>({})

  const [message, setMessage] = useState<any>()

  const [values, setValues] = useState({
    name: '',
    mail: '',
    phone: '',
    address: ''
  })

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

    await SendContactMail(formData)

    if (isContact) {
      alert('Página do Contato')
    } else {
      alert('Página do Jurídico')
    }

    setLoading(false)
  }

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <S.FormGroup>
        <TextField
          label="Nome Completo"
          name="name"
          placeholder="João da Silva"
          type="text"
          onInputChange={(v) => handleInput('name', v!)}
          error={fieldError?.name}
          disabled={loading}
        />
        <TextField
          label="E-mail"
          name="mail"
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
          placeholder="(21) 97480-4758"
          type="text"
          onInputChange={(v) => handleInput('phone', v!)}
          error={fieldError?.phone}
          disabled={loading}
        />
        <TextField
          label="Endereço"
          name="address"
          placeholder="Estrada da Usina - Armação dos Búzios, RJ - 28950000"
          type="text"
          onInputChange={(v) => handleInput('address', v!)}
          error={fieldError?.address}
          disabled={loading}
        />
      </S.FormGroup>

      <S.TextSection disabled={loading}>
        <S.Label>Mensagem</S.Label>
        <S.Textarea
          name="message"
          value={message}
          placeholder="Digite sua mensagem aqui..."
          onChange={handleMessage}
          cols={30}
          rows={10}
          disabled={loading}
        />
      </S.TextSection>

      <S.ButtonArea>
        <Button type="submit" disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar Mensagem'}
        </Button>
      </S.ButtonArea>
    </S.Wrapper>
  )
}

export default Form
