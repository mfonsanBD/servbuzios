import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import BannerSlider from '.'

import items from './mock'

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'black'
    }
  }
} as ComponentMeta<typeof BannerSlider>

export const Default: ComponentStory<typeof BannerSlider> = (args) => (
  <BannerSlider {...args} />
)
