import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Settings } from 'react-slick'
import Slider from '.'
import styled from 'styled-components'

export default {
  title: 'Slider',
  component: Slider
} as ComponentMeta<typeof Slider>

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
}

const Slide = styled.div`
  background-color: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`

export const Horizontal: ComponentStory<typeof Slider> = () => (
  <Slider settings={settings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
  </Slider>
)

const verticalSettings: Settings = {
  dots: true,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  slidesToShow: 1
}

export const Vertical: ComponentStory<typeof Slider> = () => (
  <Slider settings={verticalSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
  </Slider>
)
