import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'

import LoginTemplate from 'templates/Admin/Login'

export default function AdminLogin() {
  return <LoginTemplate />
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  if (session) {
    return {
      redirect: {
        destination: '/admin/app',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
