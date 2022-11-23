import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TitleArea from '.'

export default {
  title: 'TitleArea',
  component: TitleArea,
  args: {
    title: 'Sobre Nós'
  }
} as ComponentMeta<typeof TitleArea>

export const Default: ComponentStory<typeof TitleArea> = (args) => (
  <TitleArea {...args} />
)
