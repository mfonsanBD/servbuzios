import { Story, Meta } from '@storybook/react'

import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: '/img/background-01.jpg',
    title:
      'Desenvolva sob medida o Comedouro Postural Personalizado para o seu Aumigo',
    subtitle:
      'Alta qualidade, design detalhado, execução artesanal e seleção cuidadosa de materiais'
  }
} as Meta

export const Default: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)
