import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SlideShow from '.'

export default {
  title: 'SlideShow',
  component: SlideShow
} as ComponentMeta<typeof SlideShow>

export const Default: ComponentStory<typeof SlideShow> = () => <SlideShow />
