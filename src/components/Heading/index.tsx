import * as S from './styles'

export type LineColors = 'white' | 'lightBrown'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'dark'
  lineLeft?: boolean
  lineBottom?: boolean
  size?: 'small' | 'medium' | 'huge'
  lineColor?: LineColors
  subtitle?: string
}

const Heading = ({
  children,
  color = 'dark',
  lineLeft = false,
  lineBottom = false,
  size = 'medium',
  lineColor = 'lightBrown'
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    size={size}
    lineColor={lineColor}
  >
    {children}
  </S.Wrapper>
)

export default Heading
