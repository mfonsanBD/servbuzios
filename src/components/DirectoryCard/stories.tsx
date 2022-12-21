import { Story, Meta } from '@storybook/react'
import DirectoryCard, { DirectoryCardProps } from '.'

export default {
  title: 'DirectoryCard',
  component: DirectoryCard,
  args: {
    name: 'Nome Completo',
    role: 'Tesoureiro'
  }
} as Meta

export const Default: Story<DirectoryCardProps> = (args) => (
  <div style={{ maxWidth: '41.8rem' }}>
    <DirectoryCard {...args} />
  </div>
)
