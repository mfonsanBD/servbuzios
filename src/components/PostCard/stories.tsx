import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PostCard from '.'

export default {
  title: 'PostCard',
  component: PostCard,
  args: {
    image: '/img/about-image.jpg',
    title: 'Postagem 01',
    url: 'string',
    createdAt: '2022-09-14T02:17:17',
    categoryLabel: 'Dicas',
    categoryUrl: 'dicas'
  }
} as ComponentMeta<typeof PostCard>

export const Default: ComponentStory<typeof PostCard> = (args) => (
  <div style={{ width: '32rem' }}>
    <PostCard {...args} />
  </div>
)
