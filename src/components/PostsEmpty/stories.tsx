import { Story, Meta } from '@storybook/react'
import PostsEmpty, { PostsEmptyProps } from '.'

export default {
  title: 'PostsEmpty',
  component: PostsEmpty,
  args: {
    area: 'categoria'
  }
} as Meta

export const Default: Story<PostsEmptyProps> = (args) => (
  <PostsEmpty {...args} />
)
