/* eslint-disable @next/next/no-img-element */
import { toast } from 'react-toastify'

import * as S from './styles'
import 'react-toastify/dist/ReactToastify.css'

import { TbTrash, TbEdit } from 'react-icons/tb'
import Button from 'components/Button'

export type AdminPostCardProps = {
  image: string
  title: string
  codigo: string
}

type MsgProps = Pick<AdminPostCardProps, 'title' | 'codigo'>

const AdminPostCard = ({ codigo, image, title }: AdminPostCardProps) => {
  const handleEditPost = (codigo: string) => {
    toast.info(`Código ${codigo} vai ser editado!`, {
      position: toast.POSITION.BOTTOM_CENTER
    })
  }

  const handleDeletePost = async (title: string, codigo: string) => {
    await toast.promise(
      fetch('A_URL'),
      {
        pending: `Deletando o post ${title} ${codigo}!`,
        success: `O post: ${title} foi deletado com sucesso!`,
        error: `O post ${title} não pôde ser deletado!`
      },
      {
        position: toast.POSITION.BOTTOM_CENTER,
        className: 'toast-promise-messages',
        closeOnClick: true,
        draggable: true
      }
    )
  }

  const handleDeleteMessage = (title: string, codigo: string) => {
    toast.error(<Msg title={title} codigo={codigo} />, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: false
    })
  }

  const Msg = ({ title, codigo }: MsgProps) => (
    <S.MessageArea>
      <S.Text>
        Tem certeza que deseja deletar o post: <b>{title}</b>?
      </S.Text>

      <S.ButtunsArea>
        <Button color="inputBg" fullWidth>
          Cancelar
        </Button>
        <Button
          color="danger"
          fullWidth
          onClick={() => handleDeletePost(title, codigo)}
        >
          Sim
        </Button>
      </S.ButtunsArea>
    </S.MessageArea>
  )

  return (
    <S.Wrapper>
      <S.ImageBox>
        <img src={image} alt={title} />
      </S.ImageBox>

      <div>
        <S.Title>{title}</S.Title>
      </div>
      <S.ActionsButtons>
        <TbEdit className="editBtn" onClick={() => handleEditPost(codigo)} />
        <S.Divider />
        <TbTrash
          className="deleteBtn"
          onClick={() => handleDeleteMessage(title, codigo)}
        />
      </S.ActionsButtons>
    </S.Wrapper>
  )
}

export default AdminPostCard
