import Slider, { SliderSettings } from 'components/Slider'
import AgendaCard, { AgendaCardProps } from 'components/AgendaCard'

import { CgArrowLongRight, CgArrowLongLeft } from 'react-icons/cg'

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
  slidesToShow: 4,
  infinite: false,
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

export type AgendaCardSliderProps = {
  items: AgendaCardProps[]
}

const AgendaCardSlider = ({ items }: AgendaCardSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <AgendaCard key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default AgendaCardSlider
