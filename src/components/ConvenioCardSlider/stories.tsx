import { Story, Meta } from '@storybook/react'
import ConvenioCardSlider, { ConvenioCardSliderProps } from '.'
import mock from './mock'

export default {
  title: 'ConvenioCardSlider',
  component: ConvenioCardSlider,
  args: {
    items: mock
  }
} as Meta

export const Default: Story<ConvenioCardSliderProps> = (args) => (
  <ConvenioCardSlider {...args} />
)
