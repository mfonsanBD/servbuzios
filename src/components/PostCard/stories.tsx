import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PostCard from '.'

export default {
  title: 'PostCard',
  component: PostCard,
  args: {
    sourceUrl: '/img/about-image.jpg',
    title: 'Postagem 01',
    slug: 'postagem-01',
    url: 'string',
    createdAt: '2022-09-14T02:17:17',
    categories: [{ name: 'Dicas', slug: 'dicas' }]
  }
} as ComponentMeta<typeof PostCard>

export const Default: ComponentStory<typeof PostCard> = (args) => (
  <div style={{ width: '32rem' }}>
    <PostCard {...args} />
  </div>
)
