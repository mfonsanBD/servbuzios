export default {
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://woofbowlstand.com.br',
    site_name: 'WOOF Bowl Stand',
    title: 'WOOF Bowl Stand',
    images: [
      {
        url: `${process.env.NEXTAUTH_URL}/img/Thumbnail.png`,
        width: 1772,
        height: 1772,
        alt: 'WOOF Bowl Stand'
      }
    ]
  },
  twitter: {
    handle: '@MikeFnscdSantos',
    site: '@site',
    cardType: 'summary_large_image'
  }
}
