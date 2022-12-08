/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Select from 'react-select'
import { Editor } from '@tinymce/tinymce-react'
import React, { FormEvent, useRef, useState } from 'react'

import Button from 'components/Button'
import TextField from 'components/TextField'

import theme from 'styles/theme'

import { SendImageToCloudinary } from 'utils/sendImageToCloudinary'

import * as S from './styles'
import { TbTrash } from 'react-icons/tb'
import Image from 'next/image'

const NoOptionsMessage = () => {
  return (
    <S.NoOptions>
      <S.Message>Nenhuma opção encontrada</S.Message>
    </S.NoOptions>
  )
}

const categories = [
  { value: 1, label: 'Dicas' },
  { value: 2, label: 'Indicações' }
]

const tinyOptions = {
  apiKey: process.env.TINY_API_KEY,
  toolbar:
    'insertfile a11ycheck undo redo | bold italic | forecolor backcolor | template codesample | alignleft aligncenter alignright alignjustify | bullist numlist | link image',
  plugins: [
    'a11ychecker',
    'advcode',
    'advlist',
    'anchor',
    'autolink',
    'codesample',
    'fullscreen',
    'help',
    'image',
    'editimage',
    'tinydrive',
    'lists',
    'link',
    'media',
    'powerpaste',
    'preview',
    'searchreplace',
    'table',
    'template',
    'tinymcespellchecker',
    'visualblocks',
    'wordcount'
  ]
}

const AdminAddPostForm = () => {
  const fileRef: any = useRef(null)

  const [imageSrc, setImageSrc] = useState('')
  const [imageError, serImageError] = useState('')
  const [imageName, setImageName] = useState('')

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [title, setTitle] = useState('')
  const [titleError, setTitleError] = useState('')

  const [contentData, setContentData] = useState('')

  const [category, setCategory] = useState<number>()
  const [categoryError, setCategoryError] = useState('')

  const handleShowNameField = (option: { value: number }) => {
    if (option !== null) {
      setCategory(option.value)
    }
  }

  const handleOnChange = function (changeEvent: any) {
    if (changeEvent.target.files[0]) {
      setImageName(changeEvent.target.files[0].name)
      serImageError('')

      const reader = new FileReader()

      reader.onload = (onLoadEvent: any) => {
        setImageSrc(onLoadEvent.target.result)
      }

      reader.readAsDataURL(changeEvent.target.files[0])
    } else {
      setImageName('')
      setImageSrc('')
      changeEvent.target.value = null
    }
  }

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    if (title === '') {
      setIsLoading(false)
      setTitleError('O campo de título é obrigatório!')
      return
    } else {
      setTitleError('')
    }

    if (category === undefined) {
      setIsLoading(false)
      setCategoryError('O campo de categoria é obrigatório!')
      return
    } else {
      setCategoryError('')
    }

    const data = await SendImageToCloudinary(event)

    if (data === 'erro') {
      serImageError('O campo imagem de destaque é obrigatório!')
    } else {
      serImageError('')
      setImageSrc(data.secure_url)
    }

    if (contentData && imageSrc && title && category) {
      console.log(contentData, imageSrc, title, category)
    }

    setIsLoading(false)
  }

  const handleRemovePreview = () => {
    setImageName('')
    setImageSrc('')
    fileRef.current.value = null
  }

  return (
    <S.Wrapper>
      <S.Title>Adicionar uma Postagem</S.Title>

      <S.Form method="post" onSubmit={handleOnSubmit}>
        <TextField
          label="Título da Postagem:"
          name="title"
          isRequired
          disabled={isLoading}
          placeholder="Digite o melhor título"
          value={title}
          type="text"
          onChange={(v) => setTitle(v.target.value)}
          error={titleError}
        />

        <S.SelectArea>
          <S.Label error={categoryError !== ''}>
            Categoria da Postagem: <span>*</span>
          </S.Label>
          <Select
            options={categories}
            placeholder="Escolha uma categoria"
            isClearable
            menuPlacement="top"
            isDisabled={isLoading}
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
                border:
                  categoryError === '' && categoryError !== undefined
                    ? 'none'
                    : `thin solid ${theme.colors.danger}`,
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
          {!!categoryError && categoryError !== undefined && (
            <S.ErrorMessage>{categoryError}</S.ErrorMessage>
          )}
        </S.SelectArea>

        <S.SelectArea>
          <S.Label>Conteúdo da Postagem:</S.Label>
          <Editor
            disabled={isLoading}
            init={{
              language: 'pt_BR',
              spellchecker_language: 'pt',
              setup: (editor) => {
                editor.on('keyup change', () => {
                  setContentData(editor.getContent())
                })
              }
            }}
            {...tinyOptions}
          />
        </S.SelectArea>

        <S.SelectArea>
          <S.Label error={imageError !== ''}>
            Imagem de Destaque: <span>*</span>
          </S.Label>

          <S.ImageArea>
            <S.InputFileArea>
              <input
                ref={fileRef}
                onChange={handleOnChange}
                type="file"
                name="file"
                accept="image/*"
              />
              <p>
                {imageName
                  ? `Imagem escolhida: ${imageName}`
                  : 'Escolha uma imagem...'}
              </p>
            </S.InputFileArea>

            {imageSrc && (
              <S.ImagePreview>
                <S.DeletePreview onClick={() => handleRemovePreview()}>
                  <TbTrash size={20} />
                </S.DeletePreview>
                <Image src={imageSrc} layout="fill" alt="Preview" />
              </S.ImagePreview>
            )}
          </S.ImageArea>

          {!!imageError && imageError !== '' && (
            <S.ErrorMessage>{imageError}</S.ErrorMessage>
          )}
        </S.SelectArea>

        <Button size="large" color="success">
          Publicar Postagem
        </Button>
      </S.Form>
    </S.Wrapper>
  )
}

export default AdminAddPostForm
