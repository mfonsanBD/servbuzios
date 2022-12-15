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
  image: '/img/beach.jpg',
  name: 'Nome Completo'
}

export const Vertical: Story<ConvenioCardProps> = (args) => (
  <ConvenioCard {...args} />
)

Vertical.args = {
  image: '/img/hamburger.jpg',
  name: 'Nome Completo'
}
