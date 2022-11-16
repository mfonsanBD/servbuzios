import { InputHTMLAttributes } from 'react'

import * as S from './styles'

type RadioValue = string | ReadonlyArray<string> | number

export type TypeRadioBoxProps = {
  onCheck?: (value?: RadioValue) => void
  label?: string
  labelFor?: string
  value?: RadioValue
  model?: string
  modelType?: string
} & InputHTMLAttributes<HTMLInputElement>

const TypeRadioBox = ({
  label,
  onCheck,
  labelFor = '',
  value,
  model,
  modelType,
  ...props
}: TypeRadioBoxProps) => {
  const onChange = () => {
    !!onCheck && onCheck(value)
  }

  return (
    <S.Wrapper model={model} modelType={modelType} htmlFor={labelFor}>
      <S.Input
        id={labelFor}
        type="radio"
        value={value}
        onChange={onChange}
        {...props}
      />
      {!!label && <S.Label>{label}</S.Label>}
      {!!model && <S.Icon model={model} modelType={modelType} />}
    </S.Wrapper>
  )
}

export default TypeRadioBox
