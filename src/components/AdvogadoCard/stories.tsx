import { Story, Meta } from '@storybook/react'
import AdvogadoCard, { AdvogadoCardProps } from '.'

export default {
  title: 'AdvogadoCard',
  component: AdvogadoCard,
  args: {
    nome: 'Dr. Advogado ServBúzios',
    oab: '000.000',
    whatsapp: '(21) 97480-4758'
  }
} as Meta

export const Default: Story<AdvogadoCardProps> = (args) => (
  <AdvogadoCard {...args} />
)
