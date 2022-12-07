import { Story, Meta } from '@storybook/react'
import AdminAddPostForm from '.'

export default {
  title: 'Admin/AdminAddPostForm',
  component: AdminAddPostForm
} as Meta

export const Default: Story = () => (
  <div style={{ width: '60rem' }}>
    <AdminAddPostForm />
  </div>
)
