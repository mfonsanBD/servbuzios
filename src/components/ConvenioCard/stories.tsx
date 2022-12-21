import { Story, Meta } from '@storybook/react'
import ConvenioCard, { ConvenioCardProps } from '.'

export default {
  title: 'ConvenioCard',
  component: ConvenioCard
} as Meta

export const Default: Story<ConvenioCardProps> = (args) => (
  <ConvenioCard {...args} />
)

Default.args = {
  imagem: '/img/beach.jpg',
  empresa: 'Nome Completo'
}
