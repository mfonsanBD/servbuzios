/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState } from 'react'
import Select from 'react-select'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/dist/client/router'
import { SITE_NAME } from 'pages/_app'

import Base from 'templates/Base'

import Button from 'components/Button'
import Heading from 'components/Heading'
import TitleArea from 'components/TitleArea'
import TextField from 'components/TextField'
import SizeRadioBox from 'components/SizeRadioBox'
import TypeRadioBox, { TypeRadioBoxProps } from 'components/TypeRadioBox'

import * as S from './styles'
import theme from 'styles/theme'

import { FieldErrors } from 'utils/validations'
import {
  DefineCurvePrice,
  DefineFlatPrice,
  DefineSumPriceCurve
} from 'utils/definePrice'

const NoOptionsMessage = () => {
  return (
    <S.NoOptions>
      <S.Message>Nenhuma opção encontrada</S.Message>
    </S.NoOptions>
  )
}

const nomeDoPet = [
  { value: 'sim', label: 'Sim' },
  { value: 'nao', label: 'Não' }
]

const personalizacao = [
  { value: 'nenhuma', label: 'Nenhuma' },
  { value: 'total', label: 'Total' },
  { value: 'parcial', label: 'Parcial' }
]

const tipoPersonalizacao = [
  { value: 'nenhuma', label: 'Nenhuma' },
  { value: 'icone', label: 'Ícone' },
  { value: 'imagem', label: 'Imagem' },
  { value: 'tema', label: 'Tema' }
]

export type ProdutoTemplateProps = {
  types: TypeRadioBoxProps[]
}

const ProdutoTemplate = ({ types }: ProdutoTemplateProps) => {
  const router = useRouter()

  const pageTitle =
    router.route === '/modelo-flat' ? 'Modelo Flat' : 'Modelo Curve'

  const model = router.route === '/modelo-flat' ? 'flat' : 'curve'

  const [productPrice, setProductPrice] = useState<number | string>(0)

  const [loading, setLoading] = useState(false)
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({ quantidade: '', nome: '', tema: '' })

  const [nomePetIsShow, setNomePetIsShow] = useState(false)
  const [quantidadeIsShow, setQuantidadeIsShow] = useState(false)
  const [temaIsShow, setTemaIsShow] = useState(false)

  const [campoTipoComedouro, setCampoTipoComedouro] = useState('')
  const [campoTamanhoComedouro, setCampoTamanhoComedouro] = useState('')
  const [campoNome, setCampoNome] = useState('')
  const [campoTipoPersonalizacao, setCampoTipoPersonalizacao] = useState('')
  const [campoMostrarNoComendouro, setCampoMostrarNoComendouro] = useState('')

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    // setLoading(true)

    // const errors = modeloForm(values)

    // if (Object.keys(errors).length) {
    //   setFieldError(errors)
    //   setLoading(false)
    //   return
    // }

    // setFieldError({})
    // setLoading(false)
  }

  const handleTypeValue = (type: string) => {
    setCampoTipoComedouro(type)

    if (campoTamanhoComedouro === '') {
      setProductPrice(0)
    } else {
      if (model === 'flat') {
        setProductPrice(DefineFlatPrice(type, campoTamanhoComedouro))
      } else {
        setProductPrice(DefineCurvePrice(type, campoTamanhoComedouro))
      }
    }

    if (type === 'Mais') {
      setProductPrice('Consultar')
      setQuantidadeIsShow(true)
    } else {
      setQuantidadeIsShow(false)
    }
  }

  const handleComedouroSize = (size: string) => {
    setCampoTamanhoComedouro(size)

    if (campoTipoComedouro === '') {
      setProductPrice(0)
    } else if (campoTipoComedouro === 'Mais') {
      setProductPrice('Consultar')
    } else {
      if (model === 'flat') {
        setProductPrice(DefineFlatPrice(campoTipoComedouro, size))
      } else {
        setProductPrice(DefineCurvePrice(campoTipoComedouro, size))
      }
    }
  }

  const handleShowNameField = (option: { value: string; label: string }) => {
    if (option !== null) {
      setCampoNome(option.label)

      if (option.value === 'sim') {
        setNomePetIsShow(true)
      } else {
        setNomePetIsShow(false)
      }
    } else {
      setNomePetIsShow(false)
    }
  }

  const handleChangePersonalizationType = (option: {
    value: string
    label: string
  }) => {
    if (option !== null) {
      setCampoTipoPersonalizacao(option.label)

      if (model === 'curve') {
        setProductPrice(
          DefineSumPriceCurve(productPrice, campoTamanhoComedouro, option.value)
        )
      }
    }
  }

  const handleShowThemeField = (option: { value: string; label: string }) => {
    if (option !== null) {
      setCampoMostrarNoComendouro(option.label)

      if (option.value === 'tema') {
        setTemaIsShow(true)
      } else {
        setTemaIsShow(false)
      }
    } else {
      setTemaIsShow(false)
    }
  }

  return (
    <Base>
      <NextSeo
        title={`${SITE_NAME} :: ${pageTitle}`}
        description={`Modelo`}
        canonical={`https://woofbowlstand.com.br/${router.route}`}
        openGraph={{
          url: `https://woofbowlstand.com.br/${router.route}`,
          title: `${SITE_NAME} :: ${pageTitle}`,
          description: `Modelo`
        }}
      />

      <TitleArea title={pageTitle} />

      <S.Wrapper>
        <S.FormSection>
          <Heading color="dark" align="center">
            Monte o Seu Comedouro
          </Heading>

          <S.FormArea>
            <form onSubmit={handleSubmit}>
              <S.LeftArea>
                <S.TypesArea>
                  <S.Label>Tipo de Comedouro:</S.Label>
                  <S.Types>
                    {types.map((type, index) => (
                      <TypeRadioBox
                        key={index}
                        label={type.label}
                        labelFor={type.labelFor}
                        id={type.labelFor}
                        name="type"
                        value={type.label}
                        model={type.model}
                        modelType={type.modelType}
                        onChange={() => handleTypeValue(type.label!)}
                      />
                    ))}
                  </S.Types>
                </S.TypesArea>

                {quantidadeIsShow && (
                  <TextField
                    label="Quantidade de Pote:"
                    name="quantidade"
                    placeholder="Digite a quantidade de potes"
                    type="text"
                    onInputChange={(v) => handleInput('quantidade', v!)}
                    error={fieldError?.quantidade}
                  />
                )}

                <S.SizesArea>
                  <S.Label>Tamanho do Comedouro:</S.Label>
                  <S.Sizes>
                    <SizeRadioBox
                      label="P"
                      labelFor="p"
                      id="p"
                      name="size"
                      value="P"
                      desc="Até 20cm de altura"
                      onChange={() => handleComedouroSize('P')}
                    />
                    <SizeRadioBox
                      label="M"
                      labelFor="m"
                      id="m"
                      name="size"
                      value="M"
                      desc="Até 25cm de altura"
                      onChange={() => handleComedouroSize('M')}
                    />
                    <SizeRadioBox
                      label="G"
                      labelFor="g"
                      id="g"
                      name="size"
                      value="G"
                      desc="Até 30cm de altura"
                      onChange={() => handleComedouroSize('G')}
                    />
                    <SizeRadioBox
                      label="GG"
                      labelFor="gg"
                      id="gg"
                      name="size"
                      value="GG"
                      desc="Até 35cm de altura"
                      onChange={() => handleComedouroSize('GG')}
                    />
                    <SizeRadioBox
                      label="XG"
                      labelFor="xg"
                      id="xg"
                      name="size"
                      value="XG"
                      desc="Até 40cm de altura"
                      onChange={() => handleComedouroSize('XG')}
                    />
                  </S.Sizes>
                </S.SizesArea>

                <S.SelectArea>
                  <S.Label>Personalizar com o Nome do Pet:</S.Label>
                  <Select
                    options={nomeDoPet}
                    placeholder="Mostrar nome do pet?"
                    isClearable
                    menuPlacement="top"
                    isDisabled={loading}
                    components={{ NoOptionsMessage }}
                    styles={{
                      option: (provided, state) => ({
                        ...provided,
                        color: state.isSelected
                          ? theme.colors.white
                          : theme.colors.dark,
                        padding: 16
                      }),
                      control: () => ({
                        border: 'none',
                        display: 'flex',
                        cursor: 'pointer',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        minHeight: '45px',
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
                    onChange={(v) => handleShowNameField(v!)}
                  />
                </S.SelectArea>

                {nomePetIsShow && (
                  <TextField
                    label="Nome do Pet:"
                    name="nome"
                    placeholder="Digite o nome do seu pet"
                    type="text"
                    onInputChange={(v) => handleInput('nome', v!)}
                    error={fieldError?.nome}
                  />
                )}

                <S.SelectArea>
                  <S.Label>Tipo de Personalização:</S.Label>
                  <Select
                    options={personalizacao}
                    placeholder="Qual o tipo de personalização?"
                    isClearable
                    menuPlacement="top"
                    isDisabled={loading}
                    components={{ NoOptionsMessage }}
                    styles={{
                      option: (provided, state) => ({
                        ...provided,
                        color: state.isSelected
                          ? theme.colors.white
                          : theme.colors.dark,
                        padding: 16
                      }),
                      control: () => ({
                        border: 'none',
                        display: 'flex',
                        cursor: 'pointer',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        minHeight: '45px',
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
                    onChange={(v) => handleChangePersonalizationType(v!)}
                  />
                </S.SelectArea>

                <S.SelectArea>
                  <S.Label>Mostrar no Comedouro:</S.Label>
                  <Select
                    options={tipoPersonalizacao}
                    placeholder="O que vai ser mostrado?"
                    isClearable
                    menuPlacement="top"
                    isDisabled={loading}
                    components={{ NoOptionsMessage }}
                    styles={{
                      option: (provided, state) => ({
                        ...provided,
                        color: state.isSelected
                          ? theme.colors.white
                          : theme.colors.dark,
                        padding: 16
                      }),
                      control: () => ({
                        border: 'none',
                        display: 'flex',
                        cursor: 'pointer',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        minHeight: '45px',
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
                    onChange={(v) => handleShowThemeField(v!)}
                  />
                </S.SelectArea>

                {temaIsShow && (
                  <TextField
                    label="Tema para ser Mostrado no Comedouro:"
                    name="tema"
                    placeholder="Digite o tema"
                    type="text"
                    onInputChange={(v) => handleInput('tema', v!)}
                    error={fieldError?.tema}
                  />
                )}
              </S.LeftArea>

              <S.RightArea>
                <S.ImageBox>
                  <img src="/img/preview.jpg" alt="Preview" />
                </S.ImageBox>

                <S.InfosArea>
                  <S.Info>* Este orçamento tem validade de 05 dias.</S.Info>
                  <S.PriceAndButton>
                    {typeof productPrice === 'number' ? (
                      <>
                        <S.Price>
                          <S.Sifrao>R$</S.Sifrao>
                          <S.Amount>{productPrice},00</S.Amount>
                        </S.Price>

                        <Button
                          fullWidth
                          color="success"
                          size="large"
                          type="submit"
                          disabled={productPrice === 0}
                        >
                          Comprar Agora
                        </Button>
                      </>
                    ) : (
                      <Button
                        fullWidth
                        color="success"
                        size="large"
                        type="submit"
                      >
                        {productPrice}
                      </Button>
                    )}
                  </S.PriceAndButton>
                </S.InfosArea>
              </S.RightArea>
            </form>
          </S.FormArea>
        </S.FormSection>
      </S.Wrapper>
    </Base>
  )
}

export default ProdutoTemplate
