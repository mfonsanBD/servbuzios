import AdvogadoCard, { AdvogadoCardProps } from 'components/AdvogadoCard'
import Button from 'components/Button'
import { FooterProps } from 'components/Footer'
import Form from 'components/Form'
import Heading from 'components/Heading'
import { NextSeo } from 'next-seo'
import { SITE_NAME } from 'pages/_app'
import Base from 'templates/Base'
import { ToastContainer } from 'react-toastify'

import * as S from './styles'
import 'react-toastify/dist/ReactToastify.css'

export type JuridicoTemplateProps = {
  advogados: AdvogadoCardProps[]
} & FooterProps

const JuridicoTemplate = ({
  sindicatoAddress,
  sindicatoCNPJ,
  sindicatoName,
  email,
  phone,
  redessociais,
  advogados
}: JuridicoTemplateProps) => (
  <Base
    sindicatoAddress={sindicatoAddress}
    sindicatoCNPJ={sindicatoCNPJ}
    sindicatoName={sindicatoName}
    email={email}
    phone={phone}
    redessociais={redessociais}
  >
    <NextSeo
      title={`${SITE_NAME} :: Jurídico`}
      description="Nós temos o compromisso de dar todo o aparo jurídico aos nossos associados."
      canonical={`https://servbuzios.org.br/juridico`}
      openGraph={{
        url: `https://servbuzios.org.br/juridico`,
        title: `${SITE_NAME} :: Jurídico`,
        description:
          'Nós temos o compromisso de dar todo o aparo jurídico aos nossos associados.'
      }}
    />

    <S.Wrapper>
      <Heading
        title="Jurídico"
        subtitle="Aqui você se informa sobre as ações coletivas do SERVBÚZIOS e faz consulta nos andamentos de seus processos, além de agendar atendimento, presencial ou virtual com nossos advogados"
        backgroundTitle="Jurídico"
      />

      <Form isContact={false} />
    </S.Wrapper>

    <S.Processo>
      Acompanhe o processo coletivo N°: 0003436-63.2016.8.19.0078
      <br />
      <Button
        as="a"
        href="http://www4.tjrj.jus.br/consultaProcessoWebV2/consultaProc.do?v=2&FLAGNOME=&back=1&tipoConsulta=publica&numProcesso=2016.078.003346-6"
        target="_blank"
        rel="noreferrer"
      >
        Clicando aqui
      </Button>
    </S.Processo>

    <S.AdvogadoSection>
      {advogados.map((advogado, index) => (
        <AdvogadoCard key={index} {...advogado} />
      ))}
    </S.AdvogadoSection>

    <ToastContainer />
  </Base>
)

export default JuridicoTemplate
