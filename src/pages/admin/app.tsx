import { GetServerSideProps, GetServerSidePropsContext } from 'next'

import AppTemplate, { AdminTemplateProps } from 'templates/Admin/App'

import protectedRoutes from 'utils/protected-routes'

export default function AppAdmin(props: AdminTemplateProps) {
  return <AppTemplate {...props} />
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await protectedRoutes(context)

  if (!session) {
    return { props: {} }
  }

  return {
    props: {
      session,
      posts: [
        { image: '/img/about-image.jpg', title: 'Título 01', codigo: '123' },
        { image: '/img/about-image.jpg', title: 'Título 02', codigo: '234' },
        { image: '/img/about-image.jpg', title: 'Título 03', codigo: '345' }
      ]
    }
  }
}
