import { GetServerSideProps, GetServerSidePropsContext } from 'next'

import AppTemplate from 'templates/Admin/App'

import protectedRoutes from 'utils/protected-routes'

export default function AppAdmin() {
  return <AppTemplate />
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await protectedRoutes(context)

  if (!session) {
    return { props: {} }
  }

  return {
    props: {}
  }
}
