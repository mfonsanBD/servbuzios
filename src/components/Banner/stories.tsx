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
    img: 'comedouro-postural',
    title: 'Comedouro postural feito sob medida',
    htmlTitle: 'Comedouro<br>postural<br>feito sob<br>medida'
  }
} as ComponentMeta<typeof Banner>

export const Default: ComponentStory<typeof Banner> = (args) => (
  <div style={{ maxWidth: '100%', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)
