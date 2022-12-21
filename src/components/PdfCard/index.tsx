/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import * as S from './styles'

export type PdfCardProps = {
  imagem: string
  titulo: string
  arquivo: string
}

const PdfCard = ({ arquivo, titulo, imagem }: PdfCardProps) => (
  <S.Wrapper>
    <S.Title>{titulo}</S.Title>

    <Link href={arquivo} passHref>
      <a target="_blank">
        <S.ImageBox>
          <img src={imagem} alt={titulo} />
        </S.ImageBox>
      </a>
    </Link>
  </S.Wrapper>
)

export default PdfCard
