import { Story, Meta } from '@storybook/react'

import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    img: 'comedouro-postural',
    htmlTitle: 'Comedouro<br>postural<br>feito sob<br>medida'
  }
} as Meta

export const Default: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '100%', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)
