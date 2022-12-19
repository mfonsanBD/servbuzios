import { Story, Meta } from '@storybook/react'
import ConvenioCard, { ConvenioCardProps } from '.'

export default {
  title: 'ConvenioCard',
  component: ConvenioCard
} as Meta

export const Horizontal: Story<ConvenioCardProps> = (args) => (
  <ConvenioCard {...args} />
)

Horizontal.args = {
  imagem: '/img/beach.jpg',
  empresa: 'Nome Completo'
}

export const Vertical: Story<ConvenioCardProps> = (args) => (
  <ConvenioCard {...args} />
)

Vertical.args = {
  imagem: '/img/hamburger.jpg',
  empresa: 'Nome Completo'
}
