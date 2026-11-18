import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { FiChevronRight, FiSearch } from 'react-icons/fi'

import Base from 'templates/Base'
import { SITE_NAME } from 'pages/_app'

import Badge from 'components/Badge'
import Button from 'components/Button'
import { FooterProps } from 'components/Footer'
import { MENU_LINKS } from 'components/Menu'

import * as S from './styles'

export type NotFoundTemplateProps = FooterProps

const NotFoundTemplate = ({
  sindicatoAddress,
  sindicatoCNPJ,
  sindicatoName,
  email,
  phone,
  redessociais
}: NotFoundTemplateProps) => (
  <Base
    sindicatoAddress={sindicatoAddress}
    sindicatoCNPJ={sindicatoCNPJ}
    sindicatoName={sindicatoName}
    email={email}
    phone={phone}
    redessociais={redessociais}
  >
    <NextSeo
      title={`${SITE_NAME} :: Página não encontrada`}
      description="Página que mostra que ela não foi encontrada nas rotas do site"
      noindex
    />

    <S.Section>
      <S.Grid>
        <S.Text>
          <Badge icon={<FiSearch />}>Erro 404</Badge>
          <S.Title>Página não encontrada</S.Title>
          <S.Description>
            Parece que a página que você tentou acessar não existe. Volte para a
            página inicial ou escolha um dos caminhos abaixo.
          </S.Description>

          <Link href="/" passHref>
            <Button as="a" size="large">
              Voltar à página inicial
              <FiChevronRight aria-hidden="true" />
            </Button>
          </Link>

          <S.Shortcuts>
            {MENU_LINKS.map((link) => (
              <Link key={link.href} href={link.href} passHref>
                <Button as="a" color="white" size="small">
                  {link.label}
                </Button>
              </Link>
            ))}
          </S.Shortcuts>
        </S.Text>

        <S.Panel>
          <span aria-hidden="true">404</span>
        </S.Panel>
      </S.Grid>
    </S.Section>
  </Base>
)

export default NotFoundTemplate
