/* eslint-disable @next/next/no-img-element */
import Button from 'components/Button'

import * as S from './styles'

import { TbMinusVertical } from 'react-icons/tb'
import { formatDateBlog } from 'utils/formatDate'

export type CategoryData = {
  name: string
  slug: string
}

export type PostCardPorps = {
  sourceUrl: string
  title: string
  slug: string
  createdAt: string
  categories: CategoryData[]
}

const PostCard = ({
  sourceUrl,
  title,
  slug,
  createdAt,
  categories
}: PostCardPorps) => {
  return (
    <S.Wrapper>
      <div className="card">
        <S.ImageBox>
          <img src={sourceUrl} alt={title} />
        </S.ImageBox>

        <div className="content">
          <h3>{title}</h3>

          <small>
            {categories.map((category, index) => (
              <a
                href={`/categoria/${category.slug}`}
                target="_blank"
                rel="noreferrer"
                key={index}
              >
                {category.name}
              </a>
            ))}

            <TbMinusVertical size={18} />

            <div className="createdAt">{formatDateBlog(createdAt)}</div>
          </small>

          <div>
            <Button minimal as="a" href={`/post/${slug}`}>
              Ler Post
            </Button>
          </div>
        </div>
      </div>
    </S.Wrapper>
  )
}

export default PostCard
