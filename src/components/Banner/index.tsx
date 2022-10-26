/* eslint-disable @next/next/no-img-element */
import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  htmlTitle: string
  contentBackgroundColor: 'lightBrown' | 'dark' | 'black'
}

const Banner = ({
  img,
  title,
  htmlTitle,
  contentBackgroundColor
}: BannerProps) => (
  <S.Wrapper>
    <S.Caption background={contentBackgroundColor}>
      <S.Title dangerouslySetInnerHTML={{ __html: htmlTitle }} />
    </S.Caption>

    <S.ImageWrapper>
      {/* <Image src={img} alt={title} layout="fill" /> */}
      <img src={img} alt={title} />
    </S.ImageWrapper>
  </S.Wrapper>
)

export default Banner
