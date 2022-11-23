import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  color?: 'lightBrown' | 'success'
  fullWidth?: boolean
  minimal?: boolean
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    size = 'medium',
    color = 'lightBrown',
    fullWidth = false,
    minimal = false,
    ...props
  },
  ref
) => (
  <S.Wrapper
    size={size}
    color={color}
    fullWidth={fullWidth}
    minimal={minimal}
    ref={ref}
    {...props}
  >
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)
