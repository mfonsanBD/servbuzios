import { useSession } from 'next-auth/react'
import { NextSeo } from 'next-seo'
import { SITE_NAME } from 'pages/_app'

import AdminBase from '../Base'

const AppTemplate = () => {
  const { data } = useSession()

  return (
    <AdminBase username={`${data?.user?.name}`} photo={`${data?.user?.image}`}>
      <NextSeo title={`${SITE_NAME} :: Postagens no Blog`} />
      <h2>Postagens no Blog</h2>
    </AdminBase>
  )
}

export default AppTemplate
