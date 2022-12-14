import { Story, Meta } from '@storybook/react'
import AgendaCard, { AgendaCardProps } from '.'

export default {
  title: 'AgendaCard',
  component: AgendaCard
} as Meta

export const Default: Story<AgendaCardProps> = () => (
  <div
    style={{
      maxWidth: '65rem',
      maxHeight: '28rem',
      display: 'flex',
      gap: '1rem'
    }}
  >
    <AgendaCard
      title="Reunião Extraordinária ServBúzios Sindicato dos Servidores"
      date="2022-12-13T18:41:54.480Z"
    />
    <AgendaCard
      title="Reunião Extraordinária"
      date="2022-12-13T18:41:54.480Z"
    />
  </div>
)
