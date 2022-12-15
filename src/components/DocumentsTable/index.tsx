import { RiDownloadLine, RiEyeLine } from 'react-icons/ri'
import * as S from './styles'

export type DocData = {
  name: string
  url: string
}

export type DocumentsProps = {
  items: DocData[]
}

const DocumentsTable = ({ items }: DocumentsProps) => (
  <S.Wrapper>
    <S.Table border={0}>
      <S.Thead>
        <tr>
          <th align="left">Documento</th>
          <th align="right" style={{ width: '10%' }}>
            Ações
          </th>
        </tr>
      </S.Thead>

      <S.Tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td align="right">
              <S.Divisor>
                <RiEyeLine />
                <RiDownloadLine />
              </S.Divisor>
            </td>
          </tr>
        ))}
      </S.Tbody>
    </S.Table>
  </S.Wrapper>
)

export default DocumentsTable
