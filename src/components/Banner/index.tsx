/* eslint-disable @next/next/no-img-element */
import * as S from './styles'

export type BannerProps = {
  img: string
  htmlTitle: string
}

const Banner = ({ img, htmlTitle }: BannerProps) => (
  <S.Wrapper img={img}>
    <S.Caption>
      <S.Title dangerouslySetInnerHTML={{ __html: htmlTitle }} />
    </S.Caption>
  </S.Wrapper>
)

export default Banner
