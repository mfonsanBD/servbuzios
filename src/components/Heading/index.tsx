import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'lightBrown' | 'dark'
  size?: 'small' | 'medium' | 'huge'
  align?: 'center' | 'left'
  subtitle?: string
}

const Heading = ({
  children,
  color = 'lightBrown',
  size = 'medium',
  align = 'left'
}: HeadingProps) => (
  <S.Wrapper color={color} size={size} align={align}>
    {children}
  </S.Wrapper>
)

export default Heading
