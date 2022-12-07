import { useState, InputHTMLAttributes } from 'react'

import * as S from './styles'

export type TextFieldProps = {
  onInputChange?: (value?: string) => void
  label?: string
  initialValue?: string
  disabled?: boolean
  isRequired?: boolean
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  label,
  name,
  initialValue = '',
  error,
  disabled = false,
  isRequired = false,
  onInputChange,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && (
        <S.Label htmlFor={name}>
          {label} {isRequired && <span>*</span>}
        </S.Label>
      )}
      <S.InputWrapper>
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>
      {!!error && error !== '' && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField
