import { NextSeo } from 'next-seo'
import { ToastContainer } from 'react-toastify'
import { FiArrowUpRight } from 'react-icons/fi'
import { TbScale } from 'react-icons/tb'

import AdvogadoCard, { AdvogadoCardProps } from 'components/AdvogadoCard'
import Badge from 'components/Badge'
import Button from 'components/Button'
import { FooterProps } from 'components/Footer'
import Form from 'components/Form'
import PageHeader from 'components/PageHeader'
import { SITE_NAME } from 'pages/_app'
import Base from 'templates/Base'

import * as S from './styles'
import 'react-toastify/dist/ReactToastify.css'

export type JuridicoTemplateProps = {
  advogados: AdvogadoCardProps[]
} & FooterProps

const PROCESS_NUMBER = '0003436-63.2016.8.19.0078'
const PROCESS_URL = `https://www3.tjrj.jus.br/consultaprocessual/#/consultapublica?numProcessoCNJ=${PROCESS_NUMBER}`

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

    <PageHeader
      badge="Assessoria jurídica"
      badgeIcon={<TbScale />}
      title="Jurídico"
      description="Aqui você se informa sobre as ações coletivas do ServBúzios, consulta o andamento dos seus processos e agenda atendimento, presencial ou virtual, com nossos advogados."
    />

    <S.Section>
      <S.Grid>
        <S.Column>
          <S.Dark>
            <Badge inverted icon={<TbScale />}>
              Ação coletiva em andamento
            </Badge>
            <S.DarkTitle>Plano de carreira geral</S.DarkTitle>
            <S.DarkText>
              Acompanhe o processo coletivo do plano de carreira geral no
              Tribunal de Justiça do Estado do Rio de Janeiro.
            </S.DarkText>
            <S.ProcessBox>
              <span>Processo nº</span>
              <S.ProcessNumber>{PROCESS_NUMBER}</S.ProcessNumber>
            </S.ProcessBox>
            <Button
              as="a"
              color="accent"
              size="large"
              href={PROCESS_URL}
              target="_blank"
              rel="noreferrer"
            >
              Consultar andamento no TJRJ
              <FiArrowUpRight aria-hidden="true" />
            </Button>
          </S.Dark>

          <S.Lawyers>
            <S.LawyersTitle>Advogados</S.LawyersTitle>
            {advogados.length ? (
              <S.List>
                {advogados.map((advogado, index) => (
                  <li key={index}>
                    <AdvogadoCard {...advogado} />
                  </li>
                ))}
              </S.List>
            ) : (
              <S.Empty>Nenhum advogado cadastrado no momento.</S.Empty>
            )}
            <S.Note>Atendimento presencial ou virtual, com agendamento.</S.Note>
          </S.Lawyers>
        </S.Column>

        <Form isContact={false} title="Envie sua dúvida ao jurídico" />
      </S.Grid>
    </S.Section>

    <ToastContainer />
  </Base>
)

export default JuridicoTemplate
