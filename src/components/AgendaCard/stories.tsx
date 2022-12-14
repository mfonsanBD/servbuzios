import { Story, Meta } from '@storybook/react'
import AgendaCard, { AgendaCardProps } from '.'

export default {
  title: 'AgendaCard',
  component: AgendaCard,
  args: {
    title: 'Reunião Extraordinária ServBúzios',
    date: '2022-12-13T18:41:54.480Z'
  }
} as Meta

export const Default: Story<AgendaCardProps> = (args) => (
  <AgendaCard {...args} />
)
