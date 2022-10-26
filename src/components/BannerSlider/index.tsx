import Slider, { SliderSettings } from 'components/Slider'
import Banner, { BannerProps } from 'components/Banner'

import * as S from './styles'

type ArrowsProps = React.HTMLAttributes<HTMLDivElement>

const ArrowRight = (props: ArrowsProps) => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <MdOutlineArrowForwardIos aria-label="next match" />
    </div>
  )
}

const ArrowLeft = (props: ArrowsProps) => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <MdOutlineArrowBackIosNew aria-label="previous match" />
    </div>
  )
}

import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos
} from 'react-icons/md'

export type BannerSliderProps = {
  items: BannerProps[]
}

const settings: SliderSettings = {
  dots: false,
  arrows: true,
  autoplay: true,
  infinite: true,
  nextArrow: <ArrowRight />,
  prevArrow: <ArrowLeft />,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        arrows: false
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false
      }
    }
  ]
}

const BannerSlider = ({ items }: BannerSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item) => (
        <Banner key={item.title} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default BannerSlider
