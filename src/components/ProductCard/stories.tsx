import { Story, Meta } from '@storybook/react'
import ProductCard, { ProductCardProps } from '.'

export default {
  title: 'ProductCard',
  component: ProductCard,
  args: {
    image: '/img/curve.png',
    title: 'Título',
    slug: 'titulo',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis culpa esse'
  }
} as Meta

export const Default: Story<ProductCardProps> = (args) => (
  <div style={{ width: '52.6rem', height: '21.3rem' }}>
    <ProductCard {...args} />
  </div>
)
