import { Story, Meta } from '@storybook/react'
import PdfCard, { PdfCardProps } from '.'

export default {
  title: 'PdfCard',
  component: PdfCard,
  args: {
    imagem: '/img/beach.jpg',
    titulo: 'PDF 01',
    arquivo:
      'https://res.cloudinary.com/mikedevanorak/image/upload/v1654353046/Placeholder-PDF_hy3xh2.pdf'
  }
} as Meta

export const Default: Story<PdfCardProps> = (args) => <PdfCard {...args} />
