import { Story, Meta } from '@storybook/react'

import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: '/img/background-01.jpg',
    title:
      'Desenvolva Sob Medida o Comedouro Postural Personalizado para o seu Aumigo',
    htmlTitle:
      'Desenvolva Sob Medida o Comedouro Postural Personalizado para o seu Aumigo',
    contentBackgroundColor: 'lightBrown'
  }
} as Meta

export const Default: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '100%', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)
