import { Story, Meta } from '@storybook/react'
import Selection, { SelectOptionsProps } from '.'

export default {
  title: 'Form/Selection',
  component: Selection,
  args: {
    options: [
      { value: 'total', label: 'Total' },
      { value: 'parcial', label: 'Parcial' }
    ],
    name: 'personalizacao',
    label: 'Tipo de Personalização:',
    placeholder: 'Qual o tipo de personalização você deseja?'
  },
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
} as Meta

export const Default: Story<SelectOptionsProps> = (args) => (
  <div style={{ maxWidth: 500, padding: 15 }}>
    <Selection {...args} />
  </div>
)
