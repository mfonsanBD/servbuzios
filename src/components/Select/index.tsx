import Select from 'react-select'
import theme from 'styles/theme'

import * as S from './styles'

const NoOptionsMessage = () => {
  return (
    <S.NoOptions>
      <S.Message>Nenhuma opção encontrada</S.Message>
    </S.NoOptions>
  )
}

export interface OptionProps {
  value: string
  label: string
}

export interface SelectOptionsProps {
  options: OptionProps[]
  name?: string
  label?: string
  placeholder?: string
  isLoading?: boolean
  isDisabled?: boolean
}

const Selection = ({
  options,
  name,
  label,
  isLoading = false,
  isDisabled = false,
  placeholder
}: SelectOptionsProps) => {
  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <Select
        options={options}
        placeholder={placeholder}
        isClearable
        isLoading={isLoading}
        isDisabled={isDisabled}
        components={{ NoOptionsMessage }}
        styles={{
          option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? theme.colors.white : theme.colors.dark,
            padding: 16
          }),
          control: () => ({
            border: 'none',
            display: 'flex',
            cursor: 'pointer',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            minHeight: '39px',
            outline: '0 !important',
            position: 'relative',
            transition: 'all 100ms',
            boxSizing: 'border-box',
            alignItems: 'center',
            backgroundColor: theme.colors.inputBg,
            borderRadius: 3
          })
        }}
        theme={(selectTheme) => ({
          ...selectTheme,
          borderRadius: 4,
          colors: {
            ...selectTheme.colors,
            primary25: theme.colors.light,
            primary: theme.colors.lightBrown
          }
        })}
      />
    </S.Wrapper>
  )
}

export default Selection
