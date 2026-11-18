import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { FiArrowRight, FiCheck, FiFileText, FiUser } from 'react-icons/fi'

import Base from 'templates/Base'
import { SITE_NAME } from 'pages/_app'

import Badge from 'components/Badge'
import DirectoryCard, {
  DirectoryCardProps,
  getInitials
} from 'components/DirectoryCard'
import { FooterProps } from 'components/Footer'
import PageHeader from 'components/PageHeader'
import PostsEmpty from 'components/PostsEmpty'

import { SectionTitle } from 'styles/shared'

import * as S from './styles'

export type DiretoriaTemplateProps = {
  peoples: DirectoryCardProps[]
  conselheiros: DirectoryCardProps[]
  presidentePhoto: string | null
} & FooterProps

const DOCUMENTS = [
  {
    href: '/documentos-e-editais#documentos',
    title: 'Estatuto e atas de eleição'
  },
  {
    href: '/documentos-e-editais#editais',
    title: 'Editais de convocação'
  }
]

// "Presidente", "presidente" e "PRESIDENTE" valem; "Vice-presidente" não.
const isPresident = (role: string) =>
  role
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase() === 'presidente'

const DiretoriaTemplate = ({
  peoples,
  conselheiros,
  presidentePhoto,
  sindicatoAddress,
  sindicatoCNPJ,
  sindicatoName,
  email,
  phone,
  redessociais
}: DiretoriaTemplateProps) => (
  <Base
    sindicatoAddress={sindicatoAddress}
    sindicatoCNPJ={sindicatoCNPJ}
    sindicatoName={sindicatoName}
    email={email}
    phone={phone}
    redessociais={redessociais}
  >
    <NextSeo
      title={`${SITE_NAME} :: Diretoria & Conselho`}
      description="Conheça nossa equipe de administração e o conselho do ServBúzios - Sindicato dos Servidores Públicos Municipais de Armação dos Búzios."
      canonical={`https://servbuzios.org.br/diretoria-e-conselho`}
      openGraph={{
        url: `https://servbuzios.org.br/diretoria-e-conselho`,
        title: `${SITE_NAME} :: Diretoria & Conselho`,
        description:
          'Conheça nossa equipe de administração e o conselho do ServBúzios - Sindicato dos Servidores Públicos Municipais de Armação dos Búzios.'
      }}
    />

    <PageHeader
      badge="Gestão do sindicato"
      badgeIcon={<FiUser />}
      title="Diretoria e conselho"
      description="Conheça quem administra o ServBúzios e quem fiscaliza as contas do sindicato."
    />

    <S.Section>
      <S.Stack>
        <SectionTitle>Diretoria executiva</SectionTitle>

        {peoples.length > 0 ? (
          <S.CardsGrid>
            {peoples.map((people, index) => {
              const president = isPresident(people.role)
              return (
                <DirectoryCard
                  key={`${people.name}-${index}`}
                  name={people.name}
                  role={people.role}
                  featured={president}
                  photo={president ? presidentePhoto : null}
                />
              )
            })}
          </S.CardsGrid>
        ) : (
          <PostsEmpty texto="Nenhum componente da diretoria encontrado no momento!" />
        )}
      </S.Stack>
    </S.Section>

    <S.Section>
      <S.Council>
        <S.CouncilIntro>
          <Badge icon={<FiCheck />} inverted>
            Fiscalização
          </Badge>
          <h2>Conselho fiscal</h2>
          <p>
            O conselho fiscal acompanha e fiscaliza as contas e a gestão
            financeira do sindicato.
          </p>
        </S.CouncilIntro>

        {conselheiros.length > 0 ? (
          <S.CouncilList>
            {conselheiros.map((conselheiro, index) => (
              <S.Member key={`${conselheiro.name}-${index}`}>
                <S.MemberInitials aria-hidden="true">
                  {getInitials(conselheiro.name)}
                </S.MemberInitials>
                <div>
                  <h3>{conselheiro.name}</h3>
                  <span>{conselheiro.role}</span>
                </div>
              </S.Member>
            ))}
          </S.CouncilList>
        ) : (
          <S.CouncilEmpty>
            Nenhum componente do conselho encontrado no momento.
          </S.CouncilEmpty>
        )}
      </S.Council>
    </S.Section>

    <S.Section $last>
      <S.Stack>
        <SectionTitle>Documentos da gestão</SectionTitle>

        <S.DocsGrid>
          {DOCUMENTS.map((doc) => (
            <Link key={doc.href} href={doc.href} passHref>
              <S.DocLink>
                <S.DocIcon aria-hidden="true">
                  <FiFileText />
                </S.DocIcon>
                <S.DocText>
                  <strong>{doc.title}</strong>
                  <span>Documentos e editais</span>
                </S.DocText>
                <FiArrowRight aria-hidden="true" />
              </S.DocLink>
            </Link>
          ))}
        </S.DocsGrid>
      </S.Stack>
    </S.Section>
  </Base>
)

export default DiretoriaTemplate
