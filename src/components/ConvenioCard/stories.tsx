import { Story, Meta } from '@storybook/react'
import ConvenioCard, { ConvenioCardProps } from '.'

export default {
  title: 'ConvenioCard',
  component: ConvenioCard,
  args: {
    image: '/img/beach.jpg',
    name: 'Nome Completo'
  }
} as Meta

export const Default: Story<ConvenioCardProps> = (args) => (
  <ConvenioCard {...args} />
)
