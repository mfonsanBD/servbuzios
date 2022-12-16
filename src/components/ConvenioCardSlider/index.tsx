import ConvenioCard, { ConvenioCardProps } from 'components/ConvenioCard'
import Slider, { SliderSettings } from 'components/Slider'
import { CgArrowLongLeft, CgArrowLongRight } from 'react-icons/cg'

import * as S from './styles'

type ArrowsProps = React.HTMLAttributes<HTMLDivElement>

const ArrowRight = (props: ArrowsProps) => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <CgArrowLongRight aria-label="next match" />
    </div>
  )
}

const ArrowLeft = (props: ArrowsProps) => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <CgArrowLongLeft aria-label="previous match" />
    </div>
  )
}

const settings: SliderSettings = {
  arrows: true,
  slidesToShow: 5,
  infinite: true,
  autoplay: true,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: true,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ],
  nextArrow: <ArrowRight />,
  prevArrow: <ArrowLeft />
}

export type ConvenioCardSliderProps = {
  items: ConvenioCardProps[]
}

const ConvenioCardSlider = ({ items }: ConvenioCardSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <ConvenioCard key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default ConvenioCardSlider
