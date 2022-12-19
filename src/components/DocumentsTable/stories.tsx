import { Story, Meta } from '@storybook/react'
import DocumentsTable, { DocumentsProps } from '.'

export default {
  title: 'DocumentsTable',
  component: DocumentsTable,
  args: {
    items: [
      { documento: 'Documento 01', arquivo: '#' },
      { documento: 'Documento 02', arquivo: '#' },
      { documento: 'Documento 03', arquivo: '#' },
      { documento: 'Documento 04', arquivo: '#' },
      { documento: 'Documento 05', arquivo: '#' },
      { documento: 'Documento 06', arquivo: '#' }
    ]
  }
} as Meta

export const Default: Story<DocumentsProps> = (args) => (
  <DocumentsTable {...args} />
)
