import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ProductCard from '.'

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
} as ComponentMeta<typeof ProductCard>

export const Default: ComponentStory<typeof ProductCard> = (args) => (
  <div style={{ width: '52.6rem', height: '21.3rem' }}>
    <ProductCard {...args} />
  </div>
)
