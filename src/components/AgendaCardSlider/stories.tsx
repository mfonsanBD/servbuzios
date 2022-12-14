import { Story, Meta } from '@storybook/react'
import AgendaCardSlider, { AgendaCardSliderProps } from '.'

import mock from './mock'

export default {
  title: 'AgendaCardSlider',
  component: AgendaCardSlider,
  args: {
    items: mock
  }
} as Meta

export const Default: Story<AgendaCardSliderProps> = (args) => (
  <AgendaCardSlider {...args} />
)
