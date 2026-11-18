import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import * as S from './styles'

export type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

// 1ª, última, atual e uma vizinha de cada lado; `null` marca um salto (reticências)
const getPages = (currentPage: number, totalPages: number) => {
  const wanted = new Set([
    1,
    totalPages,
    currentPage - 1,
    currentPage,
    currentPage + 1
  ])
  const sorted = Array.from(wanted)
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((a, b) => a - b)

  const items: (number | null)[] = []
  sorted.forEach((page, index) => {
    if (index > 0 && page - sorted[index - 1] > 1) items.push(null)
    items.push(page)
  })
  return items
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange
}: PaginationProps) => {
  if (totalPages <= 1) return null

  const items = getPages(currentPage, totalPages)

  return (
    <S.Wrapper aria-label="Paginação">
      <S.Control
        type="button"
        aria-label="Página anterior"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <FiChevronLeft aria-hidden="true" />
      </S.Control>

      {items.map((page, index) =>
        page === null ? (
          <S.Ellipsis key={`gap-${index}`} aria-hidden="true">
            …
          </S.Ellipsis>
        ) : (
          <S.Page
            key={page}
            type="button"
            aria-label={`Página ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
            $current={page === currentPage}
            $secondary={
              page !== 1 && page !== totalPages && page !== currentPage
            }
            onClick={() => page !== currentPage && onPageChange(page)}
          >
            {page}
          </S.Page>
        )
      )}

      <S.Control
        type="button"
        aria-label="Próxima página"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <FiChevronRight aria-hidden="true" />
      </S.Control>
    </S.Wrapper>
  )
}

export default Pagination
