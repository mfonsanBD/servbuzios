import { InputHTMLAttributes } from 'react'

import * as S from './styles'

type RadioValue = string | ReadonlyArray<string> | number

export type SizeRadioBoxProps = {
  onCheck?: (value?: RadioValue) => void
  label?: string
  labelFor?: string
  value?: RadioValue
  desc?: string
} & InputHTMLAttributes<HTMLInputElement>

const SizeRadioBox = ({
  label,
  desc,
  onCheck,
  labelFor = '',
  value,
  ...props
}: SizeRadioBoxProps) => {
  const onChange = () => {
    !!onCheck && onCheck(value)
  }
  return (
    <S.Wrapper htmlFor={labelFor}>
      <S.Input
        id={labelFor}
        type="radio"
        value={value}
        onChange={onChange}
        {...props}
      />
      {!!label && <S.Label>{label}</S.Label>}
      {!!desc && <S.Description>{desc}</S.Description>}
    </S.Wrapper>
  )
}

export default SizeRadioBox
