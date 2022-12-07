import { Story, Meta } from '@storybook/react'
import AdminPostCard, { AdminPostCardProps } from '.'

export default {
  title: 'Admin/AdminPostCard',
  component: AdminPostCard,
  args: {
    image:
      'https://i0.wp.com/upcy.petstour.com.br/wp-content/uploads/2022/09/qual-e-a-importancia-dos-bigodes-dos-gatos.jpg?fit=1200%2C900&ssl=1',
    title: 'A importância dos Bigodes dos Gatos',
    codigo: 'kçfhds'
  }
} as Meta

export const Default: Story<AdminPostCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <AdminPostCard {...args} />
  </div>
)
