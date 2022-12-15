import { Story, Meta } from '@storybook/react'
import DocumentsTable, { DocumentsProps } from '.'

export default {
  title: 'DocumentsTable',
  component: DocumentsTable,
  args: {
    items: [
      { name: 'Documento 01', url: '#' },
      { name: 'Documento 02', url: '#' },
      { name: 'Documento 03', url: '#' },
      { name: 'Documento 04', url: '#' },
      { name: 'Documento 05', url: '#' },
      { name: 'Documento 06', url: '#' }
    ]
  }
} as Meta

export const Default: Story<DocumentsProps> = (args) => (
  <DocumentsTable {...args} />
)
