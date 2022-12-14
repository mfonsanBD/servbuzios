import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Banner from '.'

export default {
  title: 'Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    img: '/img/beach.jpg',
    title: 'Reunião Extraordinária',
    slug: 'reuniao-extraordinaria',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type.'
  }
} as ComponentMeta<typeof Banner>

export const Default: ComponentStory<typeof Banner> = (args) => (
  <div style={{ maxWidth: '100%', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)
