import { Story, Meta } from '@storybook/react'
import BannerSlider, { BannerSliderProps } from '.'

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
} as Meta

export const Default: Story<BannerSliderProps> = (args) => (
  <div style={{ maxWidth: '144rem', maxHeight: '68.6rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
)
