/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState } from 'react'
import { NextSeo } from 'next-seo'

import {
  MdOutlineMailOutline,
  MdOutlinePhone,
  MdOutlinePinDrop
} from 'react-icons/md'

import Base from 'templates/Base'
import Heading from 'components/Heading'
import TitleArea from 'components/TitleArea'
import TextField from 'components/TextField'

import * as S from './styles'

import { SITE_NAME } from 'pages/_app'
import { FieldErrors } from 'utils/validations'
import Button from 'components/Button'

const ContatoTemplate = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({
    mome: '',
    email: '',
    telephone: '',
    message: ''
  })

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  return (
    <Base>
      <NextSeo
        title={`${SITE_NAME} :: Entre em Contato`}
        description="Entre em contato com a gente para criar o Comedouro Postural do seu Aumigo"
        canonical={`https://woofbowlstand.com.br/contato`}
        openGraph={{
          url: `https://woofbowlstand.com.br/contato`,
          title: `${SITE_NAME} :: Entre em Contato`,
          description:
            'Entre em contato com a gente para criar o Comedouro Postural do seu Aumigo'
        }}
      />

      <TitleArea title="Contato" />

      <S.Wrapper>
        <S.ContactLeft>
          <Heading size="huge">Envie sua Mensagem</Heading>

          <S.Form>
            <TextField
              name="name"
              label="Nome Completo"
              placeholder="Digite seu nome completo"
              type="text"
              error={fieldError?.name}
              onInputChange={(v) => handleInput('name', v!)}
            />
            <TextField
              name="telephone"
              label="Telefone"
              placeholder="Insira seu telefone para contato"
              type="text"
              error={fieldError?.telephone}
              onInputChange={(v) => handleInput('telephone', v!)}
            />

            <S.TextAreaField>
              <label htmlFor="message">Mensagem</label>
              <textarea id="message" name="message" rows={4} cols={50} />
            </S.TextAreaField>

            <Button>Enviar Mensagem</Button>
          </S.Form>
        </S.ContactLeft>

        <S.ContactRight>
          <S.ContactBox
            href="https://api.whatsapp.com/send?phone=5521969572953"
            target="_blank"
          >
            <MdOutlinePhone size={25} />
            <p>(21) 96957-2953</p>
          </S.ContactBox>
          <S.ContactBox
            href="mailto:contato@woofbowlstand.com.br"
            target="_blank"
          >
            <MdOutlineMailOutline size={25} />
            <p>contato@woofbowlstand.com.br</p>
          </S.ContactBox>
          <S.ContactBox
            href="https://www.google.com/maps/place/R.+Prof.+Eur%C3%ADco+Rab%C3%AAlo+-+Maracan%C3%A3,+Rio+de+Janeiro+-+RJ,+20271-150/@-22.912238,-43.230535,16z/data=!4m5!3m4!1s0x997e5c59580343:0xee230f06897df6bf!8m2!3d-22.9127135!4d-43.2304898?hl=pt-BR"
            target="_blank"
          >
            <MdOutlinePinDrop size={25} />
            <p>Maracanã - RJ - 20271-150</p>
          </S.ContactBox>
        </S.ContactRight>
      </S.Wrapper>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.030849820664!2d-43.23272418560291!3d-22.91223294382438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e5e871fc755%3A0x7446c393a02abaaf!2sMaracan%C3%A3%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020271-150!5e0!3m2!1spt-BR!2sbr!4v1667363911698!5m2!1spt-BR!2sbr"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Base>
  )
}

export default ContatoTemplate
