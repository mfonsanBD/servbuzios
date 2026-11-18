import { FiDownload, FiFileText } from 'react-icons/fi'

import * as S from './styles'

export type DocumentRowProps = {
  titulo: string
  arquivo: string
  date?: string
}

// Linha de documento: ícone, título, data opcional e selo de download do PDF.
const DocumentRow = ({ titulo, arquivo, date }: DocumentRowProps) => (
  <S.Wrapper href={arquivo} target="_blank" rel="noreferrer">
    <S.Tile aria-hidden="true">
      <FiFileText />
    </S.Tile>

    <S.Text>
      <S.Title>{titulo}</S.Title>
      {!!date && <S.Date>{date}</S.Date>}
    </S.Text>

    <S.Pill>
      <FiDownload aria-hidden="true" />
      PDF
    </S.Pill>
  </S.Wrapper>
)

export default DocumentRow
