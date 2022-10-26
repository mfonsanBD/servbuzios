/* eslint-disable @next/next/no-img-element */
import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
}

const Banner = ({ img, title, subtitle }: BannerProps) => (
  <S.Wrapper>
    <S.ImageWrapper>
      {/* <Image src={img} alt={title} layout="fill" /> */}
      <img src={img} alt={title} />
    </S.ImageWrapper>

    <S.Caption>
      <S.Title>
        {title}
        <span>.</span>
      </S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Caption>
  </S.Wrapper>
)

export default Banner
