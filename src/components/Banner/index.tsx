import MediaMatch from 'components/MediaMatch'
import Image from 'next/image'
import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  htmlTitle: string
}

const Banner = ({ img, title, htmlTitle }: BannerProps) => (
  <S.Wrapper>
    <S.Cover>
      <MediaMatch greaterThan="medium">
        <Image
          src={`/img/slide/${img}-desktop.png`}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </MediaMatch>
      <MediaMatch lessThan="medium">
        <Image
          src={`/img/slide/${img}-large-mobile.png`}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </MediaMatch>
    </S.Cover>
    <S.Caption>
      <S.Title dangerouslySetInnerHTML={{ __html: htmlTitle }} />
    </S.Caption>
  </S.Wrapper>
)

export default Banner
