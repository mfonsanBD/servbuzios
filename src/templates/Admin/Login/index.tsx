import Button from 'components/Button'
import { signIn } from 'next-auth/react'

import * as S from './styles'

const LoginTemplate = () => {
  const handleSignIn = () => {
    signIn('google', { callbackUrl: process.env.NEXTAUTH_URL })
  }
  return (
    <S.Wrapper>
      <Button size="large" onClick={handleSignIn}>
        Login com a conta Google
      </Button>
    </S.Wrapper>
  )
}

export default LoginTemplate
