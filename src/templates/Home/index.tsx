import { NextSeo } from 'next-seo'

import Base from 'templates/Base'
import { SITE_NAME } from 'pages/_app'

const HomeTemplate = () => {
  return (
    <Base>
      <NextSeo
        title={`${SITE_NAME} :: O Comedouro Postural do seu Pet`}
        description="O Comedouro Postural WOOF Bowl Stand é projetado para cães e gatos, valoriza o design moderno atenuado com base em formas clássicas que se encaixam perfeitamente até em ambientes muito exigentes."
        canonical={`https://woofbowlstand.com.br`}
        openGraph={{
          url: `https://woofbowlstand.com.br`,
          title: `${SITE_NAME} :: O Comedouro Postural do seu Pet`,
          description:
            'O Comedouro Postural WOOF Bowl Stand é projetado para cães e gatos, valoriza o design moderno atenuado com base em formas clássicas que se encaixam perfeitamente até em ambientes muito exigentes.',
          images: [
            {
              url: `${process.env.NEXTAUTH_URL}/img/Thumbnail.png`,
              alt: `${SITE_NAME} :: O Comedouro Postural do seu Pet`
            }
          ]
        }}
      />
    </Base>
  )
}

export default HomeTemplate
